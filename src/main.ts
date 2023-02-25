import { app, BrowserWindow } from 'electron';

console.log(`Hello from Electron`);

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 800,
        height: 640,
        center: true,
    });
    console.log(`App is ready`);
    win.loadFile("index.html");
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})