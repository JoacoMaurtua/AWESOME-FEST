import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './MenuArea.scss';
import { InnerLayout } from '../Layouts';


const Menuarea = () => {
  const [tags,setTags] = useState([]);

  useEffect(()=>{
    axios.get('https://www.getonbrd.com/api/v0/tags?per_page=10&page=1')
        .then(response => setTags(response.data.id))
  },[]);

  console.log(tags);

  return (
    <div className="MenuArea-container">
      <h1 className="title">¡Encuentra el trabajo perfecto para tí!</h1>
      <InnerLayout>


      </InnerLayout>
    </div>
  );
}

export default Menuarea;
