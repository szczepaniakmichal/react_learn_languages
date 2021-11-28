import React from 'react';
import { ButtonWrapper } from "./styles";


function Button({buttonText, click, ...props}) {
    return (
        <>
            <ButtonWrapper onClick={click} {...props}>
                {buttonText}
            </ButtonWrapper>
        </>
    );
}

export default Button;