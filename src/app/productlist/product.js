"use client";
import React from "react";

function product({ price }) {
  return (
    <div>
      <button onClick={() => alert(price)}>Check Price</button>
    </div>
  );
}

export default product;
