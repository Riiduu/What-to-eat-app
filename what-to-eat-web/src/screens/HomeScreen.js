"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Navbar_1 = __importDefault(require("../components/Navbar"));
const RandomPick_1 = __importDefault(require("../components/RandomPick"));
const BottomNavbar_1 = __importDefault(require("../components/BottomNavbar"));
const react_1 = require("react");
const SearchScreen_1 = __importDefault(require("./SearchScreen"));
const HomeScreen = () => {
    // Nav state
    const [searchActive, setSearchActive] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col max-w-md mx-auto bg-white h-screen", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, { searchActive: searchActive, switchToSearch: () => setSearchActive(!searchActive) }), (0, jsx_runtime_1.jsx)("div", { className: "h-full mb-2", children: searchActive
                    ? (0, jsx_runtime_1.jsx)(SearchScreen_1.default, {})
                    : (0, jsx_runtime_1.jsx)(RandomPick_1.default, {}) }), (0, jsx_runtime_1.jsx)(BottomNavbar_1.default, {})] }));
};
exports.default = HomeScreen;
