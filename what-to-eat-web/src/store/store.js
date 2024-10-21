"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const searchInfoSlice_1 = __importDefault(require("./searchInfoSlice"));
exports.default = (0, toolkit_1.configureStore)({
    reducer: {
        searchInfo: searchInfoSlice_1.default
    },
});
