import axios from 'axios';

import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

// Custom hook to manage ingredient state
export const useIngredients = () => {
    // Navigator
    const navigate = useNavigate();

    // Search menu values
    const [ingredientsList, setIngredientsList] = useState<string[]>([]);
    const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);
    const [selectedMax, setSelectedMax] = useState(0);

    // Search Items ( Holds the response data )
    const [searchItems, setSearchItems] = useState([]);

    // Input refs
    const includedInputRef = useRef("");
    const excludedInputRef = useRef("");

    // Api link with the key provided (personal)
    const api = 'https://api.edamam.com/api/recipes/v2?app_id=d733ef7d&app_key=5ebdbaff6b4f0409e0deb109f379ef91&type=public&from=0&to=5';

    // Holds the search information fetched from the state
    const searchInfo = {
        ingredients: ingredientsList,
        maxAdditional: selectedMax + ingredientsList.length,
        excluded: excludedIngredients
    }

    // Sets and null checks the search refinements
    const searchNow = () => {
        let query = `${api}${
                selectedMax != 0 ?
                `&ingr=${searchInfo.maxAdditional}`
                : ''

            }${
                ingredientsList.length != 0 ?
                `&q=${searchInfo.ingredients}`
                : ''
            }${
                excludedIngredients.length != 0 ?
                `&excluded=${searchInfo.excluded}`
                : ''
            }`
        

        axios.get(query)
            .then(function async (response) {
                setSearchItems(response.data.hits)
                console.log(searchItems)
                // For some reason shit loads slow as fuck. I don't know what the fuck is happening here. It usually needs to search twice until it's good                
            }
        )
    }        

    // Function to remove an ingredient from the list
    const removeIngredient = (ingredient: string) => {
        setIngredientsList(ingredientsList.filter(item => item !== ingredient));
    };

    // Function to remove an excluded ingredient
    const removeExcludedIngredient = (ingredient: string) => {
        setExcludedIngredients(excludedIngredients.filter(item => item !== ingredient));
    };

    // Return all state and functions to manage it
    return {
        ingredientsList,
        setIngredientsList,
        excludedIngredients,
        setExcludedIngredients,
        selectedMax,
        setSelectedMax,
        removeIngredient,
        removeExcludedIngredient,
        includedInputRef,
        excludedInputRef,
        searchNow,
        searchInfo,

        searchItems
    };
};