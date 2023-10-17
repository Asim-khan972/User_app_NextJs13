import React from "react";

function page() {
  return <div>Student page </div>;
}

export default page;

export function generateMetadata({ params }) {
  return {
    title: "this is student page ",
    description: " Student page description ",
  };
}
