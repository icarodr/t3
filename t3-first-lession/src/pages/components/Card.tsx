import { FormEvent } from "react";


export const Card = () => {

    

    // const handleSubmit = (e: FormEvent) => {
    //     e.preventDefault();
    //     mutate({ KbInfo, KbPerson, KbStatus });
    // }

    return (
        <div className="m-2 max-w-sm p-6 bg-white border rounded-lg shadow">
            <h5 className="mb-2 text-2xl fon t-bold tracking-tight text-gray-900 dark:text-black">Lorem ipsum</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    )
}