import { useEffect, useState } from "react";
import { getTimeDifferenceUtc, subtractMinutes } from "../Utils/Time";

type SlotTableEntryProps = {
  callsign: string;
  atfcmStatus: string;
  ctot: string;
  cdmStatus: string;
};

const TAXI_TIME = import.meta.env.VITE_TAXI_TIME;

function SlotTableEntry({ callsign, atfcmStatus, ctot, cdmStatus }: SlotTableEntryProps) {
  const isRea = cdmStatus === "REA";

  ctot = "17:50";

  const STU = subtractMinutes(ctot, TAXI_TIME);

  const takeoffTime = subtractMinutes(ctot, 5);

  const [untilTakeoffMinutes, setUntilTakeoffMinutes] = useState<number>(getTimeDifferenceUtc(takeoffTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setUntilTakeoffMinutes(getTimeDifferenceUtc(takeoffTime));
    }, 15000);

    return () => clearInterval(interval);
  }, [takeoffTime]);

  const sendReadyMessage = async () => {
    console.log("sending ready for", callsign);
  };

  return (
    <tr className="border-b-1 h-[28px]">
      <td className="text-left ps-3 ">{callsign}</td>
      <td className="text-center">{atfcmStatus}</td>
      <td className="text-center">{ctot}</td>
      <td className="text-center">{STU}</td>
      <td className="text-center">{Math.floor(untilTakeoffMinutes)} perc</td>
      <td onClick={sendReadyMessage} className="text-center border-r-1 border-l-1 border-black text-gray-400">
        {isRea ? "Kiadva" : "Kiadható"}
      </td>
      <td className="text-center text-gray-600 bg-[#ababab]">OK</td>
      <td className="text-center bg-[#ababab]">DLA</td>
      <td className="text-center bg-[#ababab] text-[#ff0000]">Töröl</td>
      <td className="text-center bg-[#ababab] text-[#247d14]">Mutasd</td>
    </tr>
  );
}

export default SlotTableEntry;
