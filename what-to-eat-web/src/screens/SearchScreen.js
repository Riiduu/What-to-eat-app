"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// custom hook / backend ig
const useIngredients_1 = require("../api/useIngredients");
//img
const exports_1 = require("../assets/exports");
const SearchScreen = () => {
    // Functions and states from the custom hook
    const { ingredientsList, setIngredientsList, excludedIngredients, setExcludedIngredients, selectedMax, setSelectedMax, includedInputRef, excludedInputRef, searchInfo, searchNow } = (0, useIngredients_1.useIngredients)();
    /////////// INPUT STATES
    // Add ingredient input
    const [includedInputActive, setIncludedInputActive] = (0, react_1.useState)(false);
    // exclude ingredient input
    const [excludedInputActive, setExcludedInputActive] = (0, react_1.useState)(false);
    // Ingredient item component
    const IngredientItem = (props) => {
        const removeIngredient = (setArray, array) => {
            setArray(array.filter((item) => item !== props.item));
        };
        return ((0, jsx_runtime_1.jsx)("a", { onClick: () => removeIngredient(props.setArray, props.array), className: "bg-blue-500 cursor-pointer text-white m-1 px-3 py-2 rounded-2xl font-medium title-text", children: props.item }));
    };
    // Null checks the search values
    const checkSearch = () => {
        if (searchInfo.ingredients.length == 0) {
            alert('Enter search preferences');
        }
        else {
            searchNow();
        }
    };
    // Function to add a new ingredient to the list
    const addIngredient = () => {
        var _a;
        if ((_a = includedInputRef.current) === null || _a === void 0 ? void 0 : _a.value) {
            setIngredientsList([...ingredientsList, includedInputRef.current.value]);
            includedInputRef.current.value = ""; // Clear input after adding
            setIncludedInputActive(false);
        }
    };
    // Function to add a new excluded ingredient
    const addExcludedIngredient = () => {
        var _a;
        if ((_a = excludedInputRef.current) === null || _a === void 0 ? void 0 : _a.value) {
            setExcludedIngredients([...excludedIngredients, excludedInputRef.current.value]);
            excludedInputRef.current.value = ""; // Clear input after adding
            setExcludedInputActive(false);
        }
    };
    // MaxIngredient button component
    const MaxIngredientComponent = (props) => {
        const handleClick = () => {
            setSelectedMax(parseInt(props.item)); // Update selected max ingredients
        };
        const isSelected = selectedMax === parseInt(props.item);
        return ((0, jsx_runtime_1.jsx)("a", { onClick: handleClick, href: "#", className: `w-9 h-9 flex justify-center items-center rounded-xl p-2 font-medium text-2xl ${isSelected ? 'bg-blue-500' : 'bg-green-500'} text-white`, children: props.item }));
    };
    // included ingredient input box reaction to clicks outside of it (turns off)
    (0, react_1.useEffect)(() => {
        function handleClickOutside(event) {
            if (includedInputRef.current && !includedInputRef.current.contains(event.target)) {
                setIncludedInputActive(false); // Hide input when clicking outside
            }
            else if (excludedInputRef.current && !excludedInputRef.current.contains(event.target)) {
                setExcludedInputActive(false); // Hide input when clicking outside
            }
        }
        // Add event listener when input is active
        if (includedInputActive || excludedInputActive) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [includedInputActive, excludedInputActive]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col my-3 mx-5 h-full relative", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full my-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-extrabold title-text", children: "Ingredients" }), (0, jsx_runtime_1.jsx)("span", { className: "flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white", children: ingredientsList.length })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center mt-2 -mx-1 flex-wrap relative", children: [ingredientsList.map((item, key) => {
                                return (0, jsx_runtime_1.jsx)(IngredientItem, { item: item, setArray: setIngredientsList, array: ingredientsList }, key);
                            }), (0, jsx_runtime_1.jsxs)("form", { className: "relative flex justify-center", onSubmit: addIngredient, children: [includedInputActive && (0, jsx_runtime_1.jsx)("input", { type: "text", className: "absolute top-[-45px] rounded-xl border-black border-2 shadow-md outline-none w-40 py-2 px-1", ref: includedInputRef }), (0, jsx_runtime_1.jsx)("a", { onClick: () => setIncludedInputActive(!includedInputActive), href: "#", className: "bg-green-500 text-white m-1 px-3 py-2 rounded-2xl font-medium title-text", children: "Add +" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full my-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-extrabold title-text", children: "Max Additional Ingredients" }), (0, jsx_runtime_1.jsx)("span", { className: "flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white", children: selectedMax })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-row items-center mt-4 space-x-3", children: [...Array(6)].map((_, index) => ((0, jsx_runtime_1.jsx)(MaxIngredientComponent, { item: index }, index))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full my-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-extrabold title-text", children: "Exclude Ingredients" }), (0, jsx_runtime_1.jsx)("span", { className: "flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white", children: excludedIngredients.length })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center mt-2 -mx-1 flex-wrap", children: [excludedIngredients.map((item, key) => {
                                return (0, jsx_runtime_1.jsx)(IngredientItem, { item: item, setArray: setExcludedIngredients, array: excludedIngredients }, key);
                            }), (0, jsx_runtime_1.jsxs)("form", { className: "relative flex justify-center", onSubmit: addExcludedIngredient, children: [excludedInputActive && (0, jsx_runtime_1.jsx)("input", { type: "text", className: "absolute top-[-45px] rounded-xl border-black border-2 shadow-md outline-none w-40 py-2 px-1", ref: excludedInputRef }), (0, jsx_runtime_1.jsx)("a", { onClick: () => setExcludedInputActive(!excludedInputActive), href: "#", className: "bg-green-500 text-white m-1 px-3 py-2 rounded-2xl font-medium title-text", children: "Add +" })] })] })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: checkSearch, className: "absolute cursor-pointer flex flex-row justify-center items-center py-2 px-4 bg-black text-white text-2xl font-bold rounded-xl bottom-5 right-0 active:shadow-2xl shadow-md", children: ["Search", (0, jsx_runtime_1.jsx)("img", { src: exports_1.searchIcon, className: "h-6 ml-2", alt: "Search Icon" })] })] }));
};
exports.default = SearchScreen;
