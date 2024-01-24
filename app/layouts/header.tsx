"use client"
import React from "react"
import Input from "../components/input"



export default function Header() {
    return (
        <header className="sticky top-0 z-50">
            <nav className="bg-primary flex items-center justify-between p-4">
                <div className="">
                    <h4 className="header-text">Cuaca-Ku</h4>
                </div>
                <div className="flex gap-2">
                    <ul>
                        <li>Hello</li>
                    </ul>
                    <ul>
                        <li>Hello</li>
                    </ul>
                    <Input/>
                </div>
            </nav>
        </header>
    )
}
