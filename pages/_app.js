// app.js
"use client";

import './globals.css'
import '../styles/application.scss';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';

function MyApp(props) {
  // Use useWrappedStore hook to get the Redux store
  const { store, props: { pageProps } } = wrapper.useWrappedStore(props);
  const { Component, router } = props;

  return (
    <Provider store={store}>
      <ProtectedRoute router={router}>
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ProtectedRoute>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

export default MyApp; 