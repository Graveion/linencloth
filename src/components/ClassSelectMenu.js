"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Dropdown_1 = __importDefault(require("./Dropdown"));
const PlayerClass_1 = require("../types/PlayerClass");
const ClassSelectMenu = () => {
    const [showDropdown, setShowDropdown] = (0, react_1.useState)(false);
    const [selectItem, setSelectItem] = (0, react_1.useState)(PlayerClass_1.PlayerClass.Warrior);
    /**
     * Toggle the drop down menu
     */
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    /**
     * Hide the drop down menu if click occurs
     * outside of the drop-down element.
     *
     * @param event  The mouse event
     */
    const dismissHandler = (event) => {
        if (event.currentTarget === event.target) {
            setShowDropdown(false);
        }
    };
    /**
     * Callback function to consume the
     * item name from the child component
     *
     * @param item
     * The selected item
     */
    const itemSelection = (item) => {
        setSelectItem(item);
    };
    return (<>
      <button className={showDropdown ? "active" : undefined} onClick={() => toggleDropdown()} onBlur={(e) => dismissHandler(e)}>
        <div>{selectItem ? selectItem : ""} </div>
        {showDropdown && (<Dropdown_1.default items={Object.values(PlayerClass_1.PlayerClass)} showDropDown={false} toggleDropDown={() => toggleDropdown()} itemSelection={itemSelection}/>)}
      </button>
    </>);
};
exports.default = ClassSelectMenu;
