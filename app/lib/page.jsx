"use client";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

export default function Page() {
  // store items in redux store
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "courses"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const courses = [];
      querySnapshot.forEach((doc) => {
        courses.push({ ...doc.data(), id: doc.id });
      });
      setItems(courses);
    });
    console.log(items);
  }, []);
  return <div>Page</div>;
}


