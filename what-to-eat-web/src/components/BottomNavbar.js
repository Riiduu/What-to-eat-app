"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const exports_1 = require("../assets/exports");
const BottomNavbar = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "h-20 w-full mx-auto flex flex-row justify-between items-center px-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "border-b py-2 border-black", children: (0, jsx_runtime_1.jsx)("img", { className: "h-8", src: exports_1.discoverIcon, alt: "" }) }), (0, jsx_runtime_1.jsx)("div", { className: "py-2 border-black", children: (0, jsx_runtime_1.jsx)("img", { className: "h-8", src: exports_1.bookmarkIcon, alt: "" }) }), (0, jsx_runtime_1.jsx)("div", { className: "py-2 border-black", children: (0, jsx_runtime_1.jsx)("img", { className: "h-8", src: exports_1.bookmarksIcon, alt: "" }) }), (0, jsx_runtime_1.jsx)("div", { className: "py-2 border-black", children: (0, jsx_runtime_1.jsx)("img", { className: "h-8", src: exports_1.settingsIcon, alt: "" }) })] }));
};
exports.default = BottomNavbar;
