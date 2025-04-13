import WindowsButton from "../Components/WindowsButton";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { FlightPlan, DepartureMessage } from "../types/Messages";

type WebsocketData = {
  flightplans: FlightPlan[];
  departureMessages: DepartureMessage[];
  arrivalMessages: DepartureMessage[];
};

function TaviratPage() {
  const [websocketData, setWebsocketData] = useState<WebsocketData>({
    flightplans: [],
    departureMessages: [],
    arrivalMessages: [],
  });
  const [allMessages, setAllMessages] = useState<(FlightPlan | DepartureMessage)[]>([]);
  const [currentMessageNumber, setCurrentMessageNumber] = useState(0);
  const messageCount = allMessages.length;

  useEffect(() => {
    const socket = io("http://localhost:4000", {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("connection", () => {
      console.log("Connected to server");
    });
    socket.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });

    socket.on("dataRefresh", (data) => {
      setWebsocketData(data);
    });
  }, []);

  useEffect(() => {
    console.log("Websocket data updated:", websocketData);
    const allMessages = [...websocketData.flightplans, ...websocketData.departureMessages, ...websocketData.arrivalMessages];

    const sortedMessages = allMessages.sort((a, b) => {
      const dateA = new Date(a.messageTime);
      const dateB = new Date(b.messageTime);
      return dateA.getTime() - dateB.getTime();
    });

    setAllMessages(sortedMessages);
    console.log("All messages sorted:", sortedMessages);
  }, [websocketData]);

  const currMessage = allMessages[currentMessageNumber];

  return (
    <div className="bg-[#f5f5f5] p-2">
      <div className="flex flex-col">
        <div className="w-[90vw] bg-[#868686] flex gap-2 p-1 h-fit">
          <div className="bg-[#003100] text-white px-3 font-bold border-blue-200 border-2">{currentMessageNumber+1} / {messageCount}</div>
          <WindowsButton className="font-bold">Továbbküld</WindowsButton>
          <WindowsButton className="font-bold">Válaszol</WindowsButton>
          <WindowsButton className="font-bold">Szerkeszt</WindowsButton>
          <WindowsButton className="font-bold">{"FPL ->CHG"}</WindowsButton>
        </div>

        <div className="flex pt-1">
          <div className="w-[90vw] bg-[#868686] h-[50vh] overflow-y-scroll overflow-x-hidden text-cyan-200 pl-1">
            
            {currMessage?.callsign}
          </div>

          <div className="bg-[#868686] p-1 ml-5 flex flex-col w-13 text-center">
            <span className="text-lime-700 font-bold">KTF</span>
            <span className="text-lime-700 font-bold">TKF</span>
          </div>
        </div>

        <div className="flex gap-4 p-2">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <input type="checkbox" />
              Automatikus frissítés
            </div>

            <div className="flex gap-2">
              <WindowsButton onClick={() => {setCurrentMessageNumber(0)}} className="px-4">A</WindowsButton>
              <WindowsButton onClick={() => {setCurrentMessageNumber((prev) => prev - 1 <= 0 ? prev : prev - 1)}} className="px-4">A</WindowsButton>
              <WindowsButton onClick={() => {setCurrentMessageNumber((prev) => prev + 1 >= allMessages.length ? prev : prev + 1)}} className="px-4">A</WindowsButton>
              <WindowsButton onClick={() => {setCurrentMessageNumber(allMessages.length - 1)}} className="px-4">A</WindowsButton>
              <WindowsButton className="px-4">A</WindowsButton>
            </div>
          </div>

          <div className="flex gap-4 w-full justify-end pr-10">
            <div className="flex flex-col">
              <strong>A szűréskor keresett szavak</strong>
              <div className="flex gap-2">
                <input className="border" type="text" />
                <input className="border" type="text" />
                <input className="border" type="text" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-1">
                <input type="radio" id="filterOn" name="filtering" />
                <label htmlFor="filterOn" className="font-bold">
                  Szűrés BE
                </label>
              </div>
              <div className="flex gap-1">
                <input type="radio" id="filterOff" name="filtering" />
                <label htmlFor="filterOff" className="font-bold">
                  Szűrés KI
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaviratPage;
