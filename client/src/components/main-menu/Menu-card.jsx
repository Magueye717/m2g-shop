import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuCard = ({title, imageUrl, size, history, linkUrl, match})=>(
    <div className={`card-item ${size}`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div style={{background: `url(${imageUrl})`}} className="background-image">
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
        </div>
    </div>
)

export default withRouter(MenuCard);