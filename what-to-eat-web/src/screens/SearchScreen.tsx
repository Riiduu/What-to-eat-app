import { useState, useEffect } from "react";
import { useIngredients } from "../api/getIngredients";
import { searchIcon } from "../assets/exports";

const SearchScreen = () => {
    const {
        ingredientsList,
        setIngredientsList,
        excludedIngredients,
        setExcludedIngredients,
        selectedMax,
        setSelectedMax,
        includedInputRef,
        excludedInputRef,
        searchInfo,
        searchNow
    } = useIngredients();

    /////////// INPUT STATES
    // Add ingredient input
    const [includedInputActive, setIncludedInputActive] = useState(false);
    // exclude ingredient input
    const [excludedInputActive, setExcludedInputActive] = useState(false);

    // Ingredient item component
    const IngredientItem = (props: any) => {
        const removeIngredient = (setArray: any, array: any) => {                         
            setArray(array.filter(item => item !== props.item));
        }
        
        return (
            <a onClick={() => removeIngredient(props.setArray, props.array)} className="bg-blue-500 cursor-pointer text-white m-1 px-3 py-2 rounded-2xl font-medium title-text">{props.item}</a>
        )
    };

    const checkSearch = () => {
        if (searchInfo.ingredients.length == 0) {
            alert('Enter search preferences')
        } else {
            searchNow()
        }
    }

    // Function to add a new ingredient to the list
    const addIngredient = () => {
        if (includedInputRef.current.value) {
            setIngredientsList([...ingredientsList, includedInputRef.current.value]);
            includedInputRef.current.value = ""; // Clear input after adding
            setIncludedInputActive(false);
        }
    };

    // Function to add a new excluded ingredient
    const addExcludedIngredient = () => {
        if (excludedInputRef.current.value) {
            setExcludedIngredients([...excludedIngredients, excludedInputRef.current.value]);
            excludedInputRef.current.value = ""; // Clear input after adding
            setExcludedInputActive(false);
        }
    };

    // MaxIngredient button component
    const MaxIngredientComponent = (props: any) => {
        const handleClick = () => {
            setSelectedMax(parseInt(props.item)); // Update selected max ingredients
        };

        const isSelected = selectedMax === parseInt(props.item);

        return (
            <a onClick={handleClick} href="#" className={`w-9 h-9 flex justify-center items-center rounded-xl p-2 font-medium text-2xl ${isSelected ? 'bg-blue-500' : 'bg-green-500'} text-white`}>
                {props.item}
            </a>
        );
    };

    // included ingredient input box reaction to clicks outside of it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (includedInputRef.current && !includedInputRef.current.contains(event.target as Node)) {
                setIncludedInputActive(false); // Hide input when clicking outside
            } else if (excludedInputRef.current && !excludedInputRef.current.contains(event.target as Node)) {
                setExcludedInputActive(false); // Hide input when clicking outside
            }
        }

        // Add event listener when input is active
        if (includedInputActive || excludedInputActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };      
    }, [includedInputActive, excludedInputActive]);


    
    
    // random
    const items = Array(6).fill("Item");

    return (
        <div className="flex flex-col my-3 mx-5 h-full relative">
            {/* Ingredients */}
            <div className="flex flex-col w-full my-5">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-3xl font-extrabold title-text">Ingredients</h1>
                    <span className="flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white">{ingredientsList.length}</span>
                </div>
                <div className="flex flex-row items-center mt-2 -mx-1 flex-wrap relative">
                    {
                        ingredientsList.map((item, key) => {
                            return <IngredientItem item={item} key={key} setArray={setIngredientsList} array={ingredientsList}/>
                        })
                    }
                    <form className="relative flex justify-center" onSubmit={addIngredient}>
                        {
                            includedInputActive && <input type="text" className="absolute top-[-45px] rounded-xl border-black border-2 shadow-md outline-none w-40 py-2 px-1" ref={includedInputRef}/>
                        }
                        
                        <a onClick={() => setIncludedInputActive(!includedInputActive)} href="#" className="bg-green-500 text-white m-1 px-3 py-2 rounded-2xl font-medium title-text">Add +</a>
                    </form>
                    
                </div>
            </div>

            {/* Max Additional Ingredients */}
            <div className="flex flex-col w-full my-5">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-3xl font-extrabold title-text">Max Additional Ingredients</h1>
                    <span className="flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white">{selectedMax}</span>
                </div>
                <div className="flex flex-row items-center mt-4 space-x-3">
                    <MaxIngredientComponent item="0"/>
                    <MaxIngredientComponent item="1"/>
                    <MaxIngredientComponent item="2"/>
                    <MaxIngredientComponent item="3"/>
                    <MaxIngredientComponent item="4"/>
                    <MaxIngredientComponent item="5"/>
                </div>
            </div>

            {/* Exclude Ingredients */}
            <div className="flex flex-col w-full my-5">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-3xl font-extrabold title-text">Exclude Ingredients</h1>
                    <span className="flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white">{excludedIngredients.length}</span>
                </div>
                <div className="flex flex-row items-center mt-2 -mx-1 flex-wrap">
                    {
                        excludedIngredients.map((item, key) => {
                            return <IngredientItem item={item} key={key} setArray={setExcludedIngredients} array={excludedIngredients}/>
                        })
                    }
                    <form className="relative flex justify-center" onSubmit={addExcludedIngredient}>
                        {
                            excludedInputActive && <input type="text" className="absolute top-[-45px] rounded-xl border-black border-2 shadow-md outline-none w-40 py-2 px-1" ref={excludedInputRef}/>
                        }
                        
                        <a onClick={() => setExcludedInputActive(!excludedInputActive)} href="#" className="bg-green-500 text-white m-1 px-3 py-2 rounded-2xl font-medium title-text">Add +</a>
                    </form>
                </div>
            </div>
            <button onClick={checkSearch} className="absolute cursor-pointer flex flex-row justify-center items-center py-2 px-4 bg-black text-white text-2xl font-bold rounded-xl bottom-5 right-0 active:shadow-2xl shadow-md">
                Search
                <img src={searchIcon} className="h-6 ml-2" alt="Search Icon" />
            </button>
        </div>
    )
}

export default SearchScreen;