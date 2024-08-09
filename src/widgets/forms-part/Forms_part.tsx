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
        <div className='flex flex-wrap'>
          <div className='w-full px-[15px] md:w-1/3'>
            <div className='text-[#fff] text-left inline-block'>
              <ul>
                {content.map((item, index) => (
                  <li className='mb-[15px] pb-[15px] md:mb-[30px] md:pb-[30px]' style={{ borderBottom: "1px solid #4a28a9" }} key={index}>
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
          <div className='w-full p-[15px] md:w-2/3'>
            <form action="" className='mb-[1rem]'>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[30px]'>
                <div className='mb-[30px]'>
                  <input type="text" placeholder="Name" required className='outline-none leading-[1.5] text-[1rem] rounded block w-full px-[15px] py-[.50rem] text-[#fff] h-[50px] border-none bg-[#4a28a9]'/>
                </div>
                <div className='mb-[30px]'>
                  <input type="text" placeholder="Email" required className='outline-none leading-[1.5]  text-[1rem] rounded block w-full px-[15px] py-[.50rem] text-[#fff] h-[50px] border-none bg-[#4a28a9]'/>
                </div>
              </div>

              <div className='mb-[30px]'>
                <input type="text" placeholder="Subject" required className='outline-none bg-[#4a28a9] border-none h-[50px] text-[#fff] pl-[15px] w-full block text-[1rem] font-normal leading-[1.5] rounded py-[.75rem] px-[.375px]'/>
              </div>

              <div className='mb-[30px]'>
                <textarea rows={3} placeholder='Message' required className='h-[77px] outline-none bg-[#4a28a9] border-none text-[#fff] w-full block text-[1rem] font-normal leading-[1.5] rounded py-[.375rem] px-[.75rem] pt-[15px] pl-[15px]'></textarea>
              </div>
              <button type="submit" className='cursor-pointer border-none bg-[rgba(255,255,255,1)] text-[#3d1f94] px-[26px] py-[18px] leading-[16px] text-[14px] font-normal transition-all duration-200 ease-linear rounded hover:bg-[#281266] hover:text-[#fff]'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}