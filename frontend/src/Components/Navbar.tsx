import { useLocation } from "react-router";
import { NavLink } from "react-router";

function Navbar() {
  let location = useLocation();
  const currPath = location.pathname;

  return (
    <div className="grid grid-cols-5 items-end">
      <NavLink to="/tavirat" className={"bg-[#ececec] h-[40px] text-lime-700 bold flex justify-center items-center font-bold " + (currPath == "/tavirat" ? "bg-[#f5f5f5] rounded-tl-xs rounded-tr-xs h-[44px]" : "shadow mr-1") + (currPath == "/resido" ? "mr-[0px]" : "")}>
        Távirat
      </NavLink>
      <NavLink to="/" className={"bg-[#ececec] h-[40px] text-lime-700 bold flex justify-center items-center font-bold " + (currPath == "/" ? "bg-[#f5f5f5] rounded-tl-xs rounded-tr-xs h-[44px]" : "shadow mr-1 ") + (currPath == "/fpl-resido" ? "mr-[0px]" : "")}>
        Résidő
      </NavLink>
      <NavLink to="/fpl-resido" className={"bg-[#ececec] h-[40px] text-lime-700 bold flex justify-center items-center font-bold " + (currPath == "/fpl-resido" ? "bg-[#f5f5f5] rounded-tl-xs rounded-tr-xs h-[44px]" : "shadow mr-1 ") + (currPath == "/notam" ? "mr-[0px]" : "")}>
        FPL+résidő
      </NavLink>
      <NavLink to="/notam" className={"bg-[#ececec] h-[40px] text-lime-700 bold flex justify-center items-center font-bold " + (currPath == "/notam" ? "bg-[#f5f5f5] rounded-tl-xs rounded-tr-xs h-[44px]" : "shadow mr-1 ") + (currPath == "/jelzes-nyomtatas" ? "mr-[0px]" : "")}>
        Notam
      </NavLink>
      <NavLink to="/jelzes-nyomtatas" className={"bg-[#ececec] h-[40px] text-lime-700 bold flex justify-center items-center font-bold " + (currPath == "/jelzes-nyomtatas" ? "bg-[#f5f5f5] rounded-tl-xs rounded-tr-xs h-[44px]" : "shadow") + (currPath == "/" ? "mr-[0px]" : "")}>
        Jelzés / Nyomtatás
      </NavLink>
    </div>
  );
}

export default Navbar;
