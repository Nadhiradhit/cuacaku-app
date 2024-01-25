"use client"
import React from "react"
import Input from "../components/input"



export default function Header() {
    return (
        <header className="sticky top-0 z-50">
            <nav className="bg-primary flex items-center justify-center p-4">
                <div className="">
                    <h4 className="header-text">Cuaca-Ku</h4>
                </div>
            </nav>
        </header>
    )
}
