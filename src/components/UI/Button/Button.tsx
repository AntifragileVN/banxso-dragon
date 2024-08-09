import { ReactNode } from 'react';
import c from './Button.module.scss';
import React from 'react';

type ButtonProps = {
	children: ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, onClick, ...rest }: ButtonProps) => {
	return (
		<button className={c.button} onClick={onClick} {...rest}>
			{children}
		</button>
	);
};

export default Button;
