/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withUrqlClient } from 'next-urql';
import { Provider } from 'react-redux';
import store from '../components/store';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withUrqlClient(() => ({ url: 'http://localhost:3000/api' }))(
  App
);
