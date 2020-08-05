import React from 'react';

const headerStyle = {
	'display': 'flex',
	'flexDirection': 'row',
	'flexWrap': 'nowrap',
	'justifyContent': 'space-between',
	'padding': '5px'
};

export const ModalHeader = ({title, cancel}) => {
	return (
		<div style={headerStyle}>
			<h1>{title}</h1>
			<button type="button" onClick={() => cancel()}>
				<ion-icon name="close-circle-outline"></ion-icon>
			</button>
		</div>
	);
}
