import React, { useEffect, useState } from 'react'
import MiniCard from './MiniCard'
import { GrLanguage } from "react-icons/gr";
import { FaPersonHarassing } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";
import { TbTimezone } from "react-icons/tb";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdAddHomeWork } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import Map from './Map';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { cca3 } = useParams();
  const [country, setcountry] = useState({});

  useEffect(() => {

    const fetchSingleFlag = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
        const data = await res.json()
        setcountry(data[0])
      } catch (error) {
        console.log('detail error', error);

      }
    }
    fetchSingleFlag()
  }, [cca3])

  if (!country) return <h1 className='text-white text-center'>Loading...</h1>;
  return (
    <>

      <div className=' detail-container w-xl h-full bg-[black] text-[white]'>
        <div className="f-wraper  sm:w-[100wv] lg:w-[75vw] h-[100%] sm:bg-[#1f1d1d66] lg:bg-[#1f1d1dc9] mx-auto" >
          <h1 className='font-bold text-[45px] text-center p-5'> Details  of <span className='text-[#0062ff]'>{country.name?.common}</span></h1>

          <div className="flag-banner h-[65%] pr-5 pl-5 pt-2 pb-0" >
            <div className="image-box lg:w-[500px] lg:h-[250px] sm:w-[500px] sm:h-[250px] bg-[white] p-1 rounded-md  mx-auto shadow-xl/20">
              <img src={country.flags?.png}
                className='h-[100%] w-[100%]' />
            </div>
          </div>
          <p className='text-center  p-4 text-[17px] '>{country.flags?.alt} </p>
         

          <div className="miniCard-container flex gap-4 flex-wrap justify-center items-center">

            <MiniCard
              icon={< MdOutlineReduceCapacity className='text-[90px] w-11 text-[#0062ff]' />}
              title={'Population'}
              value={country.populations}
            />

            <MiniCard
              icon={< MdAddHomeWork className='text-[90px] w-11 text-[#0062ff]' />}
              title={'Area'}
              value={'hswhmv'}
            />

            <MiniCard
              icon={<TbTimezone className='text-[90px] w-11 text-[#0062ff]' />}
              title={'Timezone'}
              value={'hswhmv'}
            />

            <MiniCard
              icon={<LuLanguages className='text-[90px] w-11 text-[#0062ff]' />}
              title={'Language'}
              value={'hswhmv'}
            />

            <MiniCard
              icon={<BsCurrencyExchange className='text-[90px] w-11 text-[#0062ff]' />}
              title={'Currency'}
              value={'hswhmv'}
            />

            <MiniCard
              icon={<GiModernCity className='text-[90px] w-11 text-[#0062ff]' />}
              title={'Capital'}
              value={'hswhmv'}
            />
            <MiniCard
              icon={<GrLanguage className='text-[90px] w-11 text-[#0062ff]' />}
              title={'Region'}
              value={'hswhmv'}
            />
          </div>



          <Map lat={country.latlng[0]} lng={country.latlng[1]} country={country.name.common} />



        </div>
      </div>



    </>
  )
}

export default DetailPage
