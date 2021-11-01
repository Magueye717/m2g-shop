import React from 'react';
/* import './custom-button.scss' */
import { CustomButtonsStyle } from './custom-boutton.styles';

const CustomButton = ({children,...props}) => (
    <CustomButtonsStyle {...props}>{children}</CustomButtonsStyle>
);

export default CustomButton;