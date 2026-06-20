// Preload — minimal, context-isolated. Exposes nothing sensitive for now;
// the app talks to the backend over plain HTTP same-origin. Kept so we have
// a safe place to add IPC bridges later without relaxing nodeIntegration.
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("mutationArena", {
  version: "0.1.0",
  isElectron: true,
});