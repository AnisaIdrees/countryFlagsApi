import React from 'react'

function DetailPage() {
  return (
    <>

      <div className=' detail-container w-xl h-screen bg-[black] text-[white]'>
        <div className="f-wraper  sm:w-[100wv] lg:w-[75vw] h-[100%] sm:bg-[#1f1d1d66] lg:bg-[#1f1d1dc9] mx-auto" >
          <h1 className='font-bold text-[45px] text-center p-5'> Details  of <span className='text-[#0062ff]'>Pakistan</span></h1>

          <div className="flag-banner h-[50%] bg-[red] flex justify-center ">
            <div className="image-box w-[50%] bg-[yellow]">
              <img src="https://flagcdn.com/w320/nz.png" 
              className='h-[ 300px] w-[360px]'/>
            </div>
            <div className="text-box bg-[green] w-[50%]">
              <h1 className='text-[30px] font-bold'>pakistan</h1>
              <p className='pt-4'>The flag of Panama is composed of four equal rectangular areas — a whi</p>
            </div>
          </div>
          
        </div>

      </div>

    </>
  )
}

export default DetailPage
