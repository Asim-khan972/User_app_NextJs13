import React from "react";

function page({ params }) {
  return (
    <div>
      <div>{params.lectures[0]}</div>
      <div>{params.lectures[1]}</div>
    </div>
  );
}

export default page;
