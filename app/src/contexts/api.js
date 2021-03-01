import React, { useState, useContext, createContext } from 'react';
import {
  bonfidaLogoAsBase64,
  ftxLogoAsBase64,
  binanceLogoAsBase64,
  sushiSwapLogoAsBase64,
} from './assets';

const DEFAULT_API_RESPONSE = [
  {
    title: 'Bonfida.com',
    label: 'All in one platform for data driven crypto traders.',
    link: 'https://bonfida.com/',
    image: bonfidaLogoAsBase64,
    signature: '123456789',
    bounds: {
      top: 1,
      left: 2,
      right: 6,
      bottom: 5,
    },
  },
  {
    title: 'FTX.com',
    label:
      'Cryptocurrency Derivatives Exchange, built by traders, for traders.',
    link: 'https://ftx.com/',
    image: ftxLogoAsBase64,
    signature: '123456789',
    bounds: {
      top: 6,
      left: 7,
      right: 18,
      bottom: 9,
    },
  },
  {
    title: 'Binance.com',
    label: 'Buy & sell Crypto in minutes',
    link: 'https://www.binance.com/en',
    image: binanceLogoAsBase64,
    signature: '123456789',
    bounds: {
      top: 10,
      left: 7,
      right: 13,
      bottom: 16,
    },
  },
  {
    title: 'SushiSwap.com',
    label: 'Everyone can be a chef with SUSHI',
    link: 'https://sushi.com/',
    image: sushiSwapLogoAsBase64,
    signature: '123456789',
    bounds: {
      top: 10,
      left: 14,
      right: 20,
      bottom: 16,
    },
  },
];

const ApiContext = createContext({
  data: [],
  setData: () => {},
});

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState(DEFAULT_API_RESPONSE);

  const handleAddCell = (newCellData) => {
    setData((existingCellData) => {
      return [...existingCellData, newCellData];
    });
  };

  return (
    <ApiContext.Provider value={{ data, setData, handleAddCell }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const { data, setData, handleAddCell } = useContext(ApiContext);

  return { data, setData, handleAddCell };
};
