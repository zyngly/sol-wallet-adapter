import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  WalletProvider,
  ApiProvider,
  PurchaseProvider,
  AdvertiseProvider,
} from './contexts';

ReactDOM.render(
  <WalletProvider>
    <ApiProvider>
      <PurchaseProvider>
        <AdvertiseProvider>
          <App />
        </AdvertiseProvider>
      </PurchaseProvider>
    </ApiProvider>
  </WalletProvider>,
  document.getElementById('root'),
);
