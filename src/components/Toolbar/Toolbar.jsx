import React from 'react'
import './Toolbar.css'

const Toolbar = (props) => {
  const handleClick = evt => {
    props.onSelectFilter(evt.target.textContent)};
  const newToolbarList = props.filterList.map(function(name) {
    if (name === props.selected) {
      return <button 
      key={ props.filterList.indexOf(name) }
      className={ `${name} active` }
      onClick={ handleClick }>{ name }</button>;
    } else {
    return <button 
    key={ props.filterList.indexOf(name) }
    className={ name }
    onClick={ handleClick }>{ name }</button>;}
  });
  return (
   <div className='toolbar'>{ newToolbarList }</div>
  )
};
export default Toolbar;
