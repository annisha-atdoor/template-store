import React from 'react';
import image from './images/img1.svg';
import './template-two.css';
import HoroscopeBoxes from "../horoscope-boxes/horoscope-boxes.js";
import './template-two.styled';
import images from './images/logo.svg';
import '../horoscope-boxes/horoscope-boxes.css';

const formatHeight = (height) => {
  const [feet, inches] = height.split('.');
  return `${feet}'${inches}"`;
};


const HoroscopeTwo = ({
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
    <div className="a4-t2">
      <div className="inner-border-t2">
        <div className="main-header-t2">
          <div className="top-heading-t2">
            <div className="heading-container-t2">
              <div className="corner-image-container-t2">
                <img src={image} alt="img1" className="corner-image-t2" />
              </div>
              <div className="heading-t2">
                <img src={images} alt="Canvas Logo" className="logo-image-t2" />
                Sri Pachaivaiyamman Thunai
              </div>
            </div>
            <div className="sub-heading-t2">
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </div>
          </div>
          <div className="details-container-t2">
            <div className="personal-detail-left-t2">
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Date of Birth</th>
                    <td>{birthDetails.dob.dateOfBirth}</td>
                  </tr>
                  <tr>
                    <th scope="row">Tamil Year</th>
                    <td>{birthDetails.tamilYear}</td>
                  </tr>
                  <tr>
                    <th scope="row">Tamil Month</th>
                    <td>{birthDetails.tamilMonth}</td>
                  </tr>
                  <tr>
                    <th scope="row">Tamil Date</th>
                    <td>{birthDetails.tamilDate}</td>
                  </tr>
                  <tr>
                    <th scope="row">Day</th>
                    <td>{birthDetails.dob.day}</td>
                  </tr>
                  <tr>
                    <th scope="row">Birth Time</th>
                    <td>{birthDetails.dob.time}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="personal-detail-right-t2">
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Naaligai</th>
                    <td>{horoscopeDetails.naaligai}</td>
                  </tr>
                  <tr>
                    <th scope="row">Birth Star</th>
                    <td>{horoscopeDetails.BirthStar}</td>
                  </tr>
                  <tr>
                    <th scope="row">Rasi</th>
                    <td>{horoscopeDetails.rasi}</td>
                  </tr>
                  <tr>
                    <th scope="row">Thithi</th>
                    <td>{horoscopeDetails.thithi}</td>
                  </tr>
                  <tr>
                    <th scope="row">Lagnam</th>
                    <td>{horoscopeDetails.lagnam}</td>
                  </tr>
                  <tr>
                    <th scope="row">Place Of Birth</th>
                    <td>{birthDetails.dob.placeOfBirth}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="divider1-t2"></div>
          <div className="below-heading-t2">
            Thirunelveli District
          </div>
          <div className="second-name-t2">
            S/o Late <b> Mr. Ponmani - Mrs. Porselvi</b>
          </div>
          <div className="third-line-t2">
            <p className="name"><b> Kamalesh P</b></p>
          </div>
          <hr className="table-divider-t2" />
        </div>
        <div className="mid-heading-t2">
          <h3><span className="blue-text-t2">Mars </span> <span className="brown-text-t2">Dasa Balance : 6months</span></h3>
        </div>
        <HoroscopeBoxes/>
        <div className="middle-t2">
          <h3>Namadhayam : Kamalesh . P</h3>
        </div>
        <div className="third-t2">
          <p>Gothram : Shiva Gothram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Madhulam : dfdfdsa</p>
        </div>
        <div className="divider-t2"></div>
        <div className="family-details-t2">
          <div className="family-detail left-t2">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Father</b> : {familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}
                  </td>
                </tr>
                <tr>
                  <td><b>Height</b> : {formatHeight(familyDetails.height)}</td>
                </tr>
                <tr>
                  <td><b>Blood Group</b> : {personalInfo.bloodGroup}</td>
                </tr>
                <tr>
                  <td><b>Complexion</b> : {personalInfo.complextion}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="family-detail right-t2">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Brother</b>  : {familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})
                  </td>
                </tr>
                <tr>
                  <td><b>Education</b> : {qualification.Education}</td>
                </tr>
                <tr>
                  <td><b>Profession</b> : {personalInfo.Profession}</td>
                </tr>
                <tr>
                  <td><b>Income</b> : {occupation.Income}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="divider2-t2"></div>
      <div className="address-t2">
        Address
      </div>
      <div className='name-t2'>
      <p>{personalInfo.name}.{qualification.Education}.{qualification.fieldOfStudy}.({personalInfo.Profession})</p>
      </div>
      <div className="residential-address-t2">
        <p className="address-t2"> {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}</p>
      </div>
      <div className="contact-details-t2">
        <p className="address-t2">&nbsp;&nbsp;&nbsp;&nbsp;Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}</p>
      </div> 
    </div>
  );
};

export default HoroscopeTwo;
