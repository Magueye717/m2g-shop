import React from 'react';
import VitrineItem from '../vitrine-item/vitrineItem';
import './vitrine-preview.scss'

const VitrinePreview = ({title, items})=>(
    <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <VitrineItem key={item.id} item={item} />
        ))}
    </div>
  </div>
    
);
export default VitrinePreview;
