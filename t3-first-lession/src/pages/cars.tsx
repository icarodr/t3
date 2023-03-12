import { NextPage } from "next";
import { FormEvent, useState } from "react";
import { trpc } from "../utils/trpc";


const CarPage: NextPage = () => {
    
  //Passo 1
    const response = trpc.car.getAll.useQuery();
    const { mutate } = trpc.car.create.useMutation({
        onSuccess: (response: any) => alert(JSON.stringify(response)),
    });
    const { mutate: deleteCar } = trpc.car.delete1.useMutation({
      onSuccess: (response) => alert(JSON.stringify(response))
    });
    
    //Passo 2
    const [carName, setCarName] = useState("");
    const [carBrand, setCarBrand] = useState("");
    const [carPrice, setCarPrice] = useState("");
    
    //Passo 3
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutate({ carName, carBrand, carPrice: Number(carPrice)});
    };

    return (
      <div className="px-12 pt-9">
      <h1 className="text-2xl font-bold">Cars: </h1>
      {JSON.stringify(response.data, null, 2)}

      <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
        <input
          className="border-2 px-4 py-3"
          type="text"
          placeholder="Name..."
          onChange={(event) => setCarName(event.target.value)}
        />
        <input
          className="border-2 px-4 py-3"
          type="text"
          placeholder="Brand..."
          onChange={(event) => setCarBrand(event.target.value)}
        />
        <input
          className="border-2 px-4 py-3"
          type="text"
          placeholder="Price..."
          onChange={(event) => setCarPrice(event.target.value)}
        />
        <div className="flex">
        <button
          className="rounded bg-blue-500 px-5 py-3 text-white hover:bg-blue-400"
          type="submit"
        >
          Create a new Car
        </button>
        </div>
      </form>

      <button
          className="rounded ml-10 bg-red-500 px-5 py-3 text-white hover:bg-red-400"
          type="submit"
          // Mudar a função de deletar
          onClick={() => deleteCar({ carId: "" })} 
        >
          Delete a Car
        </button>
    </div>
    );
};

export default CarPage;