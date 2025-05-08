import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function FlagsCard() {

    const [currentPage, setCurrentPage] = useState(1);
    const [flags, setFlags] = useState([]);
    const [searchTerms, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
        setCurrentPage(1);
    }
    const filteredFlags = flags.filter((flag) => {
        return flag.name?.common?.toLowerCase().includes(searchTerms.toLocaleLowerCase())
    })

    const fetchFlags = async () => {
        try {

            let res = await fetch('https://restcountries.com/v3.1/all');
            let data = await res.json();
            setFlags(data)
            console.log(data);

        } catch (error) {
            console.log(error, 'data fetch me masla ');
        }
    }

    useEffect(() => {
        fetchFlags()
    }, []);

    // pagination
    const perPage = 8;
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentFlags = filteredFlags.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredFlags.length / perPage);

    return (
        <>
            <SearchBar getData={handleSearch} />


            <div className="flags-box w-full max-w-screen-2xl mx-auto  mt-20 flex flex-wrap gap-4 justify-center items-center">


                {

                    currentFlags.map((flag, index) => (

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
            {/* Pagination Buttons */}
            <div className='flex justify-center items-center mt-4 mb-5'>
                <div className="pagination mt-9 mx-auto">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className='bg-blue-800 p-2 rounded-md text-[17px] font-[2em] mr-8'

                    >
                        Previous
                    </button>

                    <span>Page {currentPage} of {totalPages}</span>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className='bg-blue-800 p-2 rounded-md text-[17px] font-[2em]  ml-8'
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );

}

export default FlagsCard