import { Button } from '@/components/ui/button';
import React from 'react';

// import { Container } from './styles';

function Header() {
  return (
    <div className='flex  justify-between p-3 px-44 max-md:px-3'>
        <p className='font-bold text-xl'>Travel</p>
        <ul className='flex items-center gap-4 max-md:hidden'>

            <li className='cursor-pointer'>ABOUT</li>
            <li className='cursor-pointer'>TOUR</li>
            <li className='cursor-pointer'>PACKAGE</li>
            <li className='cursor-pointer'>CONTACT</li>
         <Button>Reservar viagem</Button>

        </ul>
    </div>
  )
}

export default Header;