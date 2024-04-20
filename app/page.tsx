"use client"
import { useState } from "react";
import Paginator from "./components/Paginator";
import { ArrowDownWideNarrow, ChevronFirst, FileDown, SquareX } from "lucide-react";


const data = [
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 1",
  },
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 2",
  },
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 3",
  },
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 4",
  },
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 5",
  },
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 6",
  },
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 7",
  },
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 8",
  },
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 9",
  },
  {
    date: new Date(new Date().getTime() - Math.random() * 1e12),
    name: "Report 10",
  },
];

export default function Home() {

  const [reports, setReports] = useState([...data]);
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-80 justify-center ml-72">
        <h1 className="font-extrabold flex">Recently Generated Reports</h1>
        <div className="flex gap-4 cursor-pointer">
          <ArrowDownWideNarrow className="" />
          <SquareX />
        </div>
      </div>
      {/* <h2 className="inline">icons</h2> */}
      <table className="p-10 table overflow-hidden my-10">
        <thead className="bg-slate-300">
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((e: any) => {
            return (
              <tr key={Math.random()}>
                <td suppressHydrationWarning>
                  {e.date.toDateString()}{" "}
                  <h1 suppressHydrationWarning className="text-xs text-slate-400">
                    {e.date.toLocaleTimeString()}
                  </h1>
                </td>
                <td>{e.name}</td>
                <td className="pl-10">
                  <FileDown className="cursor-pointer" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Paginator reports={reports} setReports={setReports} data={data} className="justify-between"/>
    </div>
  );
}
