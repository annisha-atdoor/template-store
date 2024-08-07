import React from 'react';
import HoroscopeOne from './template-one';
import data from '../data/english.json'; 
import './template-one.css';

const Index = () => {
  return (
    <HoroscopeOne
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