import { React, useRef, useEffect } from 'react'
import PaswordH from '../1 pasword check/password'

function Header() {

    return (
        <>
            <header>
                <h1 >check your <span>password</span></h1>
                <p className='HP'>If you want to test any password</p>
                {/* <br /> */}
                <PaswordH />
            </header>
        </>
    )
}

export default Header
