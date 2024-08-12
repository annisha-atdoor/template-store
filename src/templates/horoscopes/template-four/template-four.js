import React from 'react';
import logoImage from './images/logo.svg';

import { Container} from './template-four.styled';
import './template-four.css';
import HoroscopeBoxes from '../horoscope-boxes/horoscope-boxes';
import '../horoscope-boxes/horoscope-boxes.css';

const formatHeight = (height) => {
    const [feet, inches] = height.split('.');
    return `${feet}'${inches}"`;
  };
  

const HoroscopeFour = ({
    birthDetails,
    horoscopeDetails,
    familyDetails,
    contactDetails,
    personalInfo,
    ownHouse,
    qualification,
    occupation,
    residentialAddress
  })=> {

  return (
    <Container className="a4-t4">
    <div className="background-image-t4">
    <div className="inner-border-t4">
    <div className="main-header-t4">
    <div className="top-heading-t4">
    <div className="heading-container-t4">
              <div className="heading-t4">
                <img src={logoImage} alt="Canvas Logo" className="logo-image-t4" />
                Sri Pachaivaiyamman Thunai
              </div>
              </div>
            <div className="sub-heading-t4">
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </div>
            <div className='third-heading-t4'>
           <h3><strong><u>Janma Pathrika</u></strong></h3> 
            </div>
            <div>
            <p>
            Born in the auspicious Veguthanya year, in the month of Aadi, on the 4th date, which corresponds to the 20th of July, 1998 (Monday), during the Shukla Paksha, on the Thuvadasi tithi. The exact birth time was
            at 1:56 AM, with 44 Naaligai and 00 Vinaadi elapsed. The individual was born under
            the Rohini nakshatra, in the Taurus (Rishaba) rasi, specifically the 4th pada. The
            ascendant (lagna) at the time of birth was Libra (Thulam). The place of birth is
            Thindukal (Dindigul)  Mr <b><span>{familyDetails.fatherName}- Mrs.{familyDetails.motherName}</span></b> For Them. Kumaran  <b><span className="dotted-underline-t4">{personalInfo.name}</span></b> suba jananam.
          </p>
       </div>
       <hr className="table-divider-t4" />
       <div className="mid-heading-t4">
          <h3><span className="blue-text-t4">Mars </span> <span className="brown-text-t4">Dasa Balance : 6months</span></h3>
      </div>
      <HoroscopeBoxes />   
      <div className="third-t4">
        <p>Name- {personalInfo.name}</p>
          <p>Gothram -{horoscopeDetails.gothram} </p>
          <p>Madhulam -{horoscopeDetails.mathulam}</p>
       </div>
       <div className="family-details-t4">
  <div className="family-detail-left-t4">
    <table>
      <tbody>
        <tr>
          <th><b>Father</b> :</th>
          <td>{familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}</td>
        </tr>
        <tr>
          <th><b>Height</b> :</th>
          <td>{formatHeight(familyDetails.height)}</td>
        </tr>
        <tr>
          <th><b>Blood Group</b> :</th>
          <td>{personalInfo.bloodGroup}</td>
        </tr>
        <tr>
          <th><b>Complexion</b> :</th>
          <td>{personalInfo.complextion}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="family-detail-right-t4">
    <table>
      <tbody>
        <tr>
          <th><b>Brother</b> :</th>
          <td>{familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})</td>
        </tr>
        <tr>
          <th><b>Education</b> :</th>
          <td>{qualification.Education}</td>
        </tr>
        <tr>
          <th><b>Profession</b> :</th>
          <td>{personalInfo.Profession}</td>
        </tr>
        <tr>
          <th><b>Income</b> :</th>
          <td>{occupation.Income}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div className="address-container-t4">
  <h5>Address</h5>
  </div>
       <div className="residential-address-t4">
        <p className="address-t4">
        {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}
        </p>
     </div>
         <div className="contact-details-t4">
          <p className="address1-t4">
            &nbsp;&nbsp;&nbsp;&nbsp;Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}
          </p>
        </div>
       </div>
       </div>
        </div>
      </div>
    </Container>
  );
};

export default HoroscopeFour;
