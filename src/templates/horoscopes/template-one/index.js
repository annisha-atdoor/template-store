import React from 'react';
import ReactDOM from 'react-dom/client';
import TemplateOne from './template-one';
import data from '../data/english.json'; 
import reportWebVitals from '../../../reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TemplateOne data={data} />
  </React.StrictMode>
);

reportWebVitals();
