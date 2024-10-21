"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInfo = exports.searchInfoSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.searchInfoSlice = (0, toolkit_1.createSlice)({
    name: 'searchInfo',
    initialState: {
        value: {}
    },
    reducers: {
        updateInfo: (state, action) => {
            state.value = action.payload;
        }
    },
});
// Action creators are generated for each case reducer function
exports.updateInfo = exports.searchInfoSlice.actions.updateInfo;
exports.default = exports.searchInfoSlice.reducer;
