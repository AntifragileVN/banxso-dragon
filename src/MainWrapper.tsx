import React from 'react';
import { RecoilRoot } from 'recoil';

type MainWrapperProps = {
	children: React.ReactNode;
};

const MainWrapper = ({ children }: MainWrapperProps) => {
	return (
		<React.StrictMode>
			<RecoilRoot>{children}</RecoilRoot>
		</React.StrictMode>
	);
};

export default MainWrapper;
