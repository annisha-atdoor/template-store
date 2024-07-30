import React, { useEffect, useState } from "react";
import "./App.css";
import englishData from "./data/english.json";
import tamilData from "./data/tamil.json";
import imageEnabled from "./images/enabled-bg.svg";
import leftimage from "./images/left-image.svg";
import images from "./images/logo.svg";
import TemplateOne from "./templates/horoscopes/template-one/template-one";
import TemplateThree from "./templates/horoscopes/template-three/template-three";
import TemplateTwo from "./templates/horoscopes/template-two/template-two";

const App = () => {
  const [language, setLanguage] = useState("english");
  const [selectedTemplate, setSelectedTemplate] = useState("template-one");
  const [isEnabled, setIsEnabled] = useState(true);
  const [data, setData] = useState(englishData);

  useEffect(() => {
    setData(language === "english" ? englishData : tamilData);
  }, [language]);

  const handleRadioChange = (event) => {
    setIsEnabled(event.target.value === "enable");
  };

  return (
    <div>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="english">English</option>
        <option value="tamil">Tamil</option>
      </select>
      <select
        onChange={(e) => setSelectedTemplate(e.target.value)}
        value={language}
      >
        <option value="template-one">One</option>
        <option value="template-two">Two</option>
        <option value="template-three">Three</option>
        <option value="template-four">Four</option>
        <option value="template-five">Five</option>
      </select>
      <p>{selectedTemplate}</p>
      {selectedTemplate === "template-one" && <TemplateOne />}
      {selectedTemplate === "template-two" && <TemplateTwo />}
      {selectedTemplate === "template-three" && <TemplateThree />}
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
        <div
          style={{ backgroundImage: `url(${isEnabled ? imageEnabled : ""})` }}
        >
          <img
            src={images}
            alt="Canvas Logo"
            width="3%"
            className="logo-image"
          />
          <img
            src={leftimage}
            alt="Canvas Logo"
            width="3%"
            className="left-image"
          />
          {/* <Horoscope
            data={data}
            isEnabled={isEnabled}
            imageSrc={imageBetweenTables}
          /> */}
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
