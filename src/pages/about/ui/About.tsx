import { FC } from 'react';

import { Name_page } from '../../../widgets/name-page';
import { Stories_part } from '../../../widgets/stories-part';
import { Fact_counter } from '../../../widgets/fact-counter';
import { Mission_vision } from '../../../widgets/mission-vision';

const features = [
    {
      title: "Strong Security",
      description: "Protection against DDoS attacks, full data encryption",
    },
    {
      title: "SAFE AND SECURE",
      description: "Our platform is designed to protect funds and personal data better. Your privacy always comes first",
    },
    {
      title: "WORLD COVERAGE",
      description: "Providing services in 99% countries around all the globe",
    },
    {
      title: "HIGH LIQUIDITY",
      description: "Fast access to high liquidity orderbook for top currency pairs",
    }
];

const facts = [
    {
      value: "274",
      description: "Largest Transaction",
    },
    {
      value: "36",
      description: "Support Countries",
    },
    {
      value: "395",
      description: "Last 24 Hrs Transactions",
    },
];

const content = [
    {
      title: 'Our Mission',
      description:
        'Bitcoin is based on a protocol known as the blockchain, which allows to create, transfer and verify ultra-secure financial data without interference of third parties.',
    },
    {
      title: 'Our Advantages',
      description:
        'Our mission as an official partner of Bitcoin Foundation is to help you enter and better understand the world of #1 cryptocurrency and avoid any issues you may encounter.',
    },
];

export const About: FC = () => {   
    return (
        <>           
            <Name_page/>
            <Stories_part features={features}/>
            <Fact_counter facts={facts}/>
            <Mission_vision content={content}/>
        </>
    )
}
