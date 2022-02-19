import React from 'react'
// import './_page.css'
import D from './D.svg';
;


function Page() {
    return (
        <div className='Page'>
            <div className="text">
                <h2>SAFETY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, blanditiis quo necessitatibus iusto, deleniti id,
                    maxime vel laborum quaerat laudantium est harum et dignissimos
                    voluptas non explicabo dicta facilis assumenda.
                </p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, blanditiis quo necessitatibus iusto, deleniti id,
                    maxime vel laborum quaerat laudantium est harum et dignissimos
                    voluptas non explicabo dicta facilis assumenda.
                </p>
            </div>
            <div className="img">
                <img src={D} alt="" />
            </div>
        </div>
    )
}

export default Page;
