import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function FlagsCard() {
    const [flags, setFlags] = useState([]);
    const [searchTerms, setSearch] = useState('')
    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    const filteredFlags = flags.filter((flag) => {
        return flag.name?.common?.toLowerCase().includes(searchTerms.toLocaleLowerCase())
    })

    const fetchFlags = async () => {
        let res = await fetch('https://restcountries.com/v3.1/all');
        let data = await res.json();
        console.log(res.data ,'data fetch me masla ');
        
        setFlags(data)
        console.log(data);
    }

    useEffect(() => {
        fetchFlags()
    }, []);

    return (
        <>
            <SearchBar getData={handleSearch} />

         
            <div className="flags-box w-full max-w-screen-2xl mx-auto  mt-20 flex flex-wrap gap-4 justify-center items-center">
                
               
                {
                
                    filteredFlags.map((flag, index) => (
                      
                        <div className="flag-container w-[280px] h-[180px] " key={index}>
                              <Link to={`/Country/${flag?.cca3}`}>
                            <img
                                src={flag.flags?.png}
                                alt={flag.flags?.alt} />

                            <div className="flag-overlay">{flag.name?.common}</div>
                            </Link>
                        </div>
                       
                    ))
                }
               
            </div>
      
        </>
    );

}

export default FlagsCard