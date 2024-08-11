import { FC } from 'react';

interface Feature {
  title: string;
  description: string;
}

interface StoriesPartProps {
  features: Feature[];
}

export const Stories_part: FC<StoriesPartProps> = ({ features }) => {
  return (
    <section className='px-[15px] sm:max-w-[540px] sm:mx-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]'>
      <div className="py-[65px] lg:py-[100px]">
        <div className='xl:flex gap-[30px]'>
            <div>
                <div className="relative pb-[50px] mt-[-5px]">
                    <h1 className="block text-[#fff] text-[30px] leading-[36px] font-medium capitalize m-0">
                        Story About Otpbit
                    </h1>
                    <div className="image-decor relative block w-[90px] h-[6px] mt-[17px]"></div>
                </div>

                <div>
                    <h3 className="text-[18px] leading-[25px] mb-[10px] font-normal">
                        Since 2015, We provide best service for
                        <br />
                        our valuable clients.
                    </h3>
                    <p className="mb-[1rem]">
                        A place for everyone who wants to simply buy and sell Bitcoins. Deposit funds using your cryptocurrencies. Instant buy/sell of Bitcoins at fair price is guaranteed. Nothing extra. Join over 700,000 users from all over the world satisfied with our services.
                    </p>
                    <p className="mb-[1rem]">
                        We are here because we are passionate about open, transparent markets and aim to be a major driving force in widespread adoption, we are the first and the best in cryptocurrency.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                {features.map((feature, index) => (
                    <div
                    key={index}
                    className="flex flex-col justify-center border border-[#f2f2f2] px-[30px] pt-[30px] pb-[22px]"
                    >
                    <h3 className="text-[18px] leading-[25px] font-normal mb-[10px]">
                        {feature.title}
                    </h3>
                    <p className="mb-[1rem]">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}