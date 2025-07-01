// login/loginSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialUserString = localStorage.getItem('vitaliemelnic');
let initialUser = null;
let initialAdmin = false;
let initialLoggedIn = false;

if (initialUserString) {
  try {
    const parsedUser = JSON.parse(initialUserString);
    // You might want to validate the token's expiry here if it has one
    initialUser = parsedUser.email;
    initialAdmin = parsedUser.admin;
    initialLoggedIn = !!parsedUser.token; // Ensure token exists
  } catch (e) {
    console.error("Failed to parse user from localStorage", e);
    localStorage.removeItem('vitaliemelnic'); // Clear corrupted data
  }
}

const initialState = {
  loggedIn: initialLoggedIn,
  admin: initialAdmin,
  user: initialUser,
  errorMsg: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

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
      const { data } = response; // response.data from axios is the actual server response
      const { admin, email, token } = data.data; // Assuming server response is { data: { admin, email, token } }
      localStorage.setItem('vitaliemelnic', JSON.stringify({ email, admin, token }));
      return { email, admin }; // This will be the payload of the fulfilled action
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data.message || error.message : error.message);
    }
  }
);

// Simple thunk for autoLogin - just checks local storage and dispatches update
// Or could be an async thunk if it needs to validate token with backend
export const autoLogin = createAsyncThunk(
  'login/autoLogin',
  async (_, { dispatch, getState, rejectWithValue }) => {
    const tokenDataString = localStorage.getItem('vitaliemelnic');
    if (tokenDataString) {
      try {
        const { email, admin, token } = JSON.parse(tokenDataString);
        // Optionally: Add a call here to verify the token with the backend
        // For example: await axios.get('/api/v1/verifyToken', { headers: { Authorization: `Bearer ${token}` } });
        // If verification fails, throw an error to be caught below.
        if (token) {
          return { email, admin };
        } else {
          throw new Error('No token found in localStorage data');
        }
      } catch (error) {
        localStorage.removeItem('vitaliemelnic');
        return rejectWithValue('Invalid session data.');
      }
    }
    return rejectWithValue('No session data found.'); // Or simply do nothing and let initial state handle it
  }
);


const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // Synchronous action for logout
    logout: (state) => {
      localStorage.removeItem('vitaliemelnic');
      state.loggedIn = false;
      state.admin = false;
      state.user = null;
      state.errorMsg = null;
      state.status = 'idle';
    },
    setAdminManually: (state, action) => { // Renamed to avoid conflict with potential 'admin' field
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
        // Handle auto-login failure (e.g., invalid token)
        // Often, this means resetting to a logged-out state.
        localStorage.removeItem('vitaliemelnic');
        state.loggedIn = false;
        state.admin = false;
        state.user = null;
        state.status = 'idle'; // Or 'failed' if you want to show an error
        state.errorMsg = action.payload; // Optional: show why auto-login failed
      });
  },
});

// Export actions and reducer
export const { logout, setAdminManually } = loginSlice.actions;
export default loginSlice.reducer;