import '../styles/application.scss';
import PropTypes from 'prop-types';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { motion } from 'framer-motion';
import { YMInitializer } from 'react-yandex-metrika';
import Layout from '../components/Layout';
import store from '../redux/store';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
        transition: {
          duration: 1,
        },
      }}
    >
      <Provider store={store}>
        <Layout>
          <Head>
            {/* was this working */}
            <YMInitializer
              accounts={[76919173]}
              options={{
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
              }}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          {/* eslint-disable-next-line  */}
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </motion.div>
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
