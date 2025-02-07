import "./App.css";
import Clock from "./Components/Clock";
import Navbar from "./Components/Navbar";
import AFTNTable from "./Components/AFTNTable";
function App() {
  return (
    <>
      <div className="grid grid-cols-2 py-3">
        <div className="w-fit px-2">
          <div className="p-1 bg-[#ababab]">
            <span className="bg-white p-1 border-1 border-black text-lime-500 font-bold">LINE</span>
          </div>
        </div>
        <div className="flex justify-end px-12">
          <Clock></Clock>
        </div>
      </div>

      <div className="m-1">
        <Navbar></Navbar>
        <div className="bg-[#ababab]">
          <AFTNTable></AFTNTable>
        </div>
      </div>
    </>
  );
}

export default App;
