import React from 'react';
import './vitrine-overview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import VitrinePreview from '../vitrine-preview/vitrine-preview';
import { selectBoutiqueCollections, selectCollectionsForPreview } from '../../redux/boutique/boutique.selector';


const VitrineOverview = ({collections})=>(
    <div className="collection-overview">
         {collections.map(({ id, ...otherCollectionProps }) => (
            <VitrinePreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps) (VitrineOverview);