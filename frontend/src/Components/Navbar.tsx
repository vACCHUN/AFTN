import { useLocation } from "react-router";
import { NavLink } from "react-router";

function Navbar() {
  let location = useLocation();
  const currPath = location.pathname;

  return (
    <div className="grid grid-cols-5 items-end">
      <NavLink to="/tavirat" className={"bg-[#ababab] h-[40px] bold flex justify-center items-center font-bold w-full " + (currPath == "/tavirat" ? "rounded-tl-lg rounded-tr-lg h-[45px]" : "")}>
        <div className={currPath == "/tavirat" ? "border w-full text-center m-1 bg-[#cfcfcf] py-1" : ""}>Távirat</div>
      </NavLink>
      <NavLink to="/" className={"bg-[#ababab] h-[40px] bold flex justify-center items-center font-bold w-full " + (currPath == "/" ? "bg-[#cfcfcf] rounded-tl-lg rounded-tr-lg h-[45px]" : "")}>
        <div className={currPath == "/" ? "border w-full text-center m-1 py-1" : ""}>Résidő</div>
      </NavLink>
      <NavLink to="/fpl-resido" className={"bg-[#ababab] h-[40px] bold flex justify-center items-center font-bold w-full " + (currPath == "/fpl-resido" ? "rounded-tl-lg rounded-tr-lg h-[45px]" : "")}>
        <div className={currPath == "/fpl-resido" ? "border w-full text-center m-1 bg-[#cfcfcf] py-1" : ""}>FPL résidő</div>
      </NavLink>
      <NavLink to="/notam" className={"bg-[#ababab] h-[40px] bold flex justify-center items-center font-bold w-full " + (currPath == "/notam" ? "rounded-tl-lg rounded-tr-lg h-[45px]" : "")}>
        <div className={currPath == "/notam" ? "border w-full text-center m-1 bg-[#cfcfcf] py-1" : ""}>NOTAM</div>
      </NavLink>
      <NavLink to="/jelzes-nyomtatas" className={"bg-[#ababab] h-[40px] bold flex justify-center items-center font-bold w-full " + (currPath == "/jelzes-nyomtatas" ? "rounded-tl-lg rounded-tr-lg h-[45px]" : "")}>
        <div className={currPath == "/jelzes-nyomtatas" ? "border w-full text-center m-1 bg-[#cfcfcf] py-1" : ""}>Jelzés/Nyomtatás</div>
      </NavLink>
    </div>
  );
}

export default Navbar;
