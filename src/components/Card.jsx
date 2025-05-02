import React from 'react'
import CustomCard from './common/CustomCard'
import my from '../assets/images/svg/my.svg'
const Card = () => {
    return (
        <>
            <div className="d-flex min-vh-100 justify-center items-center">
                <div className="container">
                    <div className="d-flex flex-wrap gap-24 justify-center">
                        <CustomCard img={my} Name="Harsh Bishnoi" Tittle="Front End Developer" Gmail="harshbishnoi855@gmail.com" location="Hisar" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card