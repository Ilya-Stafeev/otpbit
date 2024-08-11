import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePage } from '../../app/providers/PageProvider/PageProvider';

export const Name_page: FC = () => {
  const { currentPath, currentPageTitle, currentLinkTitle } = usePage();

  return (
    <section className='bg-image-name_page pt-[60px]'>
      <div className='py-[30px] text-center'>
        <div className='px-[15px] w-full'>
          <h1 className='text-[35px] font-bold leading-[40px] mb-[10px]'>
            {currentLinkTitle}
          </h1>
          <div className='text-center flex items-center justify-center'>
            <ul className='p-0 bg-transparent m-0 text-center unset flex'>
              <li className='text-[#fff] text-[16px] inline-block relative pr-[14px] mr-[5px]'>
                <Link to="/" className='transition-all duration-250 ease-in-out custom-pseudo hover:text-[#9C79FF]'>
                  Home
                </Link>
              </li>
              {currentPath !== '/' && (
                <li className='text-[#fff] text-[16px] inline-block relative'>
                  <Link to={currentPath} className='transition-all duration-250 ease-in-out hover:text-[#9C79FF]'>
                    {currentPageTitle}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}