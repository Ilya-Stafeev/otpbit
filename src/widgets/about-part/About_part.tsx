import { FC } from 'react';

interface AboutPartProps {
  rewards: string[];
  aboutImage: string;
}

export const About_part: FC<AboutPartProps> = ({ rewards, aboutImage }) => {
  return (
    <section className="py-[65px] bg-[#3d1f94]">
      <div className="px-[15px] sm:mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="flex flex-col mx-[-15px] lg:flex-row lg:items-center">
          <div className="px-[15px] lg:w-1/2">
            <div className="pb-30px">
              <div className="mb-[20px]">
                <h2 className="mb-[5px] leading-[30px] text-[26px] md:leading-[35px] md:text-[30px] lg:leading-[40px] lg:text-[35px]">About Otpbit</h2>
                <span className="text-[16px] text-[#01e8fe] md:text-[18px] lg:text-[20px]">We Translate Your Dream Into Reality</span>
              </div>
              <p className="mb-[1rem]">
                We store 96% of the digital assets on cold wallets and use WAF to detect and block hacker
                attacks. Moreover, we use two-factor authentication and anti-phishing software to add
                another level of protection to your account.
              </p>
              <ul>
                {rewards.map((reward, index) => (
                  <li key={index} className="relative pl-[49px] mb-[17px] text-[14px] leading-[39px] before:list-item-before md:text-[16px] ">
                    {reward}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-[15px] lg:w-1/2">
            <div className="flex md:justify-center md:items-center ">
              <img src={aboutImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}