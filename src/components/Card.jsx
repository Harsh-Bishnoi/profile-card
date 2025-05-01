import React from 'react'
import { CARD_DATA } from './utils/helper'
import CustomCard from './common/CustomCard'

const Card = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="max-w-[1440px] px-3">
                    <div className="flex flex-wrap -mx-3 flex-row gap-24 justify-center">
                        {CARD_DATA.map((item, index) => (
                            <div key={index} className="">
                                <CustomCard img={item.img} Heading={item.name} Tittle={item.title} Gmail={item.gmail} location={item.location} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card