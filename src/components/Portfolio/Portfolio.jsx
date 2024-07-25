import { useState } from 'react'
import { content } from './content';
import Toolbar from '../Toolbar/Toolbar';
import Projectlist from '../ProjectList/ProjectList';

export const Portfolio = () => {
  const filterList = ["All", "Websites", "Flayers", "Business Cards"];
  const contents = content
  const [filterSelected, setFilterSelected] = useState('All');

  const projectFilter = () => {
    let filterProjectList = []
    if (filterSelected === 'All') {
      filterProjectList = contents
    } else {
      filterProjectList = contents.filter(function(item) {
        return item.category === filterSelected;
      });
  }
    return filterProjectList;
  };

  return (
    <>
      <Toolbar
       filterList={filterList}
       selected={filterSelected}
       onSelectFilter={(filter) => {setFilterSelected(filter)}}
       />
      <Projectlist
      filterprojectList={projectFilter()}
      />
    </>
  );
};
