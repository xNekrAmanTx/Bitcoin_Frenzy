import React from 'react';

type propsType = {
    onClick: () => void
    children: string /* | HTMLElement */
};

const Button = ({ onClick, children }: propsType) => {
    return (
        <button className='simple-button white-on-blue' onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;