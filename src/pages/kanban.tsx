import { NextPage } from "next";
import { FormEvent, useState, useEffect } from "react";
import { trpc } from "../utils/trpc";
import { Card } from "./components/Card";

const KanbanPage: NextPage = () => {
    
    const AddCard = () =>{
        console.log("Card Adicionado")
        return (
            <Card/>
        )
    }

    const DelCard = () => {
        console.log("Card Deletado")
    }

  return (
    <>
      <div className="px-12 pt-9">
        <h1 className="text-2xl font-bold">Kanban</h1>
        {/* {JSON.stringify(response.data, null, 2)} */}
        <button
          className="ml-10 rounded bg-red-500 px-5 py-3 text-white hover:bg-red-400"
          type="submit"
          onClick={AddCard}
        >
          Add a Card
        </button>
        <button
          className="rounded bg-blue-500 px-5 py-3 text-white hover:bg-blue-400"
          type="submit"
          onClick={DelCard}
        >
          Delete a card
        </button>
      </div>
      {/* <Card /> */}
    </>
  );
};

export default KanbanPage;
