import React from 'react'
import '@/styles/globals.scss';

export default function LineGradient({h}: {h: Number | String}) {
    return (
        <div className="items-center text-center">
            <div className='crt'></div>
            <div className='line ml-[5px]'></div>
        </div>
    )
}
