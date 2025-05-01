import React from 'react'

const CustomCard = ({ img, Name, Tittle, Gmail, location }) => {
    return (
        <>
            <div className="flex">
                <img className='w-100 max-w-400' src={img} alt="img" />
                <div className="card">
                    <h2 className='name'>{Name}</h2>
                    <p className='text mt-10 mb-10'>{Tittle}</p>
                    <a className='text' href="mailto:harshbishnoi855@gmail.com">{Gmail}</a>
                    <p className='text mt-10'>{location}</p>
                </div>
            </div>
        </>
    )
}

export default CustomCard