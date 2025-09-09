import React from 'react';

interface PageWrapperProps {
	children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
	return (
		<div className="bg-white text-slate-900 min-h-screen bg-grid spotlight relative">
			<div className="container mx-auto px-4 pt-24">
				{children}
			</div>
		</div>
	);
};

export default PageWrapper;