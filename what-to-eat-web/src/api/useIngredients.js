"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIngredients = void 0;
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const searchInfoSlice_1 = require("../store/searchInfoSlice");
// Custom hook to manage ingredient state
const useIngredients = () => {
    // Navigator
    const navigate = (0, react_router_dom_1.useNavigate)();
    // Search menu values
    const [ingredientsList, setIngredientsList] = (0, react_1.useState)([]);
    const [excludedIngredients, setExcludedIngredients] = (0, react_1.useState)([]);
    const [selectedMax, setSelectedMax] = (0, react_1.useState)(0);
    // Input refs
    const includedInputRef = (0, react_1.useRef)(null);
    const excludedInputRef = (0, react_1.useRef)(null);
    // Redux global state
    // holds the search results
    const searchInfoState = (0, react_redux_1.useSelector)((state) => state.searchInfo.value);
    const dispatch = (0, react_redux_1.useDispatch)();
    // Api link with the key provided (personal)
    const api = 'https://api.edamam.com/api/recipes/v2?app_id=d733ef7d&app_key=5ebdbaff6b4f0409e0deb109f379ef91&type=public&from=0&to=5';
    // Holds the search information fetched from the state
    const searchInfo = {
        ingredients: ingredientsList,
        maxAdditional: selectedMax + ingredientsList.length,
        excluded: excludedIngredients
    };
    // Sets and null checks the search refinements
    const searchNow = () => {
        const query = `${api}${selectedMax != 0 ?
            `&ingr=${searchInfo.maxAdditional}`
            : ''}${ingredientsList.length != 0 ?
            `&q=${searchInfo.ingredients}`
            : ''}${excludedIngredients.length != 0 ?
            `&excluded=${searchInfo.excluded}`
            : ''}`;
        axios_1.default.get(query)
            .then(function async(response) {
            dispatch((0, searchInfoSlice_1.updateInfo)(response.data.hits));
            console.log(searchInfoState);
            // For some reason shitloads slow as fuck. I don't know what the fuck is happening here. It usually needs to search twice until it's good
            if (searchInfoState.length > 0) {
                navigate('/results');
            }
        });
    };
    // Function to remove an ingredient from the list
    const removeIngredient = (ingredient) => {
        setIngredientsList(ingredientsList.filter(item => item !== ingredient));
    };
    // Function to remove an excluded ingredient
    const removeExcludedIngredient = (ingredient) => {
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
    };
};
exports.useIngredients = useIngredients;
