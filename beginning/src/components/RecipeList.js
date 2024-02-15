import React from "react";
import Recipe from "./Recipe";
import { useState, useEffect } from 'react'; 
import Filter from "./Filter";
import Search from "./Search";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then(response => response.json())
      .then(recipes => setRecipes(recipes))
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearchTerm = (event) => {
        setSearchTerm(event.target.value)
      }

    const searchedRecipes = recipes.filter(recipe => 
        (
            (recipe.name && recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
            || (recipe.ingredients && recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase()) )
            || (recipe.source && recipe.source.toLowerCase().includes(searchTerm.toLowerCase()))
            || (recipe.interest === true && "interest".includes(searchTerm.toLowerCase()))
        )
            && recipe.notAReorder !== true
    )
  


    // const [filters, setFilters] = useState([]);
    
    // useEffect(() => {
    // fetch("http://localhost:3000/tags")
    //   .then(response => response.json())
    //   .then(filters => setFilters(filters))
    //   .catch(error => setError(error.message));
    // }, []);

    // const filterString = filters.join("");

    // const filteredRecipes = recipes.filter(recipe => {
    //     console.log(filters)
    //     return recipe.tags.includes(filterString)
    // })

    // const handleFilterChange = (event) => {
    //     setFilters(event.target.value)
    // }
    // console.log(filteredRecipes)

    // const filterOptions = filters.map((filter, index) => (
    //     <option key={index} value={index}>
    //       {filter}
    //     </option>
    // ));

    const [notReorderState, setNotReorderState] = useState(true)

    const handleNotReorder = (event, id) => {
        event.preventDefault();
        fetch(`http://localhost:3000/recipes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "notAReorder": notReorderState
          })
        })
        .then(response => response.json())
        .then(updatedRecipe => {
            setNotReorderState(true)
            setRecipes(recipes.filter(recipe => updatedRecipe.id !== recipe.id))
        })
    }

    return (
        <div>
            <h1>Recipes</h1>
            {/* <Filter /> */}
            {/* <Filter filters={filters} filterOptions={filterOptions} handleFilterChange={handleFilterChange}/> */}
            <a href="newrecipe" className="button">Add a new recipe</a>
            <Search searchTerm={searchTerm} handleSearchTerm={handleSearchTerm}/>
            <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Ingredients
                    </th>
                    <th>
                        Source
                    </th>
                    <th>
                        Page Number 
                    </th>
                    <th>
                        Interest
                    </th>
                    <th>
                        Tags 
                    </th>
                    <th>
                        Not A Reorder 
                    </th>
                </tr>
                {searchedRecipes.map((recipe) => {return <Recipe key={recipe.id} id={recipe.id} recipe={recipe.name} ingredients={recipe.ingredients} source={recipe.source} pageNumber={recipe.pageNumber} interest={recipe.interest} tags={recipe.tags} notReorderState={notReorderState} handleNotReorder={handleNotReorder}/>})}
                {/* <NotReorders nonReorderedList={nonReorderedList} notReorderState={notReorderState} handleNotReorder={handleNotReorder}/> */}
            </tbody>
        
        </table>
        </div>
    )
}

export default RecipeList;