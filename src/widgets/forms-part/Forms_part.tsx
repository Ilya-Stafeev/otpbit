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
        <div className='grid grid-cols-1'>
          <div className=''>
            <div className='text-[#fff] text-left inline-block'>
              <ul>
                {content.map((item, index) => (
                  <li className='mb-[15px] pb-[15px]' key={index}>
                    <div className='float-left mr-[10px]'>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className='ml-[50px]'>
                      <h3 className='text-[16px] leading-[25px]'>{item.title}</h3>
                      <div className='w-full'>{item.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=''>
            <form action="" className='mb-[1rem]'>
              <div>
                <div className='mb-[30px]'>
                  <input type="text" placeholder="Name" required className='outline-none leading-[1.5] text-[1rem] rounded block w-full px-[15px] py-[.50rem] text-[#fff] h-[50px] border-none bg-[#4a28a9]'/>
                </div>
                <div className='mb-[30px]'>
                  <input type="text" placeholder="Email" required className='outline-none leading-[1.5]  text-[1rem] rounded block w-full px-[15px] py-[.50rem] text-[#fff] h-[50px] border-none bg-[#4a28a9]'/>
                </div>
              </div>
              <div></div>
              <div></div>
              <button type="submit" className=''></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}