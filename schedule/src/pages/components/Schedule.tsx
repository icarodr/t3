import { useState } from "react";

const Schedule = () => {

    return (
        
<div className="flex items-center justify-center w-full min-h-screen">
          <div className="text-lg border shadow-lg rounded-lg flex space-x-4">  
          <h1 className="text-white m-4">Data</h1>   
            <div className='grid grid-cols-7 text-xs text-center text-black font-bold bg-white'>
              <span className='flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-200'><a href="">Seg</a></span>
              <span className='flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-200'><a href="">Ter</a></span>
              <span className='flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-200'><a href="">Qua</a></span>
              <span className='flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-200'><a href="">Qui</a></span>
              <span className='flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-200'><a href="">Sex</a></span>
              <span className='flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-200'><a href="">Sab</a></span>
              <span className='flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-200'><a href="">Dom</a></span>

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
          </div>
        </div>
    )
}

export default Schedule;