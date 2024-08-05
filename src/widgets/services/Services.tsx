import { FC } from "react";

interface Service {
    image: string;
    title: string;
    description: string;
    backendDescription: string;
}

interface ServicesProps {
    services: Service[];
}

export const Services: FC<ServicesProps> = ({ services }) => {    
  return (
    <section className="py-[65px] lg:py-[100px]">
            <div className="px-[15px] mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]">
                <div className="flex">
                    <div className="px-[15px] w-full">
                        <div className="text-center mb-[20px] md:mb-[30px] lg:mb-[50px]">
                            <h2 className='text-[26px] leading-[30px] mb-[5px] md:text-[30px] md:leading-[35px] lg:text-[35px] lg:leading-[40px]'>Services</h2>
                            <span className='text-[16px] text-[#01e8fe] md:text-[16px] lg:text-[20px]'>We Translate Your Dream Into Reality</span>
                        </div>
                    </div>
                </div>
                <div className="mb-[-30px]">
                    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div key={index} className="">
                                <div className="text-center services-box lg:text-left">
                                    <div className="frontend p-[15px] sm:p-[30px] lg:flex">
                                        <div className="inline-block lg:h-[52px] lg:w-[52px]">
                                            <img className="lg:h-[52px] lg:w-[52px]" src={service.image} alt={service.title} />
                                        </div>
                                        <div className="services-detail mt-[5px] lg:ml-[72px] lg:mt-[0px]">
                                            <h3 className="mb-[5px] text-[20px] sm:mt-[5px] ">{service.title}</h3>
                                            <div>{service.description}</div>
                                        </div>
                                    </div>
                                    <div className="backend p-[15px]">
                                        <div className="services-detail mt-[15px]">
                                            <div>{service.backendDescription}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}                              
                    </div>
                </div>
            </div>
    </section>
  )
}