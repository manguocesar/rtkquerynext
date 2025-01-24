'use server';

import React from 'react'

const Page = async ({ params }: { params: { name: string } }) => {
    const { name } = await params

    const countryRes = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const countryData = await countryRes.json()

    return (
        <div>
            <h1>Country: {countryData[0].name.common}</h1>
            <p>{countryData[0].capital[0]}</p>
            <p>{countryData[0].region}</p>
        </div>
    )
}

export default Page