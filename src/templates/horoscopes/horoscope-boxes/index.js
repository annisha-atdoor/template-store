import React from 'react';
import HoroscopeBoxes from './horoscope-boxes.js'; // Adjust the path if necessary
import { defaultTheme, templateTwoTheme, templateThreeTheme } from './horoscope.styled'; // Adjust the path if necessary

const getTheme = (template) => {
  switch (template) {
    case 'templateTwo':
      return templateTwoTheme;
    case 'templateThree':
      return templateThreeTheme;
    default:
      return defaultTheme;
  }
};

const App = () => {
  const selectedTemplate = 'templateTwo';
  const theme = getTheme(selectedTemplate);

  return (
    <div>
      <HoroscopeBoxes theme={theme} />
    </div>
  );
};

export default App;