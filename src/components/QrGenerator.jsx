import React from 'react';
import CryptoPrice from '../components/CryptoPrice';
import ChiragQr from '../components/ChiragQr';
import './qr.css';

const cryptoArray = [
	[ 'Tezos', 'https://drive.google.com/uc?id=1Ra9zLYhoiVkV0eKrqewfaSkm6Mkle2HE' ],
	[ 'Cardano', 'https://drive.google.com/uc?id=1quzvlQO2cop7OH0ZkM8_VSf96V0sGvbd' ],
	[ 'Burst', 'https://drive.google.com/uc?id=1Bhb6tkoT52ZfEKvDhQQebhTOdzoZPpd9' ]
];

function QrCode() {
	return (
		<div className="QrCode">
			<ChiragQr />
			{cryptoArray.map(([ crypto, cryptoIMGLink ]) => {
				return <CryptoPrice crypto={crypto} cryptoImg={cryptoIMGLink} />;
			})}
		</div>
	);
}

export default QrCode;
