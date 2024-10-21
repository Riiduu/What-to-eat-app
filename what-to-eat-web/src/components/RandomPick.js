"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
//import { useState } from "react"
const RandomPick = () => {
    const randomFood = 'https://hungrybynature.com/wp-content/uploads/2017/09/pinch-of-yum-workshop-19.jpg';
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center h-full my-3 cursor-pointer hover:scale-[1.01] duration-200  mx-5", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative w-full max-w-md bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden", children: [(0, jsx_runtime_1.jsx)("img", { src: randomFood, alt: "Random Food", className: "w-full h-full object-cover" }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 text-white", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-bold title-text", children: "Random pick" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm title-text", children: "These pancakes look fucking amazing, holy shit." })] })] }) }));
};
exports.default = RandomPick;
