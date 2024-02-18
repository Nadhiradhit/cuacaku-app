"use client"
import React from "react"
import Input from "../components/input"

export default function Header() {
    return (
        <header className="bg-primary">
            <div className="max-w-screen-xl mx-auto py-8 px-4 text-center lg:py-16 lg:px-12">
                <div className="text-white">
                    <h1 className="text-5xl font-extrabold tracking-tight">Search Weather!</h1>
                    <span className="text-lg font-light">Enter a city and get the weather</span>
                </div>
                <Input/>
            </div>
        </header>
    )
}
