import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { registerSW } from "virtual:pwa-register";
import { updateMessage,checkPWA } from './PWA-Helpers/pwa.js';

checkPWA();

const updateSW = registerSW({
  async onNeedRefresh() {
    await updateSW(await updateMessage())
  },
  onOfflineReady() {
    console.log("offline ready");
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
