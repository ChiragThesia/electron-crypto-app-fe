import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import './qr.css';

function CryptoPrice({ crypto, cryptoImg }) {
	const [ cryptoName, setCryptoName ] = useState(' ');
	const [ cryptoPrice, setCryptoPrice ] = useState(' ');

	useEffect(
		() => {
			axios
				.get(`http://localhost:8080/crypto/getCryptoPrice?crypto=${crypto}`)
				.then((res) => {
					const cPrice = `$ ${res.data.price}`;
					console.log(res.data.name);
					setCryptoName(res.data.name);
					setCryptoPrice(cPrice);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ crypto ]
	);

	const qrObject = {
		src: cryptoImg,
		x: null,
		y: null,
		height: 20,
		width: 20,
		excavate: true
	};

	return (
		<Fragment>
			<div className="QrCodes">
				<QRCode
					value={cryptoName}
					includeMargin={true}
					size={200}
					imageSettings={qrObject}
				/>
				<h2>{cryptoName}</h2>
				<h3>{cryptoPrice}</h3>
			</div>
		</Fragment>
	);
}

export default CryptoPrice;
