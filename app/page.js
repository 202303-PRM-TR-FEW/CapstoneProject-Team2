import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>This is Sign Up page</h1>
      <h2>
        <Link href="home">Go to home page</Link>
      </h2>
    </div>
  );
};

export default page;
