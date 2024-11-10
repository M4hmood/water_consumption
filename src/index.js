import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sidebar from './components/sidebar/sidebar';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0QXxbf1x0ZFxMZVlbRXRPMyBoS35RckVnWHheeXFQR2JdUUBx");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <App />
  </React.StrictMode>
);
