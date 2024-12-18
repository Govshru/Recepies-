import React, { useState } from "react";
import { Card, CardContent, Typography, CardMedia, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Recepies = ({ id, name, image }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Redirect to the recipe details page with the id
    navigate(`/DetailRecepies/${id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2" color="textSecondary">
          ID: {id}
        </Typography>
      </CardContent>
      <CardActions>
        <button onClick={handleRedirect}>Show Detail</button>
      </CardActions>
    </Card>
  );
};

export default Recepies;
