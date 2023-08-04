'use client'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/usersSlice";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const router = useRouter();

  // If the user is not logged in, redirect to the login page

  useEffect(() => {
  if (!user) {
    router.push("/");
  }
    }, [user]);
    

  // If the user is logged in, render the requested page
  return <>{children}</>;
};

export default PrivateRoute;
