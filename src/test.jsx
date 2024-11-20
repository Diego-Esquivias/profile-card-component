import Profile from "./components/ProfileCard";
import React from "react";



function Test() {
  return (
    <>
    <Profile profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDwycVzCsWaZx5AaCTeqz6e8qLbt8UaQz7g&s" firstName="John" lastName="Doe" email="johndoe@example.com" socialMediaLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} />
    </>
  );
}

export default Test;
