import React from 'react'

export default function Header() {
    return (
        <header className="py-6 px-10 flex justify-between items-center">
            <div className='flex items-center gap-10'>
                <img src="./images/logo.svg" alt="logo" />
                <nav className='flex gap-8'>
                    <a href="" className='text-(--medium-gray)'>Features</a>
                    <a href="" className='text-(--medium-gray)'>Company</a>
                    <a href="" className='text-(--medium-gray)'>Careers</a>
                    <a href="" className='text-(--medium-gray)'>About</a>
                </nav>
            </div>
            <div className='flex gap-10 items-center'>
                <a href="" className='text-(--medium-gray)'>Login</a>
                <a href="" className='border-1 border-solid p-2 rounded-xl text-(--medium-gray) border-(--medium-gray)'>Register</a>
            </div>
        </header>
    )
}
