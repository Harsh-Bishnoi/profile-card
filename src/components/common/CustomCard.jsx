import React from 'react'

const CustomCard = ({img, Heading, Tittle, Gmail, location}) => {
    return (
        <>
            <div className="max-w-[400px] border p-24 rounded-xl">
                <img className='w-full rounded-xl' src={img} alt="img"/>
                <h2 className='text-lg text-bold'>{Heading}</h2>
                <p className='text-base'>{Tittle}</p>
                <a className='text-base' href="#">{Gmail}</a>
                <p className='text-base'>{location}</p>
            </div>
        </>
    )
}

export default CustomCard