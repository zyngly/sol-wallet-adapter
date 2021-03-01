import React from "react";
import { Button, Popover } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useWallet } from '../contexts'

export const AppBar = () => {
  const {selectedWallet, setSelectedWallet, urlWallet} = useWallet();
  const TopBar = (
    <div className="App-Bar-right">
      {selectedWallet && selectedWallet.connected ? (
        <div style={{display: "flex", alignItems: "center"}}>
          <div>Wallet address: {selectedWallet.publicKey.toBase58()}</div>
          <Popover
        placement="topRight"
        content={<Button onClick={() => selectedWallet.disconnect()}>Disconnect</Button>}
        trigger="click"
      >
        <Button
          shape="circle"
          size="large"
          type="text"
          icon={<SettingOutlined />}
        />
      </Popover>
        </div>
      ) : (
          <div>
            <Button onClick={() => setSelectedWallet(urlWallet)}>Connect to Wallet</Button>
          </div>
        )}
    </div>
  );

  return TopBar;
};
