import React from 'react';
import {
  Container, InnerBorder
} from './template-five.styled';
import './template-five.css';
import logoImage from './images/logo.svg';
import HoroscopeBoxes from '../horoscope-boxes/horoscope-boxes';
import '../horoscope-boxes/horoscope-boxes.css';

const formatHeight = (height) => {
  const [feet, inches] = height.split('.');
  return `${feet}'${inches}"`;
};


const HoroscopeFive = ({
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
  return (
    <Container className='a4-t5'>
      <InnerBorder className="inner-border-t5">
      <div className="main-header-t5">
          <div className="top-heading-t5">
            <div className="heading-container-t5">
              <div className="heading-t5">
                <img src={logoImage} alt="Canvas Logo" className="logo-image-t5" />
                Subamasthu<br/>
                Sri Vasavi Sagayam
              </div>
            </div>
            <div className="sub-heading-t5">
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </div>
            <div className="family-details-t5">
            <div className="family-detail-left-t5">
              <table>
                <tbody>
                <hr className="divider-t5"></hr>
                  <tr>
                    <th scope="row">Date of Birth : </th>
                    <td>{birthDetails.dob.dateOfBirth}</td>
                  </tr>
                  <hr className="divider-t5"></hr>
                  <tr>
                    <th scope="row" >Tamil Year : </th>
                    <td>{birthDetails.tamilYear}</td>
                  </tr>
                  <hr className="divider-t5"></hr>
                  <tr>
                    <th scope="row">Tamil Month : </th>
                    <td>{birthDetails.tamilMonth}</td>
                  </tr>
                  <hr className="divider-t5"></hr>
                  <tr>
                    <th scope="row" >Tamil Date : </th>
                    <td>{birthDetails.tamilDate}</td>
                  </tr>
                  <hr className="divider-t5"></hr>
                  <tr>
                    <th scope="row" >Day : </th>
                    <td>{birthDetails.dob.day}</td>
                  </tr>
                  <hr className="divider-t5"></hr>
                  <tr>
                    <th scope="row" >Birth Time : </th>
                    <td>{birthDetails.dob.time}</td>
                  </tr>
                  <hr className="divider-t5"></hr>
                </tbody>
              </table>
            </div>
            <div className="family-detail-right-t5">
              <table>
                <tbody>
                <hr className="divider-one-t5"></hr>
                  <tr>
                    <th scope="row">Naaligai : </th>
                    <td>{horoscopeDetails.naaligai}</td>
                  </tr>
                  <hr className="divider-one-t5"></hr>
                  <tr>
                    <th scope="row">Birth Star : </th>
                    <td>{horoscopeDetails.BirthStar}</td>
                  </tr>
                  <hr className="divider-one-t5"></hr>
                  <tr>
                    <th scope="row">Rasi : </th>
                    <td>{horoscopeDetails.rasi}</td>
                  </tr>
                  <hr className="divider-one-t5"></hr>
                  <tr>
                    <th scope="row">Thithi : </th>
                    <td>{horoscopeDetails.thithi}</td>
                  </tr>
                  <hr className="divider-one-t5"></hr>
                  <tr>
                    <th scope="row">Lagnam : </th>
                    <td>{horoscopeDetails.lagnam}</td>
                  </tr>
                  <hr className="divider-one-t5"></hr>
                  <tr>
                    <th scope="row">Place Of Birth : </th>
                    <td>{birthDetails.dob.placeOfBirth}</td>
                  </tr>
                  <hr className="divider-one-t5"></hr>
                </tbody>
              </table>
            </div>
          </div>
         </div>

     <div className="additional-data-t5">
        <p className='name-t5'>
        <b> Mr <span >{familyDetails.fatherName}- Mrs.{familyDetails.motherName}</span></b>
        </p>
        <p className='name-one-t5'>
        For Them  Kumaran. <b><span >{personalInfo.name}</span></b>
        </p>
        <p className='name-two-t5'>
        Mars Dasa balance -<span>{horoscopeDetails.dasaBalance}</span>
        </p>
      </div>
      <HoroscopeBoxes/>
      <div>
      <div className='name-t5'>
      <p> Name:<b>{personalInfo.name}.{qualification.Education}</b></p>
      </div>
      <div className="family-details-t5">
     <div className="family-detail-left-t5">
    <table>
      <tbody>
      <hr className="divider-t5"></hr>
        <tr>
          <th><b>Father</b> :</th>
          <td>
            {familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}
          </td>
        </tr>
        <hr/>
        <tr>
          <th><b>Height</b> :</th>
          <td>{formatHeight(familyDetails.height)}</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Blood Group</b> :</th>
          <td>{personalInfo.bloodGroup}</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Complexion</b> :</th>
          <td>{personalInfo.complextion}</td>
        </tr>
        <hr className="divider-t5"></hr>
      </tbody>
    </table>
  </div>
  <div className="family-detail-right-t5">
    <table>
      <tbody>
      <hr className="divider-two-t5"></hr>
        <tr>
          <th><b>Brother</b> :</th>
          <td>{familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Education</b> :</th>
          <td >{qualification.Education}</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Profession</b> :</th>
          <td>{personalInfo.Profession}</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Income</b> :</th>
          <td>{occupation.Income}</td>
        </tr>
        <hr className="divider-two-t5"></hr>
      </tbody>
    </table>
          </div>
          </div>
        </div>
      </div>
      <div className="address-t5">
        Address
      </div>
      <div className='bottom-t5'>
        <div className='name-one-t5'>
          <p>{personalInfo.name}.{qualification.Education}.{qualification.fieldOfStudy}.({personalInfo.Profession})</p>
        </div>
        <div className="residential-address-t5">
          <p className="full-address-t5">{residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown} {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}</p>
        </div>
        <div className="contact-details-t5">
          <p className="phone-number-t5">&nbsp;&nbsp;&nbsp;&nbsp;Mobile: {contactDetails.contactNumber} &nbsp;&nbsp;&nbsp;&nbsp; WhatsApp Number: {contactDetails.whatsappNumber}</p>
        </div>
      </div>
      </InnerBorder>
    </Container>
  );
};

export default HoroscopeFive;
