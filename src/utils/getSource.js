import { desktopCapture, remote } from 'electron';
import { displayName } from 'qrcode.react';

async function getSource(display) {
	const allDisplay = remote.screen.getAllDisplays();
	const sources = await desktopCapture.getSources({
		types: [ 'screen' ],
		thumbnails: {
			width: displayName.width,
			height: displayName.height
		}
	});

	let source = sources.find((source) => source.display.id === display.id.toString());
	if (!source) {
		const index = allDisplay.findIndex(({ id }) => id === display.id);
		if (index !== -1) {
			source = sources[index];
		}
	}
	return source;
}

export default getSource();
