"use client";
import { Checkbox } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import  Image from "next/image"; 
import  tech from '../../public/assets/tech.jpg';

const page = () => {
  return (
    <div className=" flex flex-col  gap-7  items-center">
      <div className=" flex gap-4 bg-white w-full shadow-md rounded px-8 pt-6 pb-8  justify-center items-center">
        <input
          className=" text-center  w-10/12 p-2 rounded border border-gray-800 "
          type="text"
          placeholder="Search Courses"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <hr className="w-full " />
      <h1>TOP SEARCHES</h1>
      <div className="flex flex-col gap-4 w-full  ml-36 md:flex md:flex-row ">
        <div className=" md:flex md:gap-4">
          <button className=" border  border-gray-400 p-2 rounded-2xl">
            Marketing Strategy
          </button>
          <button className=" border  border-gray-400 p-2 rounded-2xl">
            UX Design
          </button>
        </div>
        <div className=" md:flex md:gap-4">
          <button className=" border  border-gray-400 p-2 rounded-2xl">
            Excel
          </button>
          <button className=" border  border-gray-400 p-2 rounded-2xl">
            Adobe PhotoShop
          </button>
          <button className=" border  border-gray-400 p-2 rounded-2xl">
            CRM
          </button>
        </div>
        <div className=" md:flex md:gap-4">
          <button className=" border  border-gray-400 p-2 rounded-2xl">
            Photography
          </button>
          <button className=" border  border-gray-400 p-2 rounded-2xl">
            Content Making
          </button>
        </div>
      </div>
      <hr className="w-full " />
      <h1>CATEGORİES</h1>
      <div className="flex flex-col gap-4 w-full  ml-36 md:flex md:flex-row">
        <label className="">
          <input type="checkbox" />
          <span className="ml-4">Marketing</span>
        </label>
        <label className="">
          <input type="checkbox" />
          <span className="ml-4">HR</span>
        </label>
        <label className="">
          <input type="checkbox" />
          <span className="ml-4">Sales</span>
        </label>
        <label className="">
          <input type="checkbox" />
          <span className="ml-4">Drawing</span>
        </label>
        <label className="">
          <input type="checkbox" />
          <span className="ml-4">Data</span>
        </label>
      </div>
      <hr className="w-full " />
      <div className="flex flex-col gap-4 w-full  ml-36 md:flex md:flex-row">
        <div>
          <h1>TOP RATED COURSES</h1>
          <div className="flex">
            <FaStar size={30}  className="text-yellow-500" />
            <FaStar  size={30} className="text-yellow-500" />
            <FaStar size={30} className="text-yellow-500" />
            <FaStar size={30} className="text-yellow-500" />
            <FaStar size={30}  className="text-yellow-500" />
          </div>
        </div>
        <div>
          <h1>LEVELS</h1>
          <div className="flex gap-2">
            <label className="">
              <input type="checkbox" />
              <span className="ml-2">Data</span>
            </label>
            <label className="">
              <input type="checkbox" />
              <span className="ml-2">Data</span>
            </label>
            <label className="">
              <input type="checkbox" />
              <span className="ml-2">Data</span>
            </label>
          </div>
        
        </div>
      </div>
      <hr className="w-full " />
      <h1>Recommended Courses</h1>
      <div >
        <div className=" flex flex-col text-center">
          <Image src={tech} alt="tech" width={300} height={300} />
          <h1>UX Researvh</h1>
          <p>Chris Kinley</p>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-10/12 rounded-2xl">
        Show Results
      </button>
    </div>
  );
};

export default page;
