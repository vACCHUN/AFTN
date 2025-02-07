
function AFTNTable() {
  return (
    <div className="bg-white pt-4 border-t-1 px-3">
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
          <tr>
            <td className="text-left px-1 bg-[#ff0000]">DLH68M</td>
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
        </tbody>
      </table>
    </div>
  )
}

export default AFTNTable