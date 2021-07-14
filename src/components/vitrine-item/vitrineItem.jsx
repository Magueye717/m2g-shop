import React from 'react';
import './vitrine-item.scss'
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';



const VitrineItem =({item, addItemTocart})=>{
  const {imageUrl, name, price} = item;
  return(
    <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={()=>addItemTocart(item)} inverted >Ajouter au panier</CustomButton>
  </div>
)};
 const mapDispatchToProps = dispatch =>({
  addItemTocart : item => dispatch(addItem(item))
 });
export default connect(null, mapDispatchToProps) (VitrineItem);