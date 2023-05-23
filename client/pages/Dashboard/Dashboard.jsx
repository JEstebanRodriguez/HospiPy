import React from 'react'
import { Header } from '../../components/Header/Header'
import { Waves } from '../../components/Waves/Waves'

export const Dashboard = () => {
    return (
        <section className='w-full relative h-[100vh] bg-white'>
            <Header />
            <Waves dir='wv__down' firstColor='fill-primary' secondColor='fill-slate-200' />
            <Waves dir='wv__up' firstColor='fill-slate-200'/>
        </section>
    )
}