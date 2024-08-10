import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="text-center block">
        <div className="px-[15px] mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]">
            <div className="flex flex-wrap">
                <div className="md:w-2/3">
                    <p className="py-[25px] text-left">Otpbit © All right reserved 2018 - 2023.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}