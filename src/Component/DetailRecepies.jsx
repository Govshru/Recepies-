import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'; // Import useParams to get the recipe id from the URL

const DetailRecepies = () => {
  const { id } = useParams(); // Get the recipe id from the URL
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Recipe not found");
        }
        const data = await response.json();
        setRecipeDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]); // Fetch data whenever the id changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Card
      sx={{
        maxWidth: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia
        component="img"
        alt={recipeDetails?.name}
        height="140"
        image={recipeDetails?.image}
        title={recipeDetails?.name}
      />
      <CardContent>
        <Typography variant="h5">{recipeDetails?.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          ID: {id}
        </Typography>
        <Typography variant="h6">Ingredients:</Typography>
        <ul>
          {recipeDetails?.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DetailRecepies;

