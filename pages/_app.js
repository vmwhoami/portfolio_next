import '../styles/application.scss';
import { Provider } from "react-redux";
import React from "react";
import store from "../redux/store";
import Navbar from "../components/Nav";
import { createWrapper } from "next-redux-wrapper";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}
const makestore = () => store;
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(MyApp)
