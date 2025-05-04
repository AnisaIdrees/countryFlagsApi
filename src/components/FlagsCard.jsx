import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar';

function FlagsCard() {
    const [flags, setFlags] = useState([]);

    const getData = (e) => {
        console.log(e.target.value);

    }

    const fetchFlags = async () => {
        let res = await fetch('https://restcountries.com/v3.1/all');
        let data = await res.json();
        setFlags(data)
        console.log(data);
    }

    useEffect(() => {
        fetchFlags()
    }, []);

    return (
        <>
            <div className="flags-box w-full max-w-screen-2xl mx-auto bg-[#060708] mt-20 flex flex-wrap gap-4 justify-center items-center">
                {
                    flags.map((flag, index) => (

                        <div className="flag-container w-[280px] h-[180px] " key={index}>
                            <img
                                src={flag.flags?.png}
                                alt={flag.flags?.alt} />

                            <div className="flag-overlay">{flag.name?.common}</div>
                        </div>


                    ))
                }

            </div>
        </>
    );

}

export default FlagsCard