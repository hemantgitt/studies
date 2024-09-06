import React from "react";
import useCustomeuser from "./useCustomeuser";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const UserDetails = () => {
  const { data: users, loading, error } = useCustomeuser(baseUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>
        {users.map((item) => {
          return (
            <div>
              <p>{item.id}</p>
              <h1>{item.title}</h1>
              <h4>{item.body}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserDetails;
