import { FC } from "react";

export const Services: FC = () => {
  return (
    <section className="py-[65px] lg:py-[100px]">
            <div className="px-[15px] mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]">
                <div className="flex">
                    <div className="px-[15px] w-full">
                        <div className="text-center mb-[50px]">
                            <h2 className='text-[26px] leading-[30px] mb-[5px] md:text-[30px] md:leading-[35px] lg:text-[35px] lg:leading-[40px]'>Services</h2>
                            <span className='text-[16px] text-[#01e8fe] md:text-[16px] lg:text-[20px]'>We Translate Your Dream Into Reality</span>
                        </div>
                    </div>
                </div>
                <div className="mb-[-30px]">
                    <div className="flex flex-col my-[-10px]">
                        <div className="py-[15px]">
                            <div className="mb-[30px] text-center services-box">
                                <div className="frontend">
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <div className="services-detail">
                                        <h3>Currency Wallet</h3>
                                        <p>
                                            Get a life-time free Currency wallet maintained by Otpbit, the leading provider of secure Bitcoin wallets.
                                        </p>
                                    </div>
                                </div>
                                <div className="backend">
                                    <div className="services-detail">
                                        <p>
                                            Buy or Sell Bitcoin on Otpbit in real time. Trade with other users online using our live chat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
    </section>
  )
}