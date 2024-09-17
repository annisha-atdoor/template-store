import React from 'react';
import HoroscopeThree from './template-three';
import data from '../data/english.json'; 
import './template-three.css';

const IndexThree = () => {
  return (
    <HoroscopeThree
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

export default IndexThree;