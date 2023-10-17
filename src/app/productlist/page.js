import Link from "next/link";
import Product from "./product";
////////////////// here this is server side Rendering
////// we use Server side Component with Client by Write them alone and then Import them
async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  console.log(res);
  return res.json();
}

const Ninjas = async () => {
  const data1 = await getData();
  //   console.log(data1.products);
  const data = data1.products;

  return (
    <div>
      <h1>All Ninjas</h1>
      {data?.map((el) => (
        <div key={el.id}>
          <h3>{el.title}</h3>
          <Product price={el.price} />
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
