import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import './App.css';
import Navigation from './component/Navbar';
import Filter from './component/Filter';
import Cards from './component/Cards';
import Spinner from './component/Spinner';
import {filterData, apiUrl} from './Data';

function App() {

  const [courses, setCourses] = useState([]); 
  const [spin, setSpin] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setSpin(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Check Your Internet Connection");
    }
    setSpin(false);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="max-w-screen h-screen overflow-x-hidden flex flex-col bg-[#4a4E69]">
      <div>
        <Navigation></Navigation>
      </div>

      <div className="w-11/12 flex flex-wrap max-w-max gap-y-4 mx-auto py-4 justify-center">
        <Filter
         category={category} setCategory = {setCategory}
         filterData={filterData}></Filter>
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap'>
          {
            spin ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
          }
        </div>
    </div>
    
  );
}

export default App;
