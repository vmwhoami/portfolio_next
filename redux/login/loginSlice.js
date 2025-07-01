// login/loginSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Function to safely get initial state from localStorage
const getInitialStateFromLocalStorage = () => {
  let initialUser = null;
  let initialAdmin = false;
  let initialLoggedIn = false;

  // Check if running on the client side
  if (typeof window !== 'undefined' && window.localStorage) {
    const initialUserString = localStorage.getItem('vitaliemelnic');
    if (initialUserString) {
      try {
        const parsedUser = JSON.parse(initialUserString);
        initialUser = parsedUser.email;
        initialAdmin = parsedUser.admin;
        initialLoggedIn = !!parsedUser.token; // Ensure token exists
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        localStorage.removeItem('vitaliemelnic'); // Clear corrupted data
      }
    }
  }

  return {
    loggedIn: initialLoggedIn,
    admin: initialAdmin,
    user: initialUser,
    errorMsg: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  };
};

const initialState = getInitialStateFromLocalStorage();

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (credentials, { rejectWithValue }) => {
    const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/login';
    try {
      const response = await axios.post(url, credentials, axiosConfig);
      const { data } = response;
      const { admin, email, token } = data.data;
      // localStorage is safe to use here as thunks are typically dispatched client-side
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('vitaliemelnic', JSON.stringify({ email, admin, token }));
      }
      return { email, admin };
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data.message || error.message : error.message);
    }
  }
);

// Async thunk for autoLogin
export const autoLogin = createAsyncThunk(
  'login/autoLogin',
  async (_, { rejectWithValue }) => {
    // localStorage is safe to use here as thunks are typically dispatched client-side
    if (typeof window !== 'undefined' && window.localStorage) {
      const tokenDataString = localStorage.getItem('vitaliemelnic');
      if (tokenDataString) {
        try {
          const { email, admin, token } = JSON.parse(tokenDataString);
          if (token) {
            // Optionally: Add a call here to verify the token with the backend
            // For example: await axios.get('/api/v1/verifyToken', { headers: { Authorization: `Bearer ${token}` } });
            // If verification fails, throw an error to be caught below.
            return { email, admin };
          } else {
            throw new Error('No token found in localStorage data');
          }
        } catch (error) {
          localStorage.removeItem('vitaliemelnic');
          return rejectWithValue('Invalid session data.');
        }
      }
    }
    return rejectWithValue('No session data found.');
  }
);


const loginSlice = createSlice({
  name: 'login',
  initialState, // Uses the safely derived initial state
  reducers: {
    logout: (state) => {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('vitaliemelnic');
      }
      state.loggedIn = false;
      state.admin = false;
      state.user = null;
      state.errorMsg = null;
      state.status = 'idle';
    },
    setAdminManually: (state, action) => {
      state.admin = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.errorMsg = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loggedIn = true;
        state.user = action.payload.email;
        state.admin = action.payload.admin;
        state.errorMsg = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.loggedIn = false;
        state.errorMsg = action.payload;
      })
      .addCase(autoLogin.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.user = action.payload.email;
        state.admin = action.payload.admin;
        state.status = 'succeeded';
      })
      .addCase(autoLogin.rejected, (state, action) => {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.removeItem('vitaliemelnic');
        }
        state.loggedIn = false;
        state.admin = false;
        state.user = null;
        state.status = 'idle';
        state.errorMsg = action.payload;
      });
  },
});

export const { logout, setAdminManually } = loginSlice.actions;
export default loginSlice.reducer;