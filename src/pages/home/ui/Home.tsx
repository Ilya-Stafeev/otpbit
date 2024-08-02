import { FC, useEffect, useState } from 'react';

import { images } from '../../../shared/images/price/index';

import { Banner } from '../../../widgets/banner';
import { Heading } from '../../../widgets/heading';
import { Prices } from '../../../widgets/prices';
import { About_part } from '../../../widgets/about-part';

interface CryptoData {
  name: string;
  abbreviation: string;
  image: string;
  price: string;
  priceChange: string;
  volume: string;
  color: string;
}

const cryptos = [
  { name: 'Bitcoin', abbreviation: 'BTC', color: '#ee7800', ws: 'wss://stream.binance.com:9443/ws/btcusdt@ticker' },
  { name: 'Ethereum', abbreviation: 'ETH', color: '#3235aa', ws: 'wss://stream.binance.com:9443/ws/ethusdt@ticker' },
  { name: 'Binance Coin', abbreviation: 'BNB', color: '#3452ff', ws: 'wss://stream.binance.com:9443/ws/bnbusdt@ticker' },
  { name: 'Litecoin', abbreviation: 'LTC', color: '#3d434f', ws: 'wss://stream.binance.com:9443/ws/ltcusdt@ticker' },
  { name: 'Bitcoin Cash', abbreviation: 'BCH', color: '#016cb0', ws: 'wss://stream.binance.com:9443/ws/bchusdt@ticker' }
];

export const Home: FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>(
    cryptos.map(crypto => ({
        ...crypto,
        image: images[crypto.abbreviation],
        price: '',
        priceChange: '',
        volume: ''
    }))
  );

  useEffect(() => {
    const sockets = cryptos.map(crypto => ({
        abbreviation: crypto.abbreviation,
        socket: new WebSocket(crypto.ws)
    }));

    const handleMessage = (abbreviation: string, event: MessageEvent) => {
        const data = JSON.parse(event.data);
        setCryptoData(prevData => prevData.map(crypto => 
            crypto.abbreviation === abbreviation ? {
                ...crypto,
                price: parseFloat(data.c).toFixed(2),
                priceChange: parseFloat(data.P).toFixed(2),
                volume: (parseFloat(data.v) * parseFloat(data.c)).toFixed(2)
            } : crypto
        ));
    };

    sockets.forEach(({ abbreviation, socket }) => {
        socket.onmessage = (event) => handleMessage(abbreviation, event);
        socket.onerror = (error: Event) => {
            console.error(`WebSocket Error (${abbreviation}):`, error);
        };
        socket.onclose = () => {
            console.log(`WebSocket connection closed (${abbreviation})`);
        };
    });

    return () => {
        sockets.forEach(({ socket }) => socket.close());
    };
  }, []);

const getChangeClassName = (change: string): string => {
    const changeValue = parseFloat(change);
    if (changeValue > 0) {
        return "text-green-500";
    } else if (changeValue < 0) {
        return "text-red-500";
    } else {
        return "";
    }
};
  return (
    <>
      <Banner/>
      <Heading/>
      <Prices data={cryptoData} getChangeClassName={getChangeClassName} />
      <About_part/>
    </>
  )
}

