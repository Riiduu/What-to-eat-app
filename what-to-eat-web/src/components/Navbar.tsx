import { useState } from 'react';
import {searchIcon, closeIcon} from '../assets/exports';

const Navbar = () => {
    const [searchActive, setSearchActive] = useState(false)

    return (
        <div className="flex flex-row w-full justify-between items-center h-20 px-5" style={{justifyContent: searchActive ? 'space-between' : 'end'}}>
            <h1 className="text-4xl font-extrabold title-text" style={{display: searchActive ? 'block' : 'none'}}>Filters</h1>
            <div onClick={() => setSearchActive(!searchActive)} className="bg-black cursor-pointer h-12 flex w-12 rounded-xl">
                <img src={searchActive ? closeIcon : searchIcon} className="h-8 m-auto" alt="" />
            </div>
        </div>
    )
}

export default Navbar;