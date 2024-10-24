import axios from 'axios';

import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {updateInfo} from "../store/searchInfoSlice";

// Custom hook to manage ingredient state
export const useIngredients = () => {
    // Navigator
    const navigate = useNavigate();

    // Search menu values
    const [ingredientsList, setIngredientsList] = useState<string[]>([]);
    const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);
    const [selectedMax, setSelectedMax] = useState(0);
    const [mealType, setMealType] = useState(0)

    // Input refs
    const includedInputRef = useRef<HTMLInputElement>(null);
    const excludedInputRef = useRef<HTMLInputElement>(null);

    // Redux global state
    // holds the search results
    const searchInfoState = useSelector((state: any) => state.searchInfo.value)
    const dispatch = useDispatch()

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
        let foodType: string;
        switch (mealType) {
            case 0:
                foodType = "breakfast";
                break;
            case 1:
                foodType = "brunch";
                break;
            case 2:
                foodType = "lunch";
                break;
            case 3:
                foodType = "snack";
                break;
            case 4:
                foodType = "teatime";
                break;
            default:
                foodType = "breakfast"
        }

        const query = `${api}${
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
            }${
                `&mealType=${foodType}`
            }`

        axios.get(query)
            .then(function async (response) {
                dispatch(updateInfo(response.data.hits))
                console.log(searchInfoState)
                // For some reason shitloads slow as fuck. I don't know what the fuck is happening here. It usually needs to search twice until it's good
                if (searchInfoState.length > 0) {
                    navigate('/results')
                }
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

        mealType,
        setMealType
    };
};