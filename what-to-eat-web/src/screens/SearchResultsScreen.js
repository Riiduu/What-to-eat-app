"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// img
const exports_1 = require("../assets/exports");
const Navbar_1 = __importDefault(require("../components/Navbar"));
const BottomNavbar_1 = __importDefault(require("../components/BottomNavbar"));
const react_redux_1 = require("react-redux");
const SearchResultsScreen = () => {
    // search results
    const searchInfoState = (0, react_redux_1.useSelector)((state) => state.searchInfo.value);
    const SearchResult = (props) => {
        // Makes sure the link has 'https://'
        const checkAndOpenLink = (recipeLink) => {
            if (recipeLink.includes('https://') || recipeLink.includes('http://')) {
                window.open(recipeLink, "_blank");
            }
            else {
                window.open(`https://${recipeLink}`, '_blank');
            }
        };
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-row items-center py-3 border-b-2 mx-5', children: [(0, jsx_runtime_1.jsx)("img", { className: "h-32", src: props.resultImg, alt: "" }), (0, jsx_runtime_1.jsx)("div", { className: "ml-3 h-full flex items-center", children: (0, jsx_runtime_1.jsxs)("h1", { onClick: () => checkAndOpenLink(props.recipeLink), className: 'text-2xl font-medium title-text cursor-pointer', children: [props.resultTitle, (0, jsx_runtime_1.jsx)("img", { src: exports_1.openInNew, className: "h-5 cursor-pointer", alt: "" })] }) })] }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col justify-center max-w-md mx-auto", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), 
            // Displays 10 recipes
            searchInfoState.map((index, _) => {
                return (0, jsx_runtime_1.jsx)(SearchResult, { resultImg: index.recipe.image, resultTitle: index.recipe.label, recipeLink: index.recipe.shareAs }, _);
            }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col justify-center sticky bottom-0 bg-white items-center", children: (0, jsx_runtime_1.jsx)(BottomNavbar_1.default, {}) })] }));
};
exports.default = SearchResultsScreen;
