import React from 'react';

const modalBodyStyle = {
	'padding': '5px'
}

export const ModalBody = ({children}) => {
	return (
		<div style={modalBodyStyle}>
			{children}
		</div>
	);
}