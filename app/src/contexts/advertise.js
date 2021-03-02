import React, { useCallback, useContext, useState, createContext } from 'react';
import { Input, Image, Modal, Typography } from 'antd';

const { Link } = Typography;

const AdvertiseContext = createContext({
  advertise: () => {},
});

export const AdvertiseProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentAdvertisement, setCurrentAdvertisement] = useState();
  const advertise = useCallback(() => setIsModalVisible(true), []);
  const close = useCallback(() => setIsModalVisible(false), []);

  return (
    <AdvertiseContext.Provider
      value={{ currentAdvertisement, setCurrentAdvertisement, advertise }}
    >
      {children}
      {currentAdvertisement && (
        <Modal
          title="View advertiser and NFT"
          okText="Close"
          visible={isModalVisible}
          okButtonProps={{ style: { display: 'none' } }}
          onCancel={close}
          width={400}
        >
          {isModalVisible && (
            <>
              <Image width={'100%'} src={currentAdvertisement.image} />
              <Input value={currentAdvertisement.title} />
              <Input value={currentAdvertisement.label} />
              <Input
                value={currentAdvertisement.link}
                addonAfter={
                  <Link href={currentAdvertisement.link}>Go to link</Link>
                }
              />
              <Input
                value={currentAdvertisement.signature}
                disabled
                addonAfter={
                  <Link
                    href={`https://explorer.solana.com/tx/${currentAdvertisement.signature}`}
                  >
                    View NFT
                  </Link>
                }
              />
            </>
          )}
        </Modal>
      )}
    </AdvertiseContext.Provider>
  );
};

export const useAdvertise = () => {
  const {
    currentAdvertisement,
    setCurrentAdvertisement,
    advertise,
  } = useContext(AdvertiseContext);

  return { currentAdvertisement, setCurrentAdvertisement, advertise };
};
