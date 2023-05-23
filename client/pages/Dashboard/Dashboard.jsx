import React from 'react'
import { Header } from '../../components/Header/Header'
import { Waves } from '../../components/Waves/Waves'

export const Dashboard = () => {
    return (
        <section className='max-w-[100%] relative h-[100vh] bg-white'>
            <Header/>
            <Waves dir='wv__abajo'/>
            <Waves dir='wv__arriba'/>
        </section>
    )
}
