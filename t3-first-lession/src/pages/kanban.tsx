import { NextPage } from "next";
import React, { FormEvent, useState } from "react";
// import { number } from "zod";
import { trpc } from "../utils/trpc";
import { Card } from "./components/Card";

const KanbanPage: NextPage = () => {

  const [cards, setCards] = useState([{}]);
  const AddCard = () => {
    console.log("Card Adicionado")
    setCards([
      ...cards,
      {
        cards
      }
    ])
  }

  return (
    <>
      <div className="p-16">
      <h1 className="text-3xl font-bold">Kanban</h1>
      <br />
        <div className="bg-gray-200 w-1/4 rounded-lg">
          <div className="px-6 pt-6">
            <h1 className="text-2xl font-bold text-red-500">Pending:</h1>
            {/* {JSON.stringify(response.data, null, 2)} */}
            <div>{cards.map((item, index) => (
              <div key={index}><Card /></div>
            ))}</div>
            <button
              className="rounded bg-blue-500 px-5 py-3 text-white hover:bg-blue-400 w-full mt-4 mb-6"
              type="submit"
              onClick={AddCard}
            >
              + New Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KanbanPage;
