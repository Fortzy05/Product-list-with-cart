// import { useState } from "react";
import datas from "../data.json";
import "./App.css";

export default function App() {
  return (
    <section className="ml-[100px]">
      <h1 className="px-6 font-bold mt-10 text-4xl">Desserts</h1>
      <div className="h-[100vh]  p-6 pt-5 grid grid-cols-3 max-w-[850px]  gap-2">
        {datas.map((data) => (
          <ul className="">
            <ShoppingCard data={data} key={data.id} />
          </ul>
        ))}
      </div>
    </section>
  );
}

function ShoppingCard({data}) {
  return (
    <li>
      <img className="rounded-[5px] w-[250px]" src={data.image.desktop} alt={data.name} />
      <span className="text-[1rem] leading-6 text-Rose500">{data.category}</span>
      <h1 className="text-[1rem] font-semibold leading-5 text-Rose900">{data.name}</h1>
      <h4 className="text-Red">${(data.price)}</h4>
      
    </li>
  );
}
