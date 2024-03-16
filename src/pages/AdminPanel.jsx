import React from "react";

function AdminPanel() {
  return (
    <>
      <h2>Users</h2>
      {Object.values(window.localStorage).map((e) => {
        return <li>{JSON.parse(e).first_name}</li>;
      })}
    </>
  );
}

export default AdminPanel;
