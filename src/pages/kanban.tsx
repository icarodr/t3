import { NextPage } from "next";
import React, { useState } from "react";
import { number } from "zod";
import { trpc } from "../utils/trpc";
import { Card } from "./components/Card";

const KanbanPage: NextPage = () => {

  const [cards, setCards] = useState([{}]);

  const AddCard = () => {
    console.log("Card Adicionado")
    setCards([
      ...cards,
      {
        name: 1
      }
    ])
  }

  return (
    <>
      <div className="px-12 pt-9 flex-none">
        <h1 className="text-3xl font-bold">Kanban</h1>
        <h1 className="text-2xl font-bold text-red-500">To Do:</h1>
        {/* {JSON.stringify(response.data, null, 2)} */}
        <button
          className="rounded bg-blue-500 px-5 py-3 text-white hover:bg-blue-400"
          type="submit"
          onClick={AddCard}
        >
          Add a Card
        </button>
      </div>
      <div>{cards.map((item, index) => (
        <div key={index}><Card /></div>
      ))}</div>
    </>
  );
};

export default KanbanPage;
