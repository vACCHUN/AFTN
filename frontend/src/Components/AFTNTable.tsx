
function AFTNTable() {
  return (
    <div className="bg-white pt-4 px-3 h-[768px] overflow-y-scroll ">
      <table className="w-full border-1 font-bold">
        <thead>
          <tr>
            <th className="px-2 border-b-1">Járat</th>
            <th className="px-2 border-b-1"></th>
            <th className="px-2 border-b-1">Résidő</th>
            <th className="px-2 border-b-1">STU</th>
            <th className="px-2 border-b-1">Felszállásig</th>
            <th className="px-2 border-b-1">REA</th>
            <th className="px-2 border-b-1 text-[10px]">Nyugta mind</th>
            <th className="px-2 border-b-1"></th>
            <th className="px-2 border-b-1"></th>
            <th className="px-2 border-b-1">Távirat</th>
          </tr>
        </thead>
        <tbody>
        <tr className="border-b-1 h-[28px]">
            <td className="text-left ps-3 bg-[#ffff4d]">RYR3PJ</td>
            <td className="text-center">SAM</td>
            <td className="text-center bg-[#ffff4d]">17:05</td>
            <td className="text-center bg-[#ffff4d]">16:50</td>
            <td className="text-center bg-[#ffff4d]">-36 perc</td>
            <td className="text-center border-r-1 border-l-1 border-black text-gray-400">Nem</td>
            <td className="text-center text-gray-600 bg-[#ababab]">OK</td>
            <td className="text-center bg-[#ababab]">DLA</td>
            <td className="text-center bg-[#ababab] text-[#ff0000]">Töröl</td>
            <td className="text-center bg-[#ababab] text-[#247d14]">Mutasd</td>
          </tr>
          <tr className="border-b-1 h-[28px]">
            <td className="text-left ps-3 bg-[#ff0000]">DLH68M</td>
            <td className="text-center">SAM</td>
            <td className="text-center bg-[#ff0000]">17:05</td>
            <td className="text-center bg-[#ff0000]">16:50</td>
            <td className="text-center bg-[#ff0000]">-36 perc</td>
            <td className="text-center border-r-1 border-l-1 border-black text-gray-400">Nem</td>
            <td className="text-center text-gray-600 bg-[#ababab]">OK</td>
            <td className="text-center bg-[#ababab]">DLA</td>
            <td className="text-center bg-[#ababab] text-[#ff0000]">Töröl</td>
            <td className="text-center bg-[#ababab] text-[#247d14]">Mutasd</td>
          </tr>
          <tr className="border-b-1 h-[28px]">
            <td className="text-left ps-3 bg-[#2CC939]">FIN2RL</td>
            <td className="text-center">SLC</td>
            <td className="text-center bg-[#2CC939]">---</td>
            <td className="text-center bg-[#2CC939]">---</td>
            <td className="text-center bg-[#2CC939]">---</td>
            <td className="text-center border-r-1 border-l-1 border-black text-gray-400">Nem</td>
            <td className="text-center text-gray-600 bg-[#ababab]">OK</td>
            <td className="text-center bg-[#ababab]">DLA</td>
            <td className="text-center bg-[#ababab] text-[#ff0000]">Töröl</td>
            <td className="text-center bg-[#ababab] text-[#247d14]">Mutasd</td>
          </tr>
          <tr className="border-b-1 h-[28px]">
            <td className="text-left ps-3">MAH752</td>
            <td className="text-center bg-orange-600 text-lime-500">SRM</td>
            <td className="text-center">17:05</td>
            <td className="text-center">16:50</td>
            <td className="text-center">120 perc</td>
            <td className="text-center border-r-1 border-l-1 border-black text-gray-400">Nem</td>
            <td className="text-center text-[#ff0000] bg-[#ababab]">Nyugtáz</td>
            <td className="text-center bg-[#ababab]">DLA</td>
            <td className="text-center bg-[#ababab] text-[#ff0000]">Töröl</td>
            <td className="text-center bg-[#ababab] text-[#247d14]">Mutasd</td>
          </tr>
          <tr className="border-b-1 h-[28px]">
            <td className="text-left ps-3">WZZ17LJ</td>
            <td className="text-center">SRM</td>
            <td className="text-center">17:05</td>
            <td className="text-center">16:50</td>
            <td className="text-center">140 perc</td>
            <td className="text-center border-r-1 border-l-1 border-black bg-[#ababab] text-gray-400">Kiadva</td>
            <td className="text-center text-gray-600 bg-[#ababab]">OK</td>
            <td className="text-center bg-[#ababab]">DLA</td>
            <td className="text-center bg-[#ababab] text-[#ff0000]">Töröl</td>
            <td className="text-center bg-[#ababab] text-[#247d14]">Mutasd</td>
          </tr>
          <tr className="border-b-1 h-[28px]">
            <td className="text-left ps-3">LOT2PL</td>
            <td className="text-center">SRM</td>
            <td className="text-center">17:05</td>
            <td className="text-center">16:50</td>
            <td className="text-center">140 perc</td>
            <td className="text-center border-r-1 border-l-1 border-black text-gray-400">Nem</td>
            <td className="text-center text-gray-600 bg-[#ababab]">OK</td>
            <td className="text-center bg-[#ababab]">DLA</td>
            <td className="text-center bg-[#ababab] text-[#ff0000]">Töröl</td>
            <td className="text-center bg-[#ababab] text-[#247d14]">Mutasd</td>
          </tr>
          <tr className="border-b-1 h-[28px]">
            <td className="text-left ps-3">CLX56BF</td>
            <td className="text-center">SRM</td>
            <td className="text-center">17:05</td>
            <td className="text-center">16:50</td>
            <td className="text-center">140 perc</td>
            <td className="text-center bg-[#ababab] border-r-1 border-l-1 border-black text-fuchsia-800">Kiadható</td>
            <td className="text-center text-gray-600 bg-[#ababab]">OK</td>
            <td className="text-center bg-[#ababab]">DLA</td>
            <td className="text-center bg-[#ababab] text-[#ff0000]">Töröl</td>
            <td className="text-center bg-[#ababab] text-[#247d14]">Mutasd</td>
          </tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
          <tr className="border-b-1 h-[28px]"></tr>
        </tbody>
      </table>
    </div>
  )
}

export default AFTNTable