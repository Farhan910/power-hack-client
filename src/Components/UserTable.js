import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://desolate-meadow-34032.herokuapp.com/billing-list")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  const handleSearch = (e) => {
    const search = e.target.value;
    const filteredUsers = users.filter((user) => {
      return user.fullName.toLowerCase().includes(search.toLowerCase());
    });
    setSearch(filteredUsers);
  };

  console.log(search);
  return (
    <div className="mt-5 ">
      <div className="grid lg:grid-cols-6 grid-cols-1 px-28  ">
        <div>
          <h1 className="border  h-10 font-bold pl-2 ">Bill Id</h1>
        </div>
        <div>
          <h1 className="border  h-10 font-bold  pl-2">Full Name</h1>
        </div>
        <div>
          <h1 className="border  h-10  font-bold pl-2">Email</h1>
        </div>
        <div>
          <h1 className="border h-10  font-bold pl-2">Phone number</h1>
        </div>
        <div>
          <h1 className="border  h-10  font-bold pl-2">Paid Amount</h1>
        </div>
        <div>
          <h1 className="border  h-10  font-bold pl-2">Action</h1>
        </div>
      </div>
      {users.map((user) => (
        <UserCard user={user} index={user.index}></UserCard>
      ))}
    </div>
  );
};

export default UserTable;
