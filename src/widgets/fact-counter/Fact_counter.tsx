import { FC } from 'react'

interface Fact {
    value: string;
    description: string;
  }
  
  interface FactCounterProps {
    facts: Fact[];
  }

export const Fact_counter: FC<FactCounterProps> = ({ facts }) => {
  return (
    <section className="py-[110px] relative z-[-1] bg-image-fact_counter">
        <div className='fact-counter-area px-[15px] sm:max-w-[540px] sm:mx-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]'>
            <div className='flex flex-col lg:flex-row lg:space-x-[10%]'>
                <div className="lg:w-[40%]">
                    <div>
                        <h1 className="text-[#fff] text-[30px] leading-[36px] font-medium capitalize">
                            Make purchases run
                            <br />
                            smoothly for everyone.
                        </h1>
                        <div className="image-decor relative block w-[90px] h-[6px] mt-[17px]"></div>
                    </div>
                </div>
                <div className="lg:w-[60%]">
                    <ul className='grid grid-cols-1 md:grid-cols-3'>
                        {facts.map((fact, index) => (
                            <li key={index} className="block w-full max-w-[223px] text-center">
                                <div className="my-[4px]">
                                    <h1 className="text-[48px] tracking-[1px] leading-[40px] mb-[10px] font-normal">
                                        <span>{fact.value}</span>
                                    </h1>
                                    <h3 className="mt-[3px] capitalize font-semibold leading-[26px] text-[16px] text-[#fdc209]">
                                        {fact.description}
                                    </h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}