import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const ButtonComponent: React.FC <DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = (props) => {
    return (
        <button  {...props} />
    );
}
