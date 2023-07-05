"use client";

import Link from "next/link";
import { BsFillKeyFill } from "react-icons/bs";
import home from "@/public/assets/home.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  // https://www.udemy.com/api-2.0/courses/4062064/reviews/
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        "https://www.udemy.com/api-2.0/courses/4062064/reviews/",
        {
          mode: "no-cors",
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            Authorization:
              "Basic eHN0WHlzY2N2U2tXUzZ1bzdNdW1RaG5taE9HajBydUJOaTNoUWdKVTpkck1RR3NwRkM3RFR6Y0Jrd0E3RGliaTZMb240OFRjQ2pSNEI3ZXBRcTF4QXlQcUZaa2o0UXYxU3dUUkM0SmEwRUFaU0RERlVxb2l6M2hOTUM4bjRuMmIyaW04eElzdXBXV3BIY2hLbmsyUmtKaGZEd1oyMHM2NlNQc0tlY2lqQg==",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();
      setReviews(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex ">
      <div className=" flex w-1/2 h-screen  bg-gray-200 items-center justify-center ">
        <div className="flex flex-col gap-5 items-center mx-16 ">
          <BsFillKeyFill size={50} />
          <h1>Discover passion</h1>
          <p>
            Find out what topics you find interesting, learn a new skill &
            connect with people that are passionate about similar topics.
          </p>
          <button className=" text-white bg-cyan-400 rounded">
            <Link href="home">Get Started</Link>
          </button>
        </div>
      </div>
      <div className="flex w-1/2 h-screen items-center rounded-full ">
        <Image src={home} alt="home-image" />
      </div>
    </div>
  );
};

export default page;
