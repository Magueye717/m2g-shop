import React from 'react';
import MenuCard from './Menu-card'
import './Top-section.scss';
import '../../index.css';
import { selectMainMenuSections } from '../../redux/main-menu/main-menu.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


const MainMenu = ({sections}) =>(
      <div className="main-menu">
        {sections.map(({id, ...otherProps}/* ,index */)=>(
          <MenuCard key={id}  {...otherProps} /* index={index} *//>
        ))}
      </div>
  )
  
  const mapStateToProps = createStructuredSelector({
    sections : selectMainMenuSections
  })

  /* const mapStateToProps = state =>({
    sections : state.mainmenu.sections
  }) */

export default connect(mapStateToProps) (MainMenu);