import { useEffect, useState } from "react";
import { getTimeDifferenceUtc, subtractMinutes } from "../Utils/Time";

type SlotTableEntryProps = {
  callsign: string;
  atfcmStatus: string;
  ctot: string;
  cdmStatus: string;
  seen: boolean;
  setSeen: (callsign: string) => void;
};

const TAXI_TIME = import.meta.env.VITE_TAXI_TIME;

function SlotTableEntry({ callsign, atfcmStatus, ctot, cdmStatus, seen, setSeen }: SlotTableEntryProps) {
  const isRea = cdmStatus === "REA";
  const isSuspended = cdmStatus === "SUSP";

  ctot = "19:10";

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
    if (isSuspended || isRea) return;
    
    console.log("sending ready for", callsign);
  };

  const [needsConfirmation, setNeedsConfirmation] = useState(!seen);

  const confirmEntry = () => {
    setNeedsConfirmation(false);

    if (!seen) setSeen(callsign);
  };

  let reaColumnText = isRea ? "Kiadva" : "Kiadható";
  if (isSuspended) reaColumnText = "Nem";

  return (
    <tr className="border-b-1 h-[28px]">
      <td className="text-left ps-3 text-lg">{callsign}</td>
      <td className={`text-center text-lg ${needsConfirmation ? "bg-orange-600 text-lime-500" : ""}`}>{atfcmStatus}</td>
      <td className="text-center text-lg">{ctot}</td>
      <td className="text-center text-lg">{STU}</td>
      <td className="text-center text-lg">{Math.floor(untilTakeoffMinutes)} perc</td>
      <td onClick={sendReadyMessage} className={`cursor-pointer text-lg text-center border-r-1 border-l-1 text-gray-600 border-black ${!isSuspended && "bg-[#ababab]"} ${!isRea && !isSuspended ? "text-fuchsia-800!" : ""}`}>
        {reaColumnText}
      </td>
      <td onClick={confirmEntry} className={`cursor-pointer text-lg text-center text-gray-600 bg-[#ababab] ${needsConfirmation ? "text-[#ff0000]!" : ""}`}>
        {needsConfirmation ? "Nyugtáz" : "Ok"}
      </td>
      <td className="text-center text-lg bg-[#ababab]">DLA</td>
      <td className="text-center text-lg bg-[#ababab] text-[#ff0000]">Töröl</td>
      <td className="text-center text-lg bg-[#ababab] text-[#247d14]">Mutasd</td>
    </tr>
  );
}

export default SlotTableEntry;
