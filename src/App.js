import React, { useState } from 'react';
import TemplateOne from './templates/horoscopes/template-one/index.js';
import TemplateTwo from './templates/horoscopes/template-two/index.js';
import jsonData from './data/english.json'; 

const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'templateOne':
        return <TemplateOne {...jsonData} />;
      case 'templateTwo':
        return <TemplateTwo {...jsonData} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="template-dropdown">
        <label htmlFor="template-select">Choose a template: </label>
        <select id="template-select" onChange={handleTemplateChange} value={selectedTemplate}>
          <option value="">Select a template</option>
          <option value="templateOne">Template One</option>
          <option value="templateTwo">Template Two</option>
        </select>
      </div>

      {renderTemplate()}
    </div>
  );
};

export default App;