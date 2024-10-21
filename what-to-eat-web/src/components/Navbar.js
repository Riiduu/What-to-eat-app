"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const exports_1 = require("../assets/exports");
const Navbar = (props) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row w-full justify-between mt-5 items-center h-20 px-5", children: [(0, jsx_runtime_1.jsx)("h1", { onClick: () => navigate('/'), className: "text-4xl font-extrabold title-text cursor-pointer", children: props.searchActive ? 'Filters' : 'What to eat?' }), (0, jsx_runtime_1.jsx)("div", { onClick: props.switchToSearch, className: "bg-black cursor-pointer h-12 flex w-12 rounded-xl", children: (0, jsx_runtime_1.jsx)("img", { src: props.searchActive ? exports_1.closeIcon : exports_1.searchIcon, className: "h-6 m-auto", alt: "" }) })] }));
};
exports.default = Navbar;
