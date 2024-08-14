import { FC } from 'react'
import { Login_form } from './Login_form'

export const Auth_page: FC = () => {
  return (
    <div className='flex justify-center h-[100vh]'>
        <Login_form/>
    </div>
  )
}