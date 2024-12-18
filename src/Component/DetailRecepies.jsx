import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const DetailRecepies = () => {
  const { id } = useParams();
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
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box    className='mealInfo' sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: 2, 

    }}>
      
        
        <Box sx={{
          width: { xs: '100%', sm: '50%' }, 
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '500px', 
        }}>
          <CardMedia
            component="img"
            alt={recipeDetails?.name}
            image={recipeDetails?.image}
            title={recipeDetails?.name}
            
          />
        </Box>
        

        
        
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height:'500px',
          padding: 3,
          width: { xs: '100%', sm: '50%' },
          
        }}>
          <Typography variant="h5">{recipeDetails?.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            ID: {id}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Cuisine:</strong> {recipeDetails?.cuisine || 'N/A'}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Meal Type:</strong> {recipeDetails?.mealType || 'N/A'}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Tags:</strong> {recipeDetails?.tags?.join(', ') || 'N/A'}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Rating:</strong> {recipeDetails?.rating || 'N/A'}
          </Typography>
          <Typography variant="h6">Ingredients:</Typography>
          <ul>
            {recipeDetails?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Box>
      
    </Box>
  );
};

export default DetailRecepies;
