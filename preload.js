const {contextBridge} = require('electron');

contextBridge.exposeInMainWorld('expose', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
});
