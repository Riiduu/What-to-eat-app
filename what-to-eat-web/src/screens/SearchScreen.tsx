import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const SearchScreen = () => {

    const [ingredientsList, setIngredientsList] = useState<string[]>(["Tomato", "Potato", "Carrot"]);
    const [inputActive, setInputActive] = useState(false);

    const inputRef = useRef("");

    const IngredientItem = (props: any) => {
        const removeIngredient = () => {            
            setIngredientsList(ingredientsList.filter(item => item !== props.item));

        }
        
        return (
            <a onClick={removeIngredient} className="bg-blue-500 text-white m-1 px-3 py-2 rounded-2xl font-medium title-text">{props.item}</a>
        )
    }

    const InsertItem = () => {
        setIngredientsList([...ingredientsList, inputRef.current.value])
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setInputActive(false); // Hide input when clicking outside
            }
        }

        // Add event listener when input is active
        if (inputActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputActive]);


    return (
        <div className="flex flex-col my-3 mx-5">
            {/* Ingredients */}
            <div className="flex flex-col w-full my-10">
                <div className="flex flex-row items-center">
                    <h1 className="text-3xl font-extrabold title-text">Ingredients</h1>
                    <span className="flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white">{ingredientsList.length}</span>
                </div>
                <div className="flex flex-row items-center mt-2 -mx-1 flex-wrap relative">
                    {
                        ingredientsList.map((item, key) => {
                            return <IngredientItem item={item} key={key}/>
                        })
                    }
                    <form className="relative flex justify-center" onSubmit={InsertItem}>
                        {
                            inputActive && <input type="text" className="absolute top-[-45px] rounded-xl border-black border-2 shadow-md outline-none w-40 py-2 px-1" ref={inputRef}/>
                        }
                        
                        <a onClick={() => setInputActive(!inputActive)} href="#" className="bg-green-500 text-white m-1 px-3 py-2 rounded-2xl font-medium title-text">Add +</a>
                    </form>
                    
                </div>
            </div>

            {/* Max Additional Ingredients */}
            <div className="flex flex-col w-full my-10">
                <div className="flex flex-row items-center">
                    <h1 className="text-3xl font-extrabold title-text">Ingredients</h1>
                    <span className="flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white">0</span>
                </div>
                <div className="flex flex-row items-center mt-4 space-x-3">
  
                </div>
            </div>

            {/* Exclude Ingredients */}
            <div className="flex flex-col w-full my-10">
                <div className="flex flex-row items-center">
                    <h1 className="text-3xl font-extrabold title-text">Exclude Ingredients</h1>
                    <span className="flex justify-center items-center text-xl font-bold rounded-xl ml-5 p-4 w-7 h-7 bg-orange-400 text-white">0</span>
                </div>
                <div className="flex flex-row items-center mt-2 -mx-1 flex-wrap">
                    <a href="#" className="bg-green-500 text-white m-1 px-3 py-2 rounded-2xl font-medium title-text">Add +</a>
                </div>
            </div>
        </div>
    )
}

export default SearchScreen;