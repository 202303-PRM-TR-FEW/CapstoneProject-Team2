import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>This is Courses page</h1>
      <br />
      <br />
      <h2>
        <Link href="search">Go to Search page</Link>
      </h2>
      <h2>
        <Link href="home">Go to Home page</Link>
      </h2>
      <h2>
        <Link href="saved">Go to Saved page</Link>
      </h2>
      <h2>
        <Link href="profile">Go to Profile page</Link>
      </h2>
    </div>
  );
};

export default page;
