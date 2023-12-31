"use client";
import { useEffect } from "react";
import Image from "next/image";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import saveIconFull from "../public/assets/save-icon-full.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "@/redux/api";
import Link from "next/link";
import { addCourse } from "@/redux/features/savedCoursesSlice";
import { getAuth } from "firebase/auth";
import { addDoc, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../app/lib/firebase";
import CreditCardUi from "./CreditCardUi";
import { useState } from "react";

const style = {
  fcCard: `bg-white w-64 p-1 rounded-2xl dark:bg-slate-800`,
  personInfo: `flex text-sm items-center my-4 p-1 pr-3 rounded-full shadow-lg w-fit bg-white 
  -mb-10 ml-2 translate-y-[-2rem] z-20 dark:bg-slate-600`,
  details: `flex gap-4 flex-wrap `,
  priceBtn: `bg-blue-500 rounded-full p-1 px-3.5 text-xs text-white`,
  iconColor: `text-gray-400`,
  icons: `flex gap-1`,
  iconsText: `text-gray-600 dark:text-gray-400`,
  img: `rounded-2xl mr-4 p-0 bg-contain z-0`,
  padding: `p-2`,
  powerTitle: `my-2 font-medium`,
  randomImg: `rounded-full p-0`,
  name: `text-center pl-0 pr-2`,
  saveIcon: `float-right m-1 translate-y-[-6rem]`,
  personImg: `rounded-full mr-2 w-10 h-10`,
};

const FeaturedCourses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const savedCourses = useSelector((state) => state.savedCourses.savedCourses);
  const [showCreditCard, setShowCreditCard] = useState(false);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  const handleCloseCreditCard = () => {
    setShowCreditCard(false);
  };
  const auth = getAuth();
  const currentUser = auth.currentUser;


 
   
  const handleSave = async (course) => {
    dispatch(addCourse(course)); 
  
    const auth = getAuth();
    const currentUser = auth.currentUser;
  
    if (currentUser) {
      try {
        const savedCoursesRef = doc(db, "savedCourses", currentUser.uid);
        const docSnap = await getDoc(savedCoursesRef);
  
        let coursesToUpdate = [];
        if (docSnap.exists()) {
          coursesToUpdate = docSnap.data().courses;
        }
  
        coursesToUpdate.push(course); 
  
        await setDoc(savedCoursesRef, { courses: coursesToUpdate });
      } catch (error) {
        console.error("Error saving course to Firebase:", error);
      }
    }
  };
 
 
  
  return (
    <div className={style.details}>
      {courses.slice(0, 5).map((course) => (
        <div className={style.fcCard} key={course.id}>
          <Image
            src={course.image}
            width={120}
            height={120}
            alt="cover image of course"
            style={{ width: "100%", height: "100px", objectFit: "cover" }}
            className={style.img}
          />
          <button onClick={() => handleSave(course)}>
            <Image
              src={saveIconFull}
              width={25}
              height={25}
              alt="Save Icon"
              className={style.saveIcon}
              priority={true}
            />
          </button>
          <div className={style.personInfo}>
            <Image
              src={course.instructor_img}
              alt="image of trainer"
              className={style.personImg}
              width={40}
              height={40}
            />
            <p>{course.instructor}</p>
          </div>

          <div className={style.padding}>
            <Link href={`/courseInfo/${course.id}`}>
              <h3 className={style.powerTitle}>{course.title}</h3>
              <div className={style.details}>
                <div className={style.icons}>
                  <BiSolidTimeFive size={20} className={style.iconColor} />
                  <p className={style.iconsText}>{course.duration}</p>
                </div>
                <div className={style.icons}>
                  <AiFillStar size={20} className={style.iconColor} />
                  <p className={style.iconsText}>{course.rating}</p>
                </div>
              </div>
            </Link>
            <button
              className={style.priceBtn}
              onClick={() => setShowCreditCard(true)}
            >
              {course.price} $
            </button>
          </div>
        </div>
      ))}
      {showCreditCard && (
        <div className="overlay">
          <CreditCardUi show={showCreditCard} onClose={handleCloseCreditCard} />
        </div>
      )}
    </div>
  );
};

export default FeaturedCourses;
