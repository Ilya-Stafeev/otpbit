import { FC } from 'react';
import banner from "../../shared/images/banner.svg";
import { Link } from 'react-router-dom';

export const Banner: FC = () => {
  return (
    <section className='pt-[60px] relative bg-image md:pt-[87px] lg:pt-[136px]'>
        <div className='relative h-minus-60 md:h-minus-87 lg:h-minus-136'>
            <div className='text-center xl:-translate-y-[-50%]'>
                <div className='px-[15px] sm:max-w-[540px] sm:mx-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]'>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='relative w-full'>
                            <div className="py-[30px] text-left lg:py-0 lg:pr-[50px] xl:-translate-y-[-50%]">
                                <h1 className='text-[24px] text-[#fff] font-extrabold uppercase mb-[10px] leading-[35px] sm:text-[40px] sm:leading-[50px]'>
                                    <span className='font-normal'>Platform for</span>
                                    <br />
                                    Blockchain solutions
                                </h1>
                                <p className='mb-[1rem]'>
                                    We strongly believe that blockchain is the technology of the future. That is why we have
                                    created a secure, clear, and easy-to-use platform to achieve the spread of blockchain
                                    technology and expand the cryptocurrency community.
                                </p>
                                <Link className='rounded-md inline-block px-[40px] py-[18px] cursor-pointer bg-[#412394] leading-[16px] font-normal text-[14px] transition-all duration-300 ease-linear delay-0 hover:bg-[#281266;]' to={'/register'}>Get started</Link>
                            </div>
                        </div>
                        <div className='relative w-full'>
                            <div className='animate-fade-in absolute'>
                                <div className='relative mb-[25px]'>
                                    <img src={banner} alt="" />
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