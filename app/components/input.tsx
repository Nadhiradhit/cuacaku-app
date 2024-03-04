"use client"
import React from "react"

interface InputProps{
    handleSearch : (event: React.KeyboardEvent<HTMLInputElement>) => void
    setLocation : React.Dispatch<React.SetStateAction<string>>
}


export default function Input({handleSearch, setLocation}: InputProps) {
    return (
        <div className="mt-4 relative">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <input type="text" className="input-text" placeholder="Enter City Name...." onKeyDown={handleSearch} onChange={(e) => setLocation(e.target.value)}/>
            <button type="submit" className="text-white absolute end-2.5 bottom-2 bg-primary hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-600 font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
    )
}
