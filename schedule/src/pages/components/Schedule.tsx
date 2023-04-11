import { useState, FormEvent } from "react";
import { NextPage } from "next";
import { api } from "~/utils/api";


const Schedule: NextPage = () => {

  const response = api.schedule.getAllCommits.useQuery();
  const { mutate } = api.schedule.createCommitment.useMutation({
    onSuccess: (response) => alert(JSON.stringify(response)),
  });

  const [ dateCommit, setDateCommit ] = useState("");
  const [ descCommit, setDescCommit ] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // mutate({ descCommit, dateCommit });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex space-x-4 rounded-lg border text-lg shadow-lg">
        
        <form onSubmit={handleSubmit}>
        <input className="bg-gray-600 text-white m-2 rounded-lg" type="date" name="" id="" onChange={(e) => console.log(e.target.valueAsDate)}/>
          <h1 className="text-white">Detalhes:</h1> 
          <input
            type="text"
            className="rounded-md border border-black text-black"
            placeholder="Descrição:"
            onChange={(event) => setDescCommit(event.target.value)}
          />
          <button
            className="rounded-md border-none bg-blue-400 text-white"
            type="submit"
          >
            Submit
          </button>
          <div className="items-center justify-center border border-white rounded-lg m-2">
          <p className="text-white m-2">{JSON.stringify(response.data)} | Data: </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
