import { api } from "~/utils/api";
import { FormEvent, useState } from "react";

const Calendar = () => {
   
  const response = api.schedule.getAllCommits.useQuery();
  const { mutate } = api.schedule.createCommitment.useMutation({
    onSuccess: (response: any) => alert(JSON.stringify(response)),
  });

  const [ descCommit, setDesc ] = useState("");
  const [ dateCommit, setDate ] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

//    mutate({ descCommit, dateCommit });
  };

  return (
    <div className="grid grid-cols-7 gap-0 shadow-lg rounded-lg font-bold">
      <div className="border flex justify-center h-32 hover:bg-slate-100 rounded-tl-lg">
        DOM <br />01
      </div>
      <div className="border flex justify-center hover:bg-slate-100">
        SEG <br />02
      </div>
      <div className="border flex justify-center hover:bg-slate-100">
        TER <br />03
      </div>
      <div className="border flex justify-center hover:bg-slate-100">
        QUA <br />04
      </div>
      <div className="border flex justify-center h-32 hover:bg-slate-100">
        QUI <br />05
      </div>
      <div className="border flex justify-center hover:bg-slate-100">
        SEX <br />06
      </div>
      <div className="border flex justify-center hover:bg-slate-100 rounded-tr-lg">
        SÁB <br />07
      </div>

      <div className="border flex justify-center hover:bg-slate-100">08 <br /></div>
      <div className="border flex justify-center h-32 hover:bg-slate-100">09</div>
      <div className="border flex justify-center hover:bg-slate-100">10</div>
      <div className="border flex justify-center hover:bg-slate-100">11</div>
      <div className="border flex justify-center hover:bg-slate-100">12</div>
      <div className="border flex justify-center h-32 hover:bg-slate-100">13</div>
      <div className="border flex justify-center hover:bg-slate-100">14</div>
      <div className="border flex justify-center hover:bg-slate-100">15</div>
      <div className="border flex justify-center hover:bg-slate-100">16</div>
      <div className="border flex justify-center h-32 hover:bg-slate-100">17</div>
      <div className="border flex justify-center hover:bg-slate-100">18</div>
      <div className="border flex justify-center hover:bg-slate-100">19</div>
      <div className="border flex justify-center hover:bg-slate-100">20</div>
      <div className="border flex justify-center h-32 hover:bg-slate-100">21</div>
      <div className="border flex justify-center hover:bg-slate-100">22</div>
      <div className="border flex justify-center hover:bg-slate-100">23</div>
      <div className="border flex justify-center hover:bg-slate-100">24</div>
      <div className="border flex justify-center h-32 hover:bg-slate-100">25</div>
      <div className="border flex justify-center hover:bg-slate-100">26</div>
      <div className="border flex justify-center hover:bg-slate-100">27</div>
      <div className="border flex justify-center hover:bg-slate-100">28</div>
      <div className="border flex justify-center h-32 hover:bg-slate-100 rounded-bl-lg">29</div>
      <div className="border flex justify-center hover:bg-slate-100">30</div>
      <div className="border flex justify-center hover:bg-slate-100">31</div>
    </div>
  );
};

export default Calendar;
