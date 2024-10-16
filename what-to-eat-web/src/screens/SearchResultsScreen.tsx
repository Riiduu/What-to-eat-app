// img
import { openInNew } from "../assets/exports";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

const SearchResultsScreen = () => {

    const SearchResult = (props: any) => {
        // Makes sure the link has 'https://'
        const checkAndOpenLink = (recipeLink: string) => {
            if (recipeLink.includes('https://')) {
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
        <div className="flex flex-col justify-center">

            {/** Implement some sort of functionality or at least use */}
            <Navbar />
            {
                // Displays 10 recipes
                [...Array(10)].map((_, index) => { 
                    return <SearchResult 
                        resultImg="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_34/1765653/squareat-inline-02-khu-210825.png"
                        resultTitle="I don't know, but looks tasty"
                        recipeLink="google.com"
                        key={index}
                        />
                })
            }
            <div className="flex flex-col justify-center sticky bottom-0 bg-white border-t-2 rounded-t-xl items-center">
                {/** A button to load more recipes 
                 *   TODO: Make it appear towards the end
                */}
                

                <BottomNavbar />
            </div>
            
        </div>
    )
}

export default SearchResultsScreen;