import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import'./boutique.scss';
import VitrineOverview from '../../components/vitrine-overview/vitrine-overview';
import CollectionPage from '../collection/collection';
import { fetchCollectionsStart } from '../../redux/boutique/actions.boutuique';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spiner/with-spinner.component';
import { selectIsCollectionFetching } from '../../redux/boutique/boutique.selector';

const VitrineOverviewWithSpinner = WithSpinner(VitrineOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Boutique =({fetchCollectionsStart, match, isCollectionFetching})=>{
    
   useEffect(()=>{
    fetchCollectionsStart();
   },[ fetchCollectionsStart]);

        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props => (<VitrineOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)} />
                <Route  path={`${match.path}/:collectionId`} render={props=>(<CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />)}  />
            </div>
        )
    }

    const mapStateToprops = createStructuredSelector({
        isCollectionFetching: selectIsCollectionFetching
    })
    const mapDispactchToProps = dispatch => ({
        fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
    })
    /* const mapDispactchToProps = dispatch => ({
        initCollectionData: collectionMap => dispatch(initCollectionsData(collectionMap))
    }) */
export default connect(mapStateToprops, mapDispactchToProps) (Boutique);