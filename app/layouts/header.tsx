"use client"
import React, { useState } from "react"
import Input from "../components/input"



export default function Header() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");

    const url = `http://api.weatherapi.com/v1/forecast.
    json?key=ddd729dbc6fd4eb2a92131256240403&q=${location}&days=3&aqi=yes&alerts=yes`;

    const handleSearch = async  (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            e.preventDefault()
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                const data = await response.json()
                setData(data);
                setLocation("");
                setError("");
            }catch (error){
                setError("City Not Found");
                setData({});
            }
        }
    };

    return (
        <header className="bg-primary">
            <div className="max-w-screen-xl mx-auto py-8 px-4 text-center lg:py-16 lg:px-12">
                <div className="text-white">
                    <h1 className="text-5xl font-extrabold tracking-tight">Search Weather!</h1>
                    <span className="text-lg font-light">Enter a city and get the weather</span>
                </div>
                <Input handleSearch={handleSearch} setLocation={setLocation}/>
            </div>
            <div className="">
                {data.current && (
                    <div className="header-text">Weather for {data.location?.name}</div>
                )}
            </div>
        </header>
    )
}
