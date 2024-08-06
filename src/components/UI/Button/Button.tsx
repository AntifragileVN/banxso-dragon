import React, { ReactNode } from 'react';
import c from './Button.module.scss';

type ButtonProps = {
	children: ReactNode;
};

const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button className={c.button} {...rest}>
			{children}
		</button>
	);
};

export default Button;
