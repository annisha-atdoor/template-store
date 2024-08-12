import React from 'react';
import HoroscopeFive from './template-five';
import data from '../data/english.json'; 
import './template-five.css';

const Index = () => {
  return (
    <HoroscopeFive
      birthDetails={data.birthDetails}
      horoscopeDetails={data.horoscopeDetails}
      familyDetails={data.familyDetails}
      contactDetails={data.contactDetails}
      personalInfo={data.personalInfo}
      ownHouse={data.ownHouse}
      qualification={data.qualification}
      occupation={data.occupation}
      residentialAddress={data.residentialAddress}
    />
  );
};

export default Index;