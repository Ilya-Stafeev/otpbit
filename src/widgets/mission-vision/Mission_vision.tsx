import { FC } from 'react'

interface ContentItem {
    title: string;
    description: string;
  }
  
interface MissionVisionProps {
    content: ContentItem[];
}

export const Mission_vision: FC<MissionVisionProps> = ({ content  }) => {
  return (
    <section>
        <div className='px-[15px] sm:max-w-[540px] sm:mx-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]'>
            <div className='block px-[40px] py-[60px] mt-[-55px]'>
                <div className='flex flex-col gap-[33px]'>
                    {content.map((item, index) => (
                        <div key={index} className="relative block pl-[47px]">
                            <div className="black pt-[10px]">
                                <div className="pb-[24px]">
                                    <h3 className="text-[18px] leading-[25px] font-normal mb-[10px]">
                                        {item.title}
                                    </h3>
                                <div className="image-decor relative block w-[90px] h-[6px] mt-[17px]"></div>
                                </div>
                                <div>
                                    <p>{item.description}</p>
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