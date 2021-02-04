const { app, BrowserWindow, Tray, nativeImage } = require('electron');
const path = require('path');

let tray, window;

function createWindow() {
	window = new BrowserWindow({
		width: 800,
		height: 600,
		show: true,
		frame: true,
		fullscreen: false,
		resizable: true,
		transparent: false,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	});
	window.on('closed', () => {
		window = null;
	});

	// and load the index.html of the app.
	window.loadURL('http://localhost:3000');

	//window.webContents.openDevTools();
}

const createTray = () => {
	const icon = path.join(__dirname, 'assets/crypto.png');
	const newImage = nativeImage.createFromPath(icon);
	tray = new Tray(newImage);
	tray.on('click', (event) => {
		window.isVisible() ? window.hide() : showWindow();
	});
};

const showWindow = () => {
	const position = windowPosition();
	window.setPosition(position.x, position.y);
	window.show();
};

const windowPosition = () => {
	const windowBounds = window.getBounds();
	const trayBounds = tray.getBounds();

	const x = Math.round(trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2);
	const y = Math.round(trayBounds.y + trayBounds.height);

	return { x, y };
};

app.whenReady().then(() => {
	createTray();
	createWindow();

	app.on('activate', function() {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});
app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') app.quit();
});
