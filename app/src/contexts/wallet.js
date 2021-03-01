import React, {
  useContext,
  createContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { Connection, SystemProgram, clusterApiUrl } from '@solana/web3.js';
import Wallet from '@project-serum/sol-wallet-adapter';

const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const network = clusterApiUrl('mainnet-beta');
  const [providerUrl, setProviderUrl] = useState('https://www.sollet.io');
  const connection = useMemo(() => new Connection(network), [network]);
  const addLog = (log) => {
    setLogs((logs) => [...logs, log]);
  };
  const urlWallet = useMemo(() => new Wallet(providerUrl, network), [
    providerUrl,
    network,
  ]);
  const [selectedWallet, setSelectedWallet] = useState(undefined);
  const [, setConnected] = useState(false);

  const sendTransaction = async () => {
    try {
      let transaction = SystemProgram.transfer({
        fromPubkey: selectedWallet.publicKey,
        toPubkey: '2i1vUcbvUKJcftvZMZr7utpZoZhQiLR1mLNjGRy9UmGB',
        lamports: 100,
      });
      addLog('Getting recent blockhash');
      transaction.recentBlockhash = (
        await connection.getRecentBlockhash()
      ).blockhash;
      addLog('Sending signature request to wallet');
      let signed = await selectedWallet.signTransaction(transaction);
      addLog('Got signature, submitting transaction');
      let signature = await connection.sendRawTransaction(signed.serialize());
      addLog('Submitted transaction ' + signature + ', awaiting confirmation');
      await connection.confirmTransaction(signature, 1);
      addLog('Transaction ' + signature + ' confirmed');
      return signature;
    } catch (e) {
      console.warn(e);
      addLog('Error: ' + e.message);
    }
  };

  useEffect(() => {
    if (selectedWallet) {
      selectedWallet.on('connect', () => {
        setConnected(true);
        addLog('Connected to wallet ' + selectedWallet.publicKey.toBase58());
      });
      selectedWallet.on('disconnect', () => {
        setConnected(false);
        addLog('Disconnected from wallet');
      });
      selectedWallet.connect();
      return () => {
        selectedWallet.disconnect();
      };
    }
  }, [selectedWallet]);

  return (
    <WalletContext.Provider
      value={{
        network,
        selectedWallet,
        setSelectedWallet,
        providerUrl,
        setProviderUrl,
        logs,
        urlWallet,
        sendTransaction,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const {
    network,
    selectedWallet,
    setSelectedWallet,
    providerUrl,
    setProviderUrl,
    logs,
    urlWallet,
    sendTransaction,
  } = useContext(WalletContext);
  return {
    network,
    selectedWallet,
    setSelectedWallet,
    providerUrl,
    setProviderUrl,
    logs,
    urlWallet,
    sendTransaction,
  };
};
