"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
require("./index.css");
const react_router_dom_1 = require("react-router-dom");
const HomeScreen_1 = __importDefault(require("./screens/HomeScreen"));
const SearchResultsScreen_1 = __importDefault(require("./screens/SearchResultsScreen"));
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./store/store"));
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(HomeScreen_1.default, {}),
    },
    {
        path: '/results',
        element: (0, jsx_runtime_1.jsx)(SearchResultsScreen_1.default, {})
    }
]);
(0, client_1.createRoot)(document.getElementById('root')).render((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.default, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router }) }));
