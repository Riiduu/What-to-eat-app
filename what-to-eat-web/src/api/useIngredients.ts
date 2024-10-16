import axios from 'axios';

import { useState, useRef } from "react";

// Custom hook to manage ingredient state
export const useIngredients = () => {
    const [ingredientsList, setIngredientsList] = useState<string[]>([]);
    const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);
    const [selectedMax, setSelectedMax] = useState(0);

    const includedInputRef = useRef("");
    const excludedInputRef = useRef("");

    const api = 'https://api.edamam.com/api/recipes/v2?app_id=d733ef7d&app_key=5ebdbaff6b4f0409e0deb109f379ef91&type=public';

    const searchInfo = {
        ingredients: ingredientsList,
        maxAdditional: selectedMax + ingredientsList.length,
        excluded: excludedIngredients
    }

    //need to null check info
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
            .then(function (response) {
                // handle success
                console.log(response.data.hits);
            })

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
        searchInfo
    };
};