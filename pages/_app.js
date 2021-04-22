import '../styles/application.scss';
import React from "react";
import Layout from '../components/Layout'
import store from "../redux/store";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";





function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
const makestore = () => store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)


