import Navbar from "../components/Navbar"
import RandomPick from "../components/RandomPick"
import BottomNavbar from "../components/BottomNavbar"
import { useState } from "react"
import SearchScreen from "./SearchScreen"

const HomeScreen = () => {
    const [searchActive, setSearchActive] = useState(false);

    function changeSearchStatus() {
        setSearchActive(!searchActive);
    }
    
    return (
        <div className="flex flex-col max-w-md mx-auto bg-white h-screen">
            <Navbar 
                searchActive={searchActive}
                switchToSearch={changeSearchStatus}
            />
            <div className="h-full mb-2">
                {
                    searchActive
                        ? <SearchScreen />
                        : <RandomPick />
                }
                
            </div>
            
        
            
            <BottomNavbar />
        </div>
    )
}

export default HomeScreen;