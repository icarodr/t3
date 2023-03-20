import { useState, FormEvent } from "react";
import { NextPage } from "next";

const Schedule: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex space-x-4 rounded-lg border text-lg shadow-lg">
        <h1 className=" m-4 flex text-white">Mês:</h1>
        <div className="m-4 grid grid-cols-7 border rounded-lg text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            1
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            2
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            3
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            4
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            5
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            6
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            7
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            8
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            9
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            10
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            11
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-200 hover:text-black">
            12
          </span>
        </div>

        <div className="grid grid-cols-7 bg-white text-center text-xs font-bold text-black">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg">
            Seg
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg">
            Ter
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg">
            Qua
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg">
            Qui
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg">
            Sex
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg">
            Sab
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg">
            Dom
          </span>

          <div className="h-7 w-10">

          </div>

          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>

          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>

          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>

          <span>22</span>
          <span>23</span>
          <span>24</span>
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>

          <span>29</span>
          <span>30</span>
          <span>31</span>
        </div>

        <div>
          <h1 className="text-white">Detalhes:</h1>
          <input
            type="text"
            className="rounded-md border border-black text-black"
          />
          <button
            className="rounded-md border-none bg-blue-400 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
        <p>{}</p>
      </div>
    </div>
  );
};

export default Schedule;
