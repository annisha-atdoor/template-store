import React from 'react';
import HoroscopeFour from './template-four';
import data from '../data/english.json'; 
import './template-four.css';

const Index = () => {
  return (
    <HoroscopeFour
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