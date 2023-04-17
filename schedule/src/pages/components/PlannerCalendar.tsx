import { api } from "~/utils/api";
import { FormEvent, useState } from "react";

const Calendar = () => {
  // const response = api.schedule.getAllCommits.useQuery();
  const mutation = api.schedule.createCommitment.useMutation({
    onSuccess: (response: any) => alert("Salvo no Banco!"),
    onError: (response: any) => alert("Error"),
  });

  const [descCommit, setDesc] = useState("");
  const [ titleCommit, setTitle ] = useState("");
  
  //Modal
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setShowModal(false);

    mutation.mutate({
      desc: descCommit,
      title: titleCommit,
    });
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-0 rounded-lg font-bold shadow-lg">
        <div className="flex h-32 justify-center rounded-tl-lg border hover:bg-slate-100"

        >
          DOM <br />
          01
        </div>
        <div className="flex justify-center border hover:bg-slate-100"
              onClick={() => setShowModal(true)}
        >
          SEG <br />
          02 <br />
        </div>
        <div className="flex justify-center border hover:bg-slate-100"
              onClick={() => setShowModal(true)}
        >
          TER <br />
          03
        </div>
        <div className="flex justify-center border hover:bg-slate-100"
            onClick={() => setShowModal(true)}
        >
          QUA <br />
          04
        </div>
        <div className="flex h-32 justify-center border hover:bg-slate-100"
              onClick={() => setShowModal(true)}
        >
          QUI <br />
          05
        </div>
        <div className="flex justify-center border hover:bg-slate-100"
              onClick={() => setShowModal(true)}
        >
          SEX <br />
          06
        </div>
        <div className="flex justify-center rounded-tr-lg border hover:bg-slate-100"
            
        >
          SÁB <br />
          07
        </div>

        <div
          className="flex justify-center border hover:bg-slate-100"
          onClick={() => setShowModal(true)}
        >
          08 <br />
        </div>
        <div className="flex h-32 justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>
          09
        </div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>10</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>11</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>12</div>
        <div className="flex h-32 justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>
          13
        </div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>14</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>15</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>16</div>
        <div className="flex h-32 justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>
          17
        </div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>18</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>19</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>20</div>
        <div className="flex h-32 justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>
          21
        </div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>22</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>23</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>24</div>
        <div className="flex h-32 justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>
          25
        </div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>26</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>27</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>28</div>
        <div className="flex h-32 justify-center rounded-bl-lg border hover:bg-slate-100" onClick={() => setShowModal(true)}>
          29
        </div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>30</div>
        <div className="flex justify-center border hover:bg-slate-100" onClick={() => setShowModal(true)}>31</div>
      </div>

      {/*Modal e configs */}

      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold">{titleCommit}</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  </button>
                </div>

                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-x-4 space-y-4 ">

                    <input
                      className="h-10 rounded-md border"
                      placeholder="Título:"
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                      className="h-28 rounded-md border"
                      placeholder="Descrição.."
                      type="text"
                      onChange={(e) => setDesc(e.target.value)}
                    />

                    <button
                      className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                      type="submit"
                    >
                    Agendar
                    </button>

                    <button
                      className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </button>

                  </form>
                </div>
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">                 
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Calendar;
// function mutate(arg0: { descCommit: string; dateCommit: string }) {
//   throw new Error("Function not implemented.");
// }
