import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Data from "../frontend_assignment.csv";
import excel from "../../Assets/Microsoft_Office_Excel_(2019–present) 1.svg";

export default function Table() {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen mx-auto">
        <div className="bg-white p-2 rounded-md shadow-md mb-8 mx-auto md:w-1/2 h-100 pl-5 pr-5 ">
          <div className="space-between">
            <div className="excel flex-row text-center pt-20 pb-10 border-dashed border-2 border-gray-200 rounded-lg">
              <img src={excel} alt="excel" className="mx-auto block p-5" />
              <p className="text-[#999CA0]">
                Drop your excel sheet here or{' '}
                <span className="text-[#605BFF]">browse</span>
              </p>
            </div>
            <div className="pt-3">
              <button className="w-full bg-[#605BFF] text-white py-2 rounded-md">
                Upload
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="pb-10">Uploads</div>
          <div className="bg-white rounded-md shadow-md p-0 w-full overflow-x-auto">
            {data.length ? (
              <table className="w-full border-collapse border border-gray-200">
                <thead className="text-xs text-gray-700 bg-gray-100">
                  <tr>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Links</th>
                    <th className="px-6 py-4">Prefix</th>
                    <th className="px-6 py-4">Select Tags</th>
                    <th className="px-6 py-4">Selected Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className="border-t border-gray-200 w-full">
                      <td className="px-12 py-4">{row.id}</td>
                      <td className="px-0 py-4 text-[#5B93FF] cursor-pointer underline">
                        <a
                          href={`www.${row.links}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          www.{row.links}
                        </a>
                      </td>
                      <td className="px-0 py-4">{row.prefix}</td>
                      <td className="px-6 py-4">
                        <select
                          className="border-2 border-gray-300 px-2 py-1 rounded-md w-full"
                          onChange={(e) => setSelect(e.target.value)}
                        >
                          {Array.isArray(row.select_tags.split(", ")) ? (
                            row.select_tags.split(", ").map((tag, tagIndex) => (
                              <option key={tagIndex} value={tag}>
                                {tag}
                              </option>
                            ))
                          ) : (
                            <option value={row.select_tags.split(", ")}>
                              {row.select_tags}
                            </option>
                          )}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <div className="border-2 rounded-md px-2 py-1 h-10 w-50 bg-[#605BFF] text-white">
                          {select}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
