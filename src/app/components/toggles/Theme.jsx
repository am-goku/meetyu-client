import React from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch } from "react-redux";
import { changeTheme } from "@/utils/features/uiSlice";
import { useAppSelector } from "@/utils/store";

function Theme() {
  const [alignment, setAlignment] = React.useState("web");

  const theme = useAppSelector(state => state?.uiReducer?.theme)

  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {

    if(theme === "dark") {
        dispatch(changeTheme("light"))
    } else {
        dispatch(changeTheme("dark"))
    }

    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
    className="border-0"
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton className="border border-0" value="">{theme === "light"?<LightModeIcon/>: <DarkModeIcon/>}</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Theme;
