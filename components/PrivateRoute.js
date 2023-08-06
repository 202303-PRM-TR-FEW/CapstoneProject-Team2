"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/usersSlice";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return <>{children}</>;
};

export default PrivateRoute;
