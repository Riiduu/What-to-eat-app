import { useRef, useState, useEffect } from "react";

const SearchScreen = () => {

    // Holds the selected ingredients
    const [ingredientsList, setIngredientsList] = useState<string[]>(["Tomato", "Potato", "Carrot"]);
    // Add ingredient input
    const [includedInputActive, setIncludedInputActive] = useState(false);
    // exclude ingredient input
    const [excludedInputActive, setExcludedInputActive] = useState(false);

    // Holds the excluded ingredients list
    const [excludedIngredients, setExcludedIngredients] = useState<string[]>(["Pineapple"]);

    

    // Included ingredients
    const includedInputRef = useRef("");
    // Excluded Ingredients
    const excludedInputRef = useRef("")

    // Ingredient item component
    const IngredientItem = (props: any) => {
        const removeIngredient = (setArray: any, array: any) => {                         
            setArray(array.filter(item => item !== props.item));
        }
        
        return (
            <a onClick={() => removeIngredient(props.setArray, props.array)} className="bg-blue-500 cursor-pointer text-white m-1 px-3 py-2 rounded-2xl font-medium title-text">{props.item}</a>
        )
    }

    // Called on input submit (enter key). Inserts the item into the state array
    const InsertItem = () => {
        setIngredientsList([...ingredientsList, inputRef.current.value])
    }

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

    


    return (
        <div className="flex flex-col my-3 mx-5">
            {/* Ingredients */}
            <div className="flex flex-col w-full my-5">
                <div className="flex flex-row items-center">
                    <h1 className="text-3xl font-extrabold title-text">Ingredients</h1>
                    <span className="flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white">{ingredientsList.length}</span>
                </div>
                <div className="flex flex-row items-center mt-2 -mx-1 flex-wrap relative">
                    {
                        ingredientsList.map((item, key) => {
                            return <IngredientItem item={item} key={key} setArray={setIngredientsList} array={ingredientsList}/>
                        })
                    }
                    <form className="relative flex justify-center" onSubmit={InsertItem}>
                        {
                            includedInputActive && <input type="text" className="absolute top-[-45px] rounded-xl border-black border-2 shadow-md outline-none w-40 py-2 px-1" ref={includedInputRef}/>
                        }
                        
                        <a onClick={() => setIncludedInputActive(!includedInputActive)} href="#" className="bg-green-500 text-white m-1 px-3 py-2 rounded-2xl font-medium title-text">Add +</a>
                    </form>
                    
                </div>
            </div>

            {/* Max Additional Ingredients */}
            <div className="flex flex-col w-full my-5">
                <div className="flex flex-row items-center">
                    <h1 className="text-3xl font-extrabold title-text">Ingredients</h1>
                    <span className="flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white">0</span>
                </div>
                <div className="flex flex-row items-center mt-4 space-x-3">
  
                </div>
            </div>

            {/* Exclude Ingredients */}
            <div className="flex flex-col w-full my-5">
                <div className="flex flex-row items-center">
                    <h1 className="text-3xl font-extrabold title-text">Exclude Ingredients</h1>
                    <span className="flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white">0</span>
                </div>
                <div className="flex flex-row items-center mt-2 -mx-1 flex-wrap">
                    {
                        excludedIngredients.map((item, key) => {
                            return <IngredientItem item={item} key={key} setArray={setExcludedIngredients} array={excludedIngredients}/>
                        })
                    }
                    <form className="relative flex justify-center" onSubmit={InsertItem}>
                        {
                            excludedInputActive && <input type="text" className="absolute top-[-45px] rounded-xl border-black border-2 shadow-md outline-none w-40 py-2 px-1" ref={excludedInputRef}/>
                        }
                        
                        <a onClick={() => setExcludedInputActive(!excludedInputActive)} href="#" className="bg-green-500 text-white m-1 px-3 py-2 rounded-2xl font-medium title-text">Add +</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchScreen;