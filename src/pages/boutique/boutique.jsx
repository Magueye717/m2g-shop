import React from 'react';
import { Route } from 'react-router-dom';
import'./boutique.scss';
import VitrineOverview from '../../components/vitrine-overview/vitrine-overview';
import CollectionPage from '../collection/collection';


const Boutique =({match}) =>(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={VitrineOverview} />
        <Route  path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)
    
export default Boutique;