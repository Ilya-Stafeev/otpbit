import { FC } from 'react';
import { Navbar } from '../../widgets/navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../widgets/footer';
      
const linkNames: string[] = ["Home", "Wallets", "Exchange", "Options", "Staking", "About Us", "Terms"];
const linkPaths: string[] = ["", "/wallets", "/exchange", "/options", "/staking", "/about", "/terms"];

export const Layout: FC = () => {
  return (
    <div>
        <Navbar linkNames={linkNames} linkPaths={linkPaths} />
        <Outlet/>
        <Footer/>
    </div>    
  )
}