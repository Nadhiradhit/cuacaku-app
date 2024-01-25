import React from 'react'
import Input from '../components/input'

export default function Search() {
    return (
        <main className="flex flex-col justify-center items-center py-8 bg-lime-100">
            <div className="header-text !text-2xl !font-bold">
                <h1>Search Weather On Your Country!</h1>
            </div>
            <Input/>
        </main>
    )
}
