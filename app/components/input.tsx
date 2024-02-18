"use client"
import React from "react"


export default function Input() {
    return (
        <div className="mt-4 relative">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <input type="text" className="input-text" placeholder="Enter City Name...." />
            <button type="submit" className="text-white absolute end-2.5 bottom-2 bg-slate-500 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-600 font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
    )
}
