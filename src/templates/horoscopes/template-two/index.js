import React from 'react';
import HoroscopeTwo from './template-two';
import data from '../data/english.json'; 
import './template-two.css';
import './template-two.styled'; 

const IndexTwo = () => {
  return (
    <HoroscopeTwo
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
export default IndexTwo;