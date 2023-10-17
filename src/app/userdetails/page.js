"use client";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <div>
      <Script src="/location.js" onLoad={() => console.log("file lodeddd ")} />
      <h1>User details page </h1>

      <h1>Get user details Page </h1>
    </div>
  );
}

export default page;
