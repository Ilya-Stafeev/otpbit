import { FC } from 'react'
import { Link } from 'react-router-dom';

export const Recover_form: FC = () => {  
  return (
    <div className='my-auto'>
        <form method="post" className='shadow-black border rounded p-[30px] border-[#f2f4f9] min-w-[350px] bg-[#fff]'>
            <h1 className='block text-center text-[22px] font-semibold mb-[15px] mt-[-5px] text-[#18214d]'>Reset password</h1>
            <div className=''>
                <input required type="email" name='email' placeholder='Enter Your Email Address' className='outline-none rounded h-[45px] border border-[#e0e3eb] text-[#18214d] text-[14px] block w-full px-[.75rem] py-[.375rem] font-normal leading-[1.5] bg-[#fff]'/>
            </div>
            <button className='rounded pointer w-full p-[12px] font-semibold mt-[20px] text-[#fff] transition-colors duration-300 ease-linear bg-[#0d6efd] hover:bg-[#007bff]'>Sign In</button>
            <h1 className='text-[14px] text-center text-[#18214d] mt-[20px] mb-[.5rem] leading-[1.2]'>
              Remember Password?
              <Link className='ml-1 font-normal text-[#5f8fff] hover:text-[#4542ff] transition-colors duration-300 ease-linear' to={'/auth'}>Sign in here</Link>
            </h1>
        </form>
    </div>
  )
}