import React from 'react'
import {useEffect,useState} from 'react'
import Recepies from './Recepies.jsx';
import Navbar from './Navbar.jsx';





const Index = () => {
const[recipes,setRecipes]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(null);




   async function FetchlistofRecepies(){
    try {
    const apiResponse=await fetch('https://dummyjson.com/recipes');
    const result= await apiResponse.json();
    console.log("result",result);
    setRecipes(result.recipes);
    setLoading(false);
    }catch(e){
      console.log(e);
      setError('Error fetching data');
      setLoading(false);

    }
  }
  

  
  

  useEffect(()=>{
    FetchlistofRecepies()

  },[ ]);

  

  if(loading){
    return<div className="loading">Loading......</div>;
  }

  if(error){
    return<div className="error">{error}</div>
  }
  return (
    <div  className="index-container">
      
      <h1>Recipe List</h1>
      <div className="recipeListWapper">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <strong>{Recepies.title}</strong>
            <Recepies id={recipe.id} name={recipe.name} image={recipe.image}  />
            <Navbar/>
            
            


            
          </div>
          
        ))}
      </div>
      
    </div>
    
  )
}

export default Index
