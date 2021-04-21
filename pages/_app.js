import '../scss/main.scss';
import { Provider } from "react-redux";
import React from "react";
import store from "../redux/store";
import { createWrapper } from "next-redux-wrapper";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
const makestore = () => store;
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(MyApp)
