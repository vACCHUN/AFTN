function Navbar() {
  return (
    <div className="grid grid-cols-5 items-end">
      <div className="bg-[#ababab] h-[40px] bold flex justify-center items-center font-bold">
        Távirat
      </div>
      <div className="bg-[#ababab] h-[45px] bold flex justify-center items-center font-bold rounded-tl-lg rounded-tr-lg">
        <div className="border w-full text-center m-1 bg-[#cfcfcf] py-1">Résidő</div>
      </div>
      <div className="bg-[#ababab] h-[40px] bold flex justify-center items-center font-bold border-r-3 border-[#3f3f3f]">
        FPL résidő
      </div>
      <div className="bg-[#ababab] h-[40px] bold flex justify-center items-center font-bold border-r-3 border-[#3f3f3f]">
        Notam
      </div>
      <div className="bg-[#ababab] h-[40px] bold flex justify-center items-center font-bold">
        Jelzés/Nyomtatás
      </div>
      
    </div>
  );
}

export default Navbar;
