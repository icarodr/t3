import { type NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useState, FormEvent } from "react";

const Home: NextPage = () => {

  //Passo 1
  const response = trpc.product.getAll.useQuery();
  const { mutate } = trpc.product.create.useMutation({
    onSuccess: (response) => alert(JSON.stringify(response)),
  });

  //Passo 2
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");

  //Passo 3
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ productName, productBrand, productDesc, productPrice })
  };

  return (
    <>
      <Head>
        <title>Page List</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-2xl text-center text-white border-2 border-gray-400 rounded-lg bg-gray-500 m-40 mb-4">
          <h1 className="m-6">Lista de compras</h1>
        </div>
        <div className="flex mr-40">
          <input type="text" placeholder="Nome: " className="text-lg text-gray-400 border-2 border-gray-400 rounded-lg hover:bg-gray-200 ml-40 w-80" />
          <input type="text" placeholder="Marca: " className="text-lg text-gray-400 border-2 border-gray-400 rounded-lg hover:bg-gray-200 ml-8 w-80" />
          <input type="text" placeholder="Descrição: " className="text-lg text-gray-400 border-2 border-gray-400 rounded-lg hover:bg-gray-200 ml-8 w-80" />
          <input type="text" placeholder="Preço: " className="text-lg text-gray-400 border-2 border-gray-400 rounded-lg hover:bg-gray-200 ml-8 w-80" />

          <button type="submit" className="text-center border-2 border-gray-400 rounded-2xl bg-green-500 hover:bg-green-200 w-fit ml-10">
            <h1 className="m-6">Adicionar</h1>
          </button>
          <button type="submit" className="text-center border-2 border-gray-400 rounded-2xl bg-red-500 hover:bg-red-200 w-fit ml-2">
            <h1 className="m-6">Deletar</h1>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;