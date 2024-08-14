import { FC, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom'

export const Register_form: FC = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaToken) {        
      console.log('Form submitted');       
    } else {
      console.log('Please complete the CAPTCHA');
    }
  };
  return (
    <div className='my-auto'>
        <form method="post" onSubmit={handleSubmit} className='shadow-black border rounded p-[30px] border-[#f2f4f9] min-w-[350px] bg-[#fff]'>
            <h1 className='block text-center text-[22px] font-semibold mb-[15px] mt-[-5px] text-[#18214d]'>Create Account</h1>
            <p className='mb-[1rem] text-[#18214d]'>Please check that you are visiting the correct URL</p>
            <div className='shadow-none border border-[#333] h-[46px] rounded-xl transition-all flex justify-center items-center text-[20px]'>
                <div className='text-[#02C076] fill-[#02C076] w-[1em] h-[1em] '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16.27 10.5V8.07C16.27 5.82 14.45 4 12.2 4S8.13 5.82 8.13 8.07v2.43H6v8.94h12.43V10.5h-2.16zm-3.07 6.46h-2v-4h2v4zm1.07-6.46h-4.14V8.07c0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07v2.43z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className='text-[#6c757d]'>
                    <span className='text-[#02C076] mr-[3px]'>https://</span>
                    otpbit.com
                </div>
            </div>
            <hr className='h-[1px] my-[1rem]'/>
            <div className='mb-[1rem]'>
                <input type="text" name='name' placeholder='Full Name' className='outline-none rounded h-[45px] border border-[#e0e3eb] text-[#18214d] text-[14px] block w-full px-[.75rem] py-[.375rem] font-normal leading-[1.5] bg-[#fff]'/>
            </div>
            <div className='mb-[1rem]'>
                <input type="email" name='email' placeholder='Email Address' className='outline-none rounded h-[45px] border border-[#e0e3eb] text-[#18214d] text-[14px] block w-full px-[.75rem] py-[.375rem] font-normal leading-[1.5] bg-[#fff]'/>
            </div>
            <div className='mb-[1rem]'>
                <input type="password" name='password' placeholder='Password' className='outline-none rounded h-[45px] border border-[#e0e3eb] text-[#18214d] text-[14px] block w-full px-[.75rem] py-[.375rem] font-normal leading-[1.5] bg-[#fff]'/>
            </div>
            <div className='mb-[1rem]'>
                <input type="password" name='re_password' placeholder='Confirm Password' className='outline-none rounded h-[45px] border border-[#e0e3eb] text-[#18214d] text-[14px] block w-full px-[.75rem] py-[.375rem] font-normal leading-[1.5] bg-[#fff]'/>
            </div>
            <div className='mb-[16px]'>
                <ReCAPTCHA
                    sitekey="6Ld9jSYqAAAAAEEUdapS6hlgeTA8jKwCXPRtyX-X"
                    onChange={onCaptchaChange}
                />
            </div>
            <div className='w-full flex'>
                <div className='py-[12px]'>
                  <div className='min-h-[1.5rem] pl-[1.5rem] mb-[.125rem]'>
                      <input
                          value=""
                          className="mt-[4px] float-left ml-[-1.5em] mb-[.25em] w-[1em] h-[1em] bg-gray-100 border border-gray-300 rounded cursor-pointer appearance-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
                          type="checkbox"
                          id='form-checkbox'
                      />
                      <label className='text-[#18214d]' htmlFor="form-checkbox">I agree to the <Link className='text-[#0d6efd]' to={'/terms'}>Terms & Conditions</Link></label>
                  </div>
                </div>                
            </div>
            <button className='rounded pointer w-full p-[12px] font-semibold mt-[20px] text-[#fff] transition-colors duration-300 ease-linear bg-[#0d6efd] hover:bg-[#007bff]'>Create Account</button>
        </form>
        <h1 className='text-[14px] text-center mt-[20px] mb-[.5rem] font-semibold leading-[1.2]'>
          Already have an account?
          <Link 
              className='ml-1 font-normal text-[#5f8fff] hover:text-[#d4e5ff] transition-colors duration-300 ease-linear'
              to={'/auth'}>
              Sign in here
          </Link>
        </h1>
    </div>
  )
}



