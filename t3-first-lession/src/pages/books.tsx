import { NextPage } from "next";
import { FormEvent, useState } from "react";
import { trpc } from "../utils/trpc";

const BookPage: NextPage = () => {
  const response = trpc.book.getAll.useQuery();
  const { mutate } = trpc.book.create.useMutation({
    onSuccess: (response) => alert(JSON.stringify(response)),
  });

  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutate({ bookName, bookAuthor });
  };

  return (
    <div className="px-12 pt-9">
      <h1 className="text-2xl font-bold">Books: </h1>
      {JSON.stringify(response.data, null, 2)}

      <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
        <input
          className="border-2 px-4 py-3"
          type="text"
          placeholder="Name..."
          onChange={(event) => setBookName(event.target.value)}
        />
        <input
          className="border-2 px-4 py-3"
          type="text"
          placeholder="Author..."
          onChange={(event) => setBookAuthor(event.target.value)}
        />
        <button
          className="rounded bg-blue-500 px-5 py-3 text-white hover:bg-blue-400"
          type="submit"
        >
          Criar novo livro
        </button>
      </form>
    </div>
  );
};

export default BookPage;
