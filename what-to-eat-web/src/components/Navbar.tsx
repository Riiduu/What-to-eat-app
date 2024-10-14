import {searchIcon, closeIcon} from '../assets/exports';

const Navbar = (props: any) => {
    return (
        <div className="flex flex-row w-full justify-between items-center h-20 px-5">
            <h1 className="text-4xl font-extrabold title-text">{props.searchActive ? 'Filters' : 'What to eat?' }</h1>
            <div onClick={props.switchToSearch} className="bg-black cursor-pointer h-12 flex w-12 rounded-xl">
                <img src={props.searchActive ? closeIcon : searchIcon} className="h-6 m-auto" alt="" />
            </div>
        </div>
    )
}

export default Navbar;