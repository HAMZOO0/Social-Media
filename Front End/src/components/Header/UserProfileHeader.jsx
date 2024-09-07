import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArticleIcon from "@mui/icons-material/Article"; // Post Icon
import EditIcon from "@mui/icons-material/Edit"; // Edit Icon
import BookmarkIcon from "@mui/icons-material/Bookmark"; // Bookmark Icon

import { set_user_profile_id } from "../../Store/store.js";

export default function UserProfileHeader() {
  const navigate = useNavigate(); // For navigation
  const [value, setValue] = useState(0);
  const { ID } = set_user_profile_id();

  const handleNavigation = (newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate(`/profile/${ID}`);
    }
    if (newValue === 1) {
      navigate(`/profile/edit-profile`);
    }
  };

  return (
    <>
      <div className="py-4">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => handleNavigation(newValue)}
          sx={{ backgroundColor: "#374151" }} // This sets bg-gray-700 (hex #374151)
        >
          <BottomNavigationAction
            label="Posts"
            icon={<ArticleIcon sx={{ color: "white" }} />}
            sx={{ color: "white" }} // This sets the text color to white
          />
          <BottomNavigationAction
            label="Edit"
            icon={<EditIcon sx={{ color: "white" }} />}
            sx={{ color: "white" }} // This sets the text color to white
          />
          <BottomNavigationAction
            label="Bookmark"
            icon={<BookmarkIcon sx={{ color: "white" }} />}
            sx={{ color: "white" }} // This sets the text color to white
          />
        </BottomNavigation>
      </div>
    </>
  );
}
