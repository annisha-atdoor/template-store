import React, { useState, useEffect } from 'react';
import englishData from './data/english.json';
import tamilData from './data/tamil.json';
import Horoscope from './Horoscope';
import images from './images/logo.svg';
import leftimage from './images/left-image.svg';
import imageBetweenTables from './images/imageBetweenTables.svg';
import imageEnabled from './images/enabled-bg.svg';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('english');
  const [isEnabled, setIsEnabled] = useState(true);
  const [data, setData] = useState(englishData);

  useEffect(() => {
    setData(language === 'english' ? englishData : tamilData);
  }, [language]);

  const handleRadioChange = (event) => {
    setIsEnabled(event.target.value === 'enable');
  };

  return (
    <div>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="english">English</option>
        <option value="tamil">Tamil</option>
      </select>
      <div>
        <input
          type="radio"
          name="bg-toggle"
          id="enable"
          value="enable"
          checked={isEnabled}
          onChange={handleRadioChange}
        />
        <label htmlFor="enable">Enable</label>
        <input
          type="radio"
          name="bg-toggle"
          id="disable"
          value="disable"
          checked={!isEnabled}
          onChange={handleRadioChange}
        />
        <label htmlFor="disable">Disable</label>
      </div>
      <div className="a4">
        <div style={{ backgroundImage: `url(${isEnabled ? imageEnabled : ''})` }}>
          <img src={images} alt="Canvas Logo" width="3%" className="logo-image" />
          <img src={leftimage} alt="Canvas Logo" width="3%" className="left-image" />
          <Horoscope data={data} isEnabled={isEnabled} imageSrc={imageBetweenTables} />
          <div className="container">
        <div className="container-body"></div>
        <br />
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
