import React, { useState } from 'react';
import logoImage from './images/logo.svg';
import HoroscopeBoxes from "../horoscope-boxes/horoscope-boxes.js";
import {
  MainContainer,
  Header,
} from './template-three.styled'; 
import './template-three.css'; 

const formatHeight = (height) => {
  const [feet, inches] = height.split('.');
  return `${feet}'${inches}"`;
};

const HoroscopeThree = ({

  birthDetails,
  horoscopeDetails,
  familyDetails,
  contactDetails,
  personalInfo,
  ownHouse,
  qualification,
  occupation,
  residentialAddress
}) => {
  const [selectedGender, setSelectedGender] = useState('male');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <MainContainer className="a4-t3">
      <Header className="inner-border">
        <div className="main-header-t3">
          <div className="top-heading-t3">
            <div className="heading-container-t3">
            <div className="heading-t3">
                <img src={logoImage} alt="Canvas Logo" className="logo-image-t3" />
                Subamasthu<br/>
                Sri Vasavi Sagayam
              </div>
            </div>
            <div className="sub-heading-t3">
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </div>
          </div>
          <div className="details-container-t3">
            <div className="personal-detail-left-t3">
              <table>
                <tbody className='personal-t3'>
                  <tr >
                    <th scope="row">Date of Birth : </th>
                    <td className="dotted-row">{birthDetails.dob.dateOfBirth}</td>
                  </tr>
                  <tr >
                    <th scope="row" >Tamil Year</th>
                    <td className="dotted-row">{birthDetails.tamilYear}</td>
                  </tr>
                  <tr >
                    <th scope="row">Tamil Month</th>
                    <td className="dotted-row">{birthDetails.tamilMonth}</td>
                  </tr>
                  <tr>
                    <th scope="row" >Tamil Date</th>
                    <td className="dotted-row">{birthDetails.tamilDate}</td>
                  </tr>
                  <tr>
                    <th scope="row" >Day</th>
                    <td className="dotted-row">{birthDetails.dob.day}</td>
                  </tr>
                  <tr>
                    <th scope="row" >Birth Time</th>
                    <td className="dotted-row">{birthDetails.dob.time}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="personal-detail-right.t3">
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Naaligai</th>
                    <td className="dotted-row">{horoscopeDetails.naaligai}</td>
                  </tr>
                  <tr>
                    <th scope="row">Birth Star</th>
                    <td className="dotted-row">{horoscopeDetails.BirthStar}</td>
                  </tr>
                  <tr>
                    <th scope="row">Rasi</th>
                    <td className="dotted-row">{horoscopeDetails.rasi}</td>
                  </tr>
                  <tr>
                    <th scope="row">Thithi</th>
                    <td className="dotted-row">{horoscopeDetails.thithi}</td>
                  </tr>
                  <tr >
                    <th scope="row">Lagnam</th>
                    <td className="dotted-row">{horoscopeDetails.lagnam}</td>
                  </tr>
                  <tr>
                    <th scope="row">Place Of Birth</th>
                    <td className="dotted-row">{birthDetails.dob.placeOfBirth}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="additional-data-t3">
          <p className='t3-additional-data'>
          Mr <b><span className="dotted-underline">{familyDetails.fatherName}- Mrs.{familyDetails.motherName}</span></b> For Them   Kumaran.
        </p>
        </div>
        <div className="second-name-t3">
        <p className="name-t3">
          <b><span className="dotted-underline">{personalInfo.name}</span></b> Mars Dasa balance - <b><span className="dotted-underline">{horoscopeDetails.dasaBalance}</span></b>.
        </p>
      </div>
        <HoroscopeBoxes />

      <div className="third-t3">
          <p className='t3-third'>Gothram : Shiva Gothram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Madhulam : dfdfdsa</p>
      </div>
        <div className="divider-t3"></div>
        <div className="family-details-t3">
          <div className="family-detail left-t3">
            <table>
              <tbody>
                <tr>
                    <th> <b>Father</b> :</th>
                  <td  className="dotted-row">
                    {familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}
                  </td>
                </tr>
                <tr>
                    <th><b>Height</b> :</th>
                  <td  className="dotted-row"> {formatHeight(familyDetails.height)}</td>
                </tr>
                <tr>
                    <th><b>Blood Group</b> :</th>
                  <td className="dotted-row"> {personalInfo.bloodGroup}</td>
                </tr>
                <tr>
                    <th><b>Complexion</b> : </th>
                  <td className="dotted-row">{personalInfo.complextion}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="family-detail right-t3">
            <table>
              <tbody>
                <tr>
                    <th> <b>Brother</b>  :</th>
                  <td className="dotted-row"> {familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})
                  </td>
                </tr>
                <tr>
                    <th><b>Education</b> :</th>
                  <td className="dotted-row"> {qualification.Education}</td>
                </tr>
                <tr>
                    <th><b>Profession</b> :</th>
                  <td className="dotted-row">{personalInfo.Profession}</td>
                </tr>
                <tr>
                    <th><b>Income</b> : </th>
                  <td className="dotted-row">{occupation.Income}</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>

      <div className="divider2-t3"></div>
    <div className="address-t3">
        Address
      </div>
      <div className='below-heading-t3'>
      <div className='name-t3'>
      <p>{personalInfo.name}.{qualification.Education}.{qualification.fieldOfStudy}.({personalInfo.Profession})</p>
      </div>
      <div className="residential-address-t3">
        <p className="address-t3"> {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}</p>
      </div>
      <div className="contact-details-t3">
        <p className="address-t3">&nbsp;&nbsp;&nbsp;&nbsp;Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}</p>
      </div> 
      </div>
      </Header>
    </MainContainer>
  );
};

export default HoroscopeThree;
