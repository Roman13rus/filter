import React from 'react';
import './ProjectList.css';

const Projectlist = (props) => {
  const newProjectList = props.filterprojectList.map(function(project) {
    return (<span 
      className='item'
      key={props.filterprojectList.indexOf(project)}>
      <img
        src={project.img}
        alt='some value'
      />
      </span>)
});
    return (
      <div className='project_list'>{newProjectList}</div>
  )
};
export default Projectlist;