import WindowsButton from "../Components/WindowsButton";
function TaviratPage() {
  return (
    <div className="bg-[#ababab] p-2">
      <div className="flex flex-col">
        <div className="w-[90vw] bg-[#868686] flex gap-2 p-1 h-fit">
          <div className="bg-[#003100] text-white px-3 font-bold">799 / 799</div>
          <WindowsButton className="font-bold">Továbbküld</WindowsButton>
          <WindowsButton className="font-bold">Válaszol</WindowsButton>
          <WindowsButton className="font-bold">Szerkeszt</WindowsButton>
          <WindowsButton className="font-bold">{"FPL ->CHG"}</WindowsButton>
        </div>

        <div className="flex pt-1">
          <div className="w-[90vw] bg-[#868686] h-[50vh] overflow-y-scroll overflow-x-hidden text-[#00d9ff]">BOTTOM TEXT AREA</div>
          
          <div className="bg-[#868686] p-1 ml-5 flex flex-col">
            <span>KTF</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaviratPage;
