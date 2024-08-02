import { FC } from 'react';
import { Navbar } from '../../widgets/navbar'
import { Outlet } from 'react-router-dom'
      
const linkNames: string[] = ["Home", "Wallets", "Exchange", "Options", "Staking", "About Us", "Terms"];
const linkPaths: string[] = ["", "/wallets", "/exchange", "/options", "/staking", "/about", "/terms"];

export const Layout: FC = () => {
  return (
    <div>
        <Navbar linkNames={linkNames} linkPaths={linkPaths} />
        <Outlet/>
        <div></div>
    </div>    
  )
}