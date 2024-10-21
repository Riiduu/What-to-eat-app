// img
import { openInNew } from "../assets/exports";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import React from "react";
import {useSelector} from "react-redux";

const SearchResultsScreen = () => {

    // search results
    const searchInfoState = useSelector((state) => state.searchInfo.value)

    const SearchResult = (props: any) => {
        // Makes sure the link has 'https://'
        const checkAndOpenLink = (recipeLink: string) => {
            if (recipeLink.includes('https://') || recipeLink.includes('http://')) {
                window.open(recipeLink, "_blank")
            } else {
                window.open(`https://${recipeLink}`, '_blank')
            }
        }

        return (
            <div className='flex flex-row items-center py-3 border-b-2 mx-5'>
                <img className="h-32" src={props.resultImg} alt="" />
                <div className="ml-3 h-full flex items-center">
                    <h1 onClick={() => checkAndOpenLink(props.recipeLink)} className='text-2xl font-medium title-text cursor-pointer'>{props.resultTitle}<img src={openInNew} className="h-5 cursor-pointer" alt="" /></h1>
                </div>
                
            </div>
        )
    }
    
    return (
        <div className="flex flex-col justify-center max-w-md mx-auto">

            {/** Implement some sort of functionality or at least use */}
            <Navbar />
            {
                // Displays 10 recipes
                searchInfoState.map((index, _) => {
                    return <SearchResult 
                        resultImg={index.recipe.image}
                        resultTitle={index.recipe.label}
                        recipeLink={index.recipe.shareAs}
                        key={_}
                        />
                })
            }
            <div className="flex flex-col justify-center sticky bottom-0 bg-white items-center">
                {/** A button to load more recipes 
                 *   TODO: Make it appear towards the end
                */}
                

                <BottomNavbar />
            </div>
            
        </div>
    )
}

export default SearchResultsScreen;