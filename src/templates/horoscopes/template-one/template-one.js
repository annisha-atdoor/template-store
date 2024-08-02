import React from 'react';
import HoroscopeBoxes from "../horoscope-boxes/horoscope-boxes.js";
import './template-one.styled';
import images from './images/logo.svg';
import './template-one.css'; 
import '../horoscope-boxes/horoscope-boxes.css';
import data from '../data/english.json'; 

const formatHeight = (height) => {
  const [feet, inches] = height.split('.');
  return `${feet}'${inches}"`;
};

const TemplateOne = ({
  birthDetails = data.birthDetails, 
  horoscopeDetails = data.horoscopeDetails, 
  familyDetails = data.familyDetails, 
  contactDetails = data.contactDetails, 
  personalInfo = data.personalInfo, 
  ownHouse = data.ownHouse, 
  qualification = data.qualification, 
  occupation = data.occupation, 
  residentialAddress = data.residentialAddress
}) => {
  return (
    <div className="a4-template-one">
      <div className="background-image-template-one">
        <div className="main-header-template-one">
          <div className="top-heading-template-one">
            <div className="heading-template-one">
              <img src={images} alt="Canvas Logo" className="logo-image-template-one" />
              Vasavi Sahayam <br /> Angala Parameshwari Amman Thunai
            </div>
            <div className="sub-heading-template-one">
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </div>
          </div>
          <div className="personal-details-template-one">
            <table>
              <tbody className="table-template-one">
                <tr>
                  <th scope="row">Date of Birth</th>
                  <td>{birthDetails.dob.dateOfBirth}</td>
                  <th scope="row">Naaligai</th>
                  <td>{horoscopeDetails.naaligai}</td>
                </tr>
                <tr>
                  <th scope="row">TamilYear</th>
                  <td>{birthDetails.tamilYear}</td>
                  <th scope="row">Birth Star</th>
                  <td>{horoscopeDetails.BirthStar}</td>
                </tr>
                <tr>
                  <th scope="row">Tamil Month</th>
                  <td>{birthDetails.tamilMonth}</td>
                  <th scope="row">Rasi</th>
                  <td>{horoscopeDetails.rasi}</td>
                </tr>
                <tr>
                  <th scope="row">Tamil Date</th>
                  <td>{birthDetails.tamilDate}</td>
                  <th scope="row">Thithi</th>
                  <td>{horoscopeDetails.thithi}</td>
                </tr>
                <tr>
                  <th scope="row">Day</th>
                  <td>{birthDetails.dob.day}</td>
                  <th scope="row">Lagnam</th>
                  <td>{horoscopeDetails.lagnam}</td>
                </tr>
                <tr>
                  <th scope="row">Birth Time</th>
                  <td>{birthDetails.dob.time}</td>
                  <th scope="row">Place Of Birth</th>
                  <td>{birthDetails.dob.placeOfBirth}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="below-heading-template-one">
            S/o Late <b> Mr. Ponmani - Mrs. Porselvi</b>
          </div>
          <div className="second-name-template-one">
            <h3 className="name-template-one">Kumaran .<b> Kamalesh P</b></h3>
          </div>
          <div className="third-line-template-one">
            <h5>Gothram : Shiva Gothram &nbsp;&nbsp; Madhulam : dfdfdsa</h5>
          </div>
        </div>
        <HoroscopeBoxes />
        <div className="mid-heading-template-one">
          <h3><span className="blue-text">Mars </span> <span className="brown-text">Dasa Balance : 6months</span></h3>
        </div>
        <div className="family-details-template-one">
          <table className="family-table-template-one">
            <tbody>
              <tr>
                <td>
                  <b>Father</b> : {familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}
                </td>
                <td><b>Height</b>: {formatHeight(familyDetails.height)}</td>
                <td><b>Blood Group</b> : {personalInfo.bloodGroup}</td>
              </tr>
              <tr>
                <td>
                  <b>Brother</b> : {familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})
                </td>
                <td><b>Complextion</b> : {personalInfo.complextion}</td>
                <td><b>OwnHouse</b> : {ownHouse}</td>
              </tr>
              <tr>
                <td><b>Education</b>: {qualification.Education}</td>
                <td><b>Profession</b> : {personalInfo.Profession}</td>
                <td><b>Income</b> : {occupation.Income}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="residential-address-template-one">
          <p className="address-template-one">Address: {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}</p>
        </div>
        <div className="contact-details-template-one">
          <p className="address-template-one">Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}</p>
        </div>
        <div className="email-address-template-one">
          <p className="address-template-one">Email: {contactDetails.emailId}</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
