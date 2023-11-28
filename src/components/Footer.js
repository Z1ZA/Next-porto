import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="dark:text-light dark:border-light w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base">
      <Layout className="py-6 flex justify-center items-center lg:flex-col lg:py-4">
        {/* <span>{new Date().getFullYear()} &copy; All Right Reserved</span> */}
        <div className="flex items-center lg:py-1">
          <span className="dark:text-primaryDark text-primary text-2xl px-1">&#9825;</span>{" "}
          by&nbsp;{" "}
          <Link
            href="/"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Abdul Aziz
          </Link>
        </div>
      </Layout>
    </footer>
  );
}


export default Footer
