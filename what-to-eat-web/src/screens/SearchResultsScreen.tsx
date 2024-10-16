import { useState } from 'react';
import {searchItems} from '../api/getIngredients';


const [results, setResults] = useState(searchItems)

const SearchResultsScreen = () => {
    const SearchResult = (props: any) => {
        return (
            <div className='flex flex-row p-5 items-center'>
                <img src={props.resultImg} alt="" />
                <h1 className='text-3xl font-medium title-text'>{props.resultTitle}</h1>
            </div>
        )
    }
    
    return (
        <div>
            {
                searchItems.map((item, key) => {
                    return <h1>{searchItems}</h1>
                })
            }
        </div>
    )
}

export default SearchResultsScreen;