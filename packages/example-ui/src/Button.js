import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children, onClick }) => {
    return (_jsx("button", { onClick: onClick, className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600", children: children }));
};
