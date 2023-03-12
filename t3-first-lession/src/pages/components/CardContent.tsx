import { trpc } from "../../utils/trpc";
import { FormEvent, useState } from "react";

export const CardContent = () => {

    const response = trpc.kanban.getOne.useQuery();
    const { mutate } = trpc.kanban.create.useMutation({
        onSuccess: (response) => alert(JSON.stringify(response)),
    });

    const [ KbInfo, setKbInfo ] = useState("");
    const [ KbPerson, setKbPerson ] = useState("");
    const [ KbStatus, setKbStatus ] = useState("");

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();

        mutate({ KbInfo, KbPerson, KbStatus});
    }

    return (
        <div className="max-w-sm p-6 bg-white border rounded-lg shadow">
            <h1>Name:</h1>
            <input className="w-96 h-10 border border-black rounded-sm" type="text" />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    )
}