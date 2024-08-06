import { FC, useEffect, useState } from 'react';

import { imagesСoins } from '../../../shared/images/price/index';
import { imagesServices } from '../../../shared/images/services/index';

import about from "../../../shared/images/about-part/about-img.svg";

import { Banner } from '../../../widgets/banner';
import { Heading } from '../../../widgets/heading';
import { Prices } from '../../../widgets/prices';
import { About_part } from '../../../widgets/about-part';
import { Services } from '../../../widgets/services';
import { Forms_part } from '../../../widgets/forms-part';

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

const rewards: string[] = [
  "Earn daily rewards on your balance, no lock-up period",
  "Purchase newly-listed tokens at up to 50% off",
  "Prize pools worth up to USD 1,000,000"
];

const services = [
  {
    image: imagesServices.icon1,
    title: "Currency Wallet",
    description: "Get a life-time free Currency wallet maintained by Otpbit, the leading provider of secure Bitcoin wallets.",
    backendDescription: "Buy or Sell Bitcoin on Otpbit in real time. Trade with other users online using our live chat."
  },
  {
    image: imagesServices.icon2,
    title: "Bitcoin Escrow Service",
    description: "Your Bitcoin is held in our secure escrow until the trade is completed successfully.",
    backendDescription: "A marketing tool that rewards you for holding a deposit. Earn up to 18% interest rate per 6 months."
  },
  {
    image: imagesServices.icon3,
    title: "Security Storage",
    description: "Our platform is designed to protect funds and personal data better. Your privacy always comes first",
    backendDescription: "Since 2008, hundreds of millions of people have safely exchanged trillions of dollars worth of crypto. In fact, security is a big reason why digital money was created."
  },
  {
    image: imagesServices.icon4,
    title: "Reliable & Low Cost",
    description: "Benefit from low fees, fast order execution, and advanced platform features to increase your profitability",
    backendDescription: "Transaction and trading costs on Otpbit range from 0% to 4.5% depending on the cryptocurrency, transaction size and payment method."
  },
  {
    image: imagesServices.icon5,
    title: "Reliable & Low Cost",
    description: "We have always followed a client-oriented approach and placed our clients’ interests at the center of all our operations.",
    backendDescription: "Otpbit maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $550,000."
  },
  {
    image: imagesServices.icon6,
    title: "Experts Support",
    description: "Our customer service team works 24/7 to provide you with an exceptional level of support.",
    backendDescription: "We offer dependable, on-demand support options including 24/7 technical and remote support and 4-hour and next business day global on-site support in over 100 countries worldwide."
  }
];

export const Home: FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>(
    cryptos.map(crypto => ({
        ...crypto,
        image: imagesСoins[crypto.abbreviation],
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
      <About_part rewards={rewards} aboutImage={about}/>
      <Services services={services}/>
      <Forms_part/>
    </>
  )
}

