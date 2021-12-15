import './JobsSection.scss';


const JobsSection = ({jobItem}) => {
  
  return (
    <div className="jobSection-container">
      {
        jobItem.map((item)=>{
          return <div className="grid-item" key={item.id}>
            <div className="job-content">
              
              <h3>{item.attributes.title}</h3>
              <p>{item.attributes.category_name}</p>    
            </div>
          </div>
        })
      }
    </div>
  );
}

export default JobsSection;
