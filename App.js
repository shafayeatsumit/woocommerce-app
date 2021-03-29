/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import WooCommerceAPIObject from 'react-native-woocommerce-api';
import {BASE_URL, CONSUMER_KEY, CONSUMER_SECRET} from './woocommerce_key';

const WooCommerceAPI = new WooCommerceAPIObject({
  url: BASE_URL,
  ssl: true,
  consumerKey: CONSUMER_KEY,
  consumerSecret: CONSUMER_SECRET,
  wpAPI: true,
  version: 'wc/v3',
  queryStringAuth: true,
});

const App: () => Node = () => {
  useEffect(() => {
    WooCommerceAPI.get('products')
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return <SafeAreaView />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
