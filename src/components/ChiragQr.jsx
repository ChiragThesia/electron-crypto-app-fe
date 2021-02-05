import React, { Fragment } from 'react';
import QRCode from 'qrcode.react';

function ChiragQRGenerator() {
	const qrObject = {
		src: 'https://drive.google.com/uc?id=1ARJ6P9caknPVNqGyWMcf3X1S0O6ifw9T',
		x: null,
		y: null,
		height: 24,
		width: 24,
		excavate: true
	};

	return (
		<Fragment>
			<div>
				<QRCode
					value="Chirag Thesia"
					includeMargin={true}
					rederAs={'svg'}
					size={300}
					imageSettings={qrObject}
				/>
				<h2>Chirag Thesia </h2>
			</div>
		</Fragment>
	);
}

export default ChiragQRGenerator;
