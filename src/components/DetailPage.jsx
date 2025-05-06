import React from 'react'

function DetailPage() {
  return (
    <>

      <div className=' detail-container w-xl h-full bg-[black] text-[white]'>
        <div className="f-wraper  sm:w-[100wv] lg:w-[75vw] h-[100%] sm:bg-[#1f1d1d66] lg:bg-[#1f1d1dc9] mx-auto" >
          <h1 className='font-bold text-[45px] text-center p-5'> Details  of <span className='text-[#0062ff]'>Pakistan</span></h1>

          <div className="flag-banner h-[65%] pr-5 pl-5 pt-2 pb-0" >
            <div className="image-box lg:w-[500px] lg:h-[250px] sm:w-[500px] sm:h-[250px] bg-[white] p-1 rounded-md  mx-auto shadow-xl/20">
              <img src="https://flagcdn.com/w320/nz.png"
                className='h-[100%] w-[100%]' />
            </div>
          </div>
          <p className='text-center text-[20px]'>The flag of Tonga has a red field. A white rectangle bearing a red Greek cross is superimposed in the canton.</p>

        </div>

      </div>



    </>
  )
}

export default DetailPage
