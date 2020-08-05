import React from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

const containerStyles = {
	'position': 'absolute',
	'zIndex': '500',
	'top': '0',
	'left': '0',
	'right': '0',
	'padding': '10px',
	'backgroundColor': 'rgba(110,110,110,.4)',
};

const modalWrap = {
	'backgroundColor': 'rgba(255, 255, 255, 1)'
};

export const ModalContainer = ({open, title, body, footer, onClose}) => {	
	return (
		<div	
			style={containerStyles}
		>
			<div
				aria-hidden={!open}
				role="dialog"
				style={modalWrap}
			>
				<ModalHeader
					title={title}
					onClose={onClose}
				/>
				<ModalBody>
					{body}
				</ModalBody>
				<ModalFooter>
					{footer}
				</ModalFooter>
			</div>
		</div>
	);
}