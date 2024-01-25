"use client"
import React from "react"
import { BsSearch } from "react-icons/bs"

export default function Input() {
    return (
        <div className="py-4">
            <div className="relative max-w-[52rem]">
                <form action="">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <BsSearch className="w-4 h-4"/>
                    </div>
                    <input type="text" name="" id="" className="input-text" placeholder="Enter City Name.."/>
                </form>
            </div>
        </div>
    )
}
