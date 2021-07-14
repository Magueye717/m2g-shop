import React from 'react';
import './collection.scss';
import { selectCollections } from '../../redux/boutique/boutique.selector';
import { connect } from 'react-redux';
import VitrineItem from '../../components/vitrine-item/vitrineItem';

const CollectionPage =({collection})=>{
    const {title, items} = collection;
return(
    <div className="collection-page">
        <h1 className="title">{title}</h1>
        <div className="items">
        {items.map(item => (
            <VitrineItem key={item.id} item={item} />
        ))}
        </div>
    </div>
)};

const mapStateToProps = (state, ownProps)=>({
    collection : selectCollections(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps) (CollectionPage);