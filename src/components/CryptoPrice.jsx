import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

function CryptoPrice({ crypto, cryptoImg }) {
	const [ cryptoName, setCryptoName ] = useState(' ');
	const [ cryptoPrice, setCryptoPrice ] = useState(' ');

	useEffect(
		() => {
			axios
				.get(`http://localhost:8080/crypto/getCryptoPrice?crypto=${crypto}`)
				.then((res) => {
					const cryptoName = `${res.data.name}-USD`;
					const cPrice = `$ ${res.data.price}`;
					setCryptoName(cryptoName);
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
		height: 50,
		width: 50,
		excavate: true
	};

	return (
		<Fragment>
			<div>
				<QRCode
					value={cryptoName}
					includeMargin={true}
					renderAs={'svg'}
					size={300}
					imageSettings={qrObject}
				/>
				<h2>{cryptoName}</h2>
				<h3>{cryptoPrice}</h3>
			</div>
		</Fragment>
	);
}

export default CryptoPrice;
