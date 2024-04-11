"use client"

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import "./style.css"





const Explore = () => {

  return (
    <>
      <div className="w-full p-3 flex gap-3 justify-center items-center profileCard">
        <div className=""></div>

        <div className="choise flex gap-20">
          <div className="w-20 choiseBtn"></div>
          <div className="w-20 choiseBtn"></div>
        </div>
      </div>
    </>
  );
};

export default Explore;

