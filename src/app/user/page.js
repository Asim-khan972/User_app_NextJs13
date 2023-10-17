import Link from "next/link";
import styles from "./AllUsers.module.css";

async function getData() {
  let data = await fetch("https://dummyjson.com/users");

  if (!data.ok) {
    throw new Error("Failed to fetch user data");
  }
  data = await data.json();
  return data.users;
}

const User = async () => {
  const users = await getData();
  //   console.log(data1);

  return (
    <div>
      <h1>All User</h1>
      {users.map((user) => (
        <div key={user.id} className={styles.card}>
          <img
            src={user.image}
            alt={user.firstName}
            className={styles.avatar}
          />
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <p className={styles.para}>eyeColor: {user.eyeColor}</p>
          <p className={styles.para}>username: {user.username}</p>
          <p className={styles.para}>address: {user.address.address}</p>
          <p className={styles.para}>bloodGroup: {user.bloodGroup}</p>
          <p className={styles.para}>phone: {user.phone}</p>
          <p className={styles.para}>bloodGroup: {user.bloodGroup}</p>
          <p className={styles.para}>gender: {user.gender}</p>
          <p className={styles.para}>university: {user.university}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
export function generateMetadata({ params }) {
  return {
    title: "this is user page ",
    description: " user page description ",
  };
}
