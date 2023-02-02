import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <div className="flex items-center justify-center gap-4 text-lg font-bold">
            <NavLink to="/" >
                Home
            </NavLink>
            <NavLink to="/about" >
                About
            </NavLink>
        </div>
    )
}