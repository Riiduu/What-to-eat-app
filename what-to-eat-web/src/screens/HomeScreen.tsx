import Navbar from "../components/Navbar"
import RandomPick from "../components/RandomPick"
import BottomNavbar from "../components/BottomNavbar"
import { useState } from "react"

const HomeScreen = () => {
    const [searchActive, setSearchActive] = useState(false);

    function changeSearchStatus() {
        console.log("yeye")
        setSearchActive(!searchActive);
    }
    
    return (
        <div className="flex flex-col max-w-md mx-auto bg-white h-screen">
            <Navbar 
                searchActive={searchActive}
                switchToSearch={changeSearchStatus}
            />
            <RandomPick />
            <BottomNavbar />
        </div>
    )
}

export default HomeScreen;