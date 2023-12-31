import React from 'react';
import bg from '../Assets/highlight-bg.jpg'
import img1 from '../Assets/pool.svg'
import img2 from '../Assets/ticket.svg'
import img3 from '../Assets/goodies.svg'
import img4 from '../Assets/certificate.svg'

const Timeline = () => (
<div className="bg-cover lg:bg-center pt-10 lg:pb-10" style={{ backgroundImage: `url(${bg})` }}>
<div className="flex flex-col items-center lg:pl-32 lg:pr-32 pl-5 pr-5">
      <h2 className="lg:text-5xl text-4xl font-bold mb-4 text-white">Event <span className="text-yellow-500 lg:text-5xl text-4xl font-bold font-Roboto">
          Highlights
        </span></h2>
        <h2 className="lg:text-3xl text-2xl font-bold mb-4 text-white mt-16">Evaluation Rounds</h2>
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black "
          >
            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              <div
                className=" bg-gradient-to-t from-[#E1AA1F] via-[#D9C82E] to-[#F3BC30] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-bold text-lg mb-1">First Evalution Round <br /> {'('}7th Jan 2024{')'}</h3>
                <p className="leading-tight text-justify ">
                  On the basis of your Submitted Presentation
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-5 pl-">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-t from-[#E1AA1F] via-[#D9C82E] to-[#F3BC30] shadow"
                ></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-t from-[#E1AA1F] via-[#D9C82E] to-[#F3BC30] shadow"
                ></div>
              </div>
              <div
                className="bg-gradient-to-t from-[#E1AA1F] via-[#D9C82E] to-[#F3BC30] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-bold text-lg mb-1">Screening Round <br /> {'('}8th-9th Jan 2024{')'}</h3>
                <p className="leading-tight text-justify">
                  Top 30 Team have to present thier Pitch during Screening Round 
                </p>
              </div>
            </div>
           
            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-gradient-to-t from-[#E1AA1F] via-[#D9C82E] to-[#F3BC30] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-bold text-lg mb-1">Final Presentation Round <br /> {'('}11th Jan 2024{')'}</h3>
                <p className="leading-tight text-justify">
                Top 20 teams will get a chance to present to investors.
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-t from-[#E1AA1F] via-[#D9C82E] to-[#F3BC30] shadow"
                ></div>
              </div>
            </div>
           
          </div>
        <h2 className="lg:text-3xl text-2xl font-bold mb-4 text-white lg:mt-32 mt-20">For Participants</h2>
        </div>
        <div className='flex lg:flex-row flex-col  justify-between lg:pl-40 pl-20 pr-20 gap-5 lg:pr-40 lg:p-10 '>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />

      </div>
        </div>
        

);

export default Timeline;
