import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.style';


const WithSpinner = WrapedComponent =>{
    const Spinner =({isLoading, ...otherProps})=>{
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
        <WrapedComponent  {...otherProps}/>
        );
    };

  return Spinner;
};

export default WithSpinner;

/* const WithSpinner = WrapedComponent => ({isLoading, ...otherProps})=>{
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ):<WrapedComponent  {...otherProps  }/>
}

export default WithSpinner; */