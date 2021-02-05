import React from 'react';
import QRCode from 'qrcode.react';
import './chiragQr.css';

function ChiragQRGenerator() {
	const qrObject = {
		src: 'none',
		x: null,
		y: null,
		excavate: false
	};

	return (
		<div className="Chirag-QR">
			<QRCode
				value="Chirag Thesia"
				includeMargin={true}
				size={200}
				imageSettings={qrObject}
			/>
			<h2>Chirag Thesia </h2>
		</div>
	);
}

export default ChiragQRGenerator;
