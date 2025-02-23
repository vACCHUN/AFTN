import WindowsButton from "../Components/WindowsButton";
function TaviratPage() {
  return (
    <div className="bg-[#f5f5f5] p-2">
      <div className="flex flex-col">
        <div className="w-[90vw] bg-[#868686] flex gap-2 p-1 h-fit">
          <div className="bg-[#003100] text-white px-3 font-bold border-blue-200 border-2">799 / 799</div>
          <WindowsButton className="font-bold">Továbbküld</WindowsButton>
          <WindowsButton className="font-bold">Válaszol</WindowsButton>
          <WindowsButton className="font-bold">Szerkeszt</WindowsButton>
          <WindowsButton className="font-bold">{"FPL ->CHG"}</WindowsButton>
        </div>

        <div className="flex pt-1">
          <div className="w-[90vw] bg-[#868686] h-[50vh] overflow-y-scroll overflow-x-hidden text-cyan-200 pl-1">KTF 799 121642 <br />FF LHKRZEZX <br />121642 EUCHZMFP(FPL-BCS7837-IS
<br />-A306/H-SDFGHIJ3RVWXYZ/LB1
<br />-LGAV1835
<br />-N0418F240 KRO G33 NEVRA Z507 URUDI/N0443F280 UZ507 KERES/N0449F300 UZ507 TSL UL617 MAKED DCT LONTA UM749 UDVAR DCT NANER/N0444F320 DCT BABIT DCT BEGLA DCT NAVTI DCT BODAL DCT LEGAZ DCT BEFRE/N0438F300 DCT IVQOQ/N0359F160 T951 YAWOY YAWOY1R
<br />-EDDP0251 EKCH EDDK
<br />-PBN/A1B1D1L1O1 DAT/CPDLCX SUR/260B DOF/250212 REG/EILDA EET/LWSS0043 LYBA0055 LHCC0131 LOVV0151 LKAA0200 EDUU0220 EDMM0229 SEL/AFJQ RVR/075 IFP/MODESASP OPR/ABR ORGN/RSYFP5O RMK/TCAS EQUIPPED 24H OPS XXXXXXXXXX )</div>
          
          <div className="bg-[#868686] p-1 ml-5 flex flex-col w-13 text-center">
            <span className="text-lime-700 font-bold">KTF</span>
            <span className="text-lime-700 font-bold">TKF</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaviratPage;
