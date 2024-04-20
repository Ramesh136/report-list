"use client"
import { ChevronFirst, ChevronLast } from 'lucide-react'
import React, { useEffect, useState } from 'react'



const Paginator = ({reports ,setReports, data}:any) => {
    const [perPage,setPerPage] = useState(3)
    const [lastDigit ,setLastDigit] = useState(0)

    const clickHandler = (e: any) => {
      console.log(e.target.innerText);
      setReports(
        data.slice(
          (e.target.innerText - 1) * perPage,
          e.target.innerText*perPage
        )
      );
    };

    useEffect(()=>{
        setReports(data.slice(0,perPage))
        console.log(reports)
        console.log(perPage)
    },[perPage])

  return (
    <div className="border-t pt-5">
      <ul className="list-style-none flex gap-3 mx-4 ml-72 pl-4">
        <li>
          <button
            // onClick={() => setLastDigit((prev) => prev - 3)}
            className="text-black relative block rounded px-3 py-1.5 text-sm transition-all duration-300 bg-neutral-500 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            <ChevronFirst height={20} />
          </button>
        </li>
        <li className="flex gap-3">
          {new Array(
            // Math.min(
              
              data.length % perPage === 0
                ? data.length / perPage
                : Math.floor(data.length / perPage) + 1
            // )
          )
            .fill(0)
            .map((e, index) => {
              return (
                <button
                  onClick={clickHandler}
                  key={Math.random()}
                  className="relative h-8 block rounded  px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 bg-neutral-500 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                >
                  {lastDigit + index + 1}
                </button>
              );
            })}
        </li>
        <li>
          <button
            // onClick={() => {
            //   data.length>=lastDigit?
            //   setLastDigit((prev) => prev + 3): null}}
            className="relative block rounded px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 bg-neutral-500 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            <ChevronLast height={20} />
          </button>
        </li>
        <li className="flex w-96">
          <h1 className="p-1">Records per page : </h1>
          <select
            onChange={(e) => {
              setPerPage(parseInt(e.target.value));
            }}
            id="repos"
            defaultValue={"3"}
            className="h-8 w-max ml-2 bg-neutral-500 border border-gray-300 text-neutral-600 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block px-3 py-1.5 dark:text-white "
          >
            {/* <option selected>Select repos per Result </option> */}

            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default Paginator