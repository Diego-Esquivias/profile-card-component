import Profile from "./components/ProfileCard";
import React from "react";


function Test() {
  return (
    <>
    <Profile profileImage="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" firstName="John" lastName="Doe" email="johndoe@example.com" socialMediaLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} />
    </>
  );
}

export default Test;
