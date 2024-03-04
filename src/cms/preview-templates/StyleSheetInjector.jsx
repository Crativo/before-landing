import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';


const StyleSheetInjector = ({ children }) => {
	const [iframeRef, setIframeRef] = useState(undefined);

	useEffect(() => {
		const iframe = document.querySelector('#nc-root iframe');
		// const iframeHeadElem = iframe && iframe.contentDocument.head;
		const iframeHeadElem = iframe && iframe.contentDocument.head
		setIframeRef(iframeHeadElem);
	}, []);

	return (
		<>
			{iframeRef && (
                <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
			)}
		</>
	);
};

export default StyleSheetInjector;