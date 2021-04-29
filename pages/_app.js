import '../styles/application.scss';
import Head from "next/head";
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { motion } from 'framer-motion';
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
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </motion.div>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
