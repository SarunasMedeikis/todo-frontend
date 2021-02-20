import React from "react";
import axios from "axios";
import "./profile.css";

function Profile(params) {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    await axios.get("http://localhost:5000/users/profile").then((user) => {
      setUser(user.data);
      console.log(user.data);
    });
  };

  return (
    <div className="container">
      <h2>This is your profile page.</h2>
      <span>Your username is: {user.username}</span>
      <span>Your email is: {user.email}</span>
    </div>
  );
}

export default Profile;
