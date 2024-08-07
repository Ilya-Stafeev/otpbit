import { FC } from 'react'

interface FormItem {
  image: string;
  title: string;
  text: string;
}

interface FormsPartProps {
  content: FormItem[];
}

export const Forms_part: FC<FormsPartProps> = ({ content  }) => {
  return (
    <section className='py-[65px] bg-image-forms'>
      <div className="px-[15px] mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]">
        <div className="flex">
          <div className="px-[15px] w-full">
            <div className="text-center mb-[20px] md:mb-[30px] lg:mb-[50px]">
              <h2 className='text-[26px] leading-[30px] mb-[5px] md:text-[30px] md:leading-[35px] lg:text-[35px] lg:leading-[40px]'>Get In Touch</h2>
              <span className='text-[16px] text-[#01e8fe] md:text-[16px] lg:text-[20px]'>Emergence and design of the idea</span>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='px-[15px]'>
            <div className='text-[#fff] text-left inline-block'>
              <ul>
                {content.map((item, index) => (
                  <li key={index}>
                    <div className='float-left mr-[10px]'>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className='ml-[50px]'>
                      <h3 className='text-[16px] leading-[25px]'>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='px-[15px]'></div>
        </div>
      </div>
    </section>
  )
}