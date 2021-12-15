import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './MenuArea.scss';
import { InnerLayout } from '../Layouts';
import Button from '../Button/Button';
import JobsSection from '../JobsSection/JobsSection';

const Menuarea = () => {
  
  const [categorys,setCategorys] = useState([]);
  const [jobs,setJobs] = useState([]);

  useEffect(()=>{
    axios.get('https://www.getonbrd.com/api/v0/categories/programming/jobs?&expand=[%22company%22]')
        .then(response => setJobs(response.data.data))
  },[]);

  console.log(jobs);

  useEffect(()=>{
    axios.get('https://www.getonbrd.com/api/v0/categories?')
        .then(response => setCategorys(response.data.data))
  },[]);

  const allButtons = ['All', ...new Set(categorys.map(item => item.attributes.name))];

  const filter =(allButtons)=>{
    if(allButtons === 'All'){
      setJobs(jobs);
      return;
    }

    const filteredData = jobs.filter(item => item.attributes.category_name === allButtons);
    setJobs(filteredData);

  }

  return (
    <div className="MenuArea-container">
      <h1 className="title">¡Encuentra el trabajo perfecto para tí!</h1>
      <InnerLayout>
         <Button filter={filter} button={allButtons}/>
         <JobsSection jobItem={jobs}/>

      </InnerLayout>
    </div>
  );
}

export default Menuarea;
