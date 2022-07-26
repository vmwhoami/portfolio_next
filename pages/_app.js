import '../styles/application.scss';
import PropTypes from 'prop-types';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import Layout from '../components/Layout';
import store from '../redux/store';
import ProtectedRoute from '../components/ProtectedRoute';

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <ProtectedRoute router={router}>
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          {/* eslint-disable-next-line  */}
          <Component {...pageProps} />
        </Layout>
      </ProtectedRoute>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
  router: PropTypes.instanceOf(Object).isRequired,
};
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
