import { settingsIcon, bookmarkIcon, bookmarksIcon, discoverIcon } from "../assets/exports";

const BottomNavbar = () => {
    return (
        <div className="h-20 w-3/4 mx-auto flex flex-row justify-around items-center">
            <div className="border-b py-2 border-black">
                <img className="h-8" src={discoverIcon} alt="" />
            </div>
            <div className="py-2 border-black">
                <img className="h-8" src={bookmarkIcon} alt="" />
            </div>
            <div className="py-2 border-black">
                <img className="h-8" src={bookmarksIcon} alt="" />
            </div>
            <div className="py-2 border-black">
                <img className="h-8" src={settingsIcon} alt="" />
            </div>
        </div>   
    )
}

export default BottomNavbar;