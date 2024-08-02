import React, { useState } from 'react';
import './templates/horoscopes/template-one/index.js'
import data from './data/english.json';
import DataTable from './templates/horoscopes/template-one/template-one.styled.js';
const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('template-one');

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="template-select">Select Template:</label>
        <select id="template-select" value={selectedTemplate} onChange={handleTemplateChange}>
          <option value="template-one">Template One</option>
        </select>
      </div>
      <DataTable selectedTemplate={selectedTemplate} data={data} />
    </div>
  );
};

export default App;
