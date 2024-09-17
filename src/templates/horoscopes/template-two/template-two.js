import React from 'react';
import {
  T2A4Container,
  T2InnerBorder,
  T2MainHeader,
  T2TableCell,
  T2TableRow,
  T2PersonalDetailTable,
  T2DetailsContainer,
  T2Four,
  T2Three,
  T2Heading,
  T2LogoImage,
  T2SubHeading,
  T2PersonalDetailLeft,
  T2PersonalDetailRight,
  T2Divider,
  T2FamilyDetailsContainer,
  T2Address,
  T2ResidentialAddress,
  T2SecHeading,
  T2ContactDetails,
  DistrictContainer,
  District,
  FamilyInfo,
  Name,
  HorizontalRule,
  DasaBalanceContainer,
  DasaBalanceText,
  T2Dividers,
  StyledParagraph
} from './template-two.styled';
import image from './images/img1.svg';
import images from './images/logo.svg';
import HoroscopeBoxes from "../horoscope-boxes/horoscope-boxes.js";
import './template-two.css';
import '../horoscope-boxes/horoscope-boxes.css';

const formatHeight = (height) => {
  const [feet, inches] = height.split('.');
  return `${feet}'${inches}"`;
};

const getName = (selectedGender) => {
  return selectedGender === 'male' ? 'Sri Math Punya Kumara Selvan' : 'Sri Math Punya Kumari Selvi';
}

const HoroscopeTwo = ({
  selectedGender,
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
    <T2A4Container>
      <T2InnerBorder>
        <T2MainHeader>
            <T2Heading>
             <T2LogoImage src={images} alt="Canvas Logo" />
           </T2Heading>
           <T2SecHeading>
                 Sri Pachaivaiyamman Thunai
           </T2SecHeading>
          <T2SubHeading>
            Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
            Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
          </T2SubHeading>
        </T2MainHeader>
        <T2DetailsContainer>
         <T2PersonalDetailLeft>
         <T2PersonalDetailTable>
        <tbody>
          <T2TableRow>
            <th>Date of Birth</th>
            <T2TableCell>{birthDetails.dob.dateOfBirth}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Tamil Year</th>
            <T2TableCell>{birthDetails.tamilYear}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Tamil Month</th>
            <T2TableCell>{birthDetails.tamilMonth}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Tamil Date</th>
            <T2TableCell>{birthDetails.tamilDate}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Day</th>
            <T2TableCell>{birthDetails.dob.day}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Birth Time</th>
            <T2TableCell>{birthDetails.dob.time}</T2TableCell>
          </T2TableRow>
        </tbody>
      </T2PersonalDetailTable>
    </T2PersonalDetailLeft>
    <T2PersonalDetailRight>
      <T2PersonalDetailTable>
        <tbody>
          <T2TableRow>
            <th>Naaligai</th>
            <T2TableCell>{horoscopeDetails.naaligai}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Birth Star</th>
            <T2TableCell>{horoscopeDetails.BirthStar}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Rasi</th>
            <T2TableCell>{horoscopeDetails.rasi}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Thithi</th>
            <T2TableCell>{horoscopeDetails.thithi}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Lagnam</th>
            <T2TableCell>{horoscopeDetails.lagnam}</T2TableCell>
          </T2TableRow>
          <T2TableRow>
            <th>Place Of Birth</th>
            <T2TableCell>{birthDetails.dob.placeOfBirth}</T2TableCell>
          </T2TableRow>
        </tbody>
      </T2PersonalDetailTable>
    </T2PersonalDetailRight>
  </T2DetailsContainer>
        <T2Divider />
        <DistrictContainer>
          <District>Thirunelveli District</District>
         <FamilyInfo>S/o Late <b>Mr. Ponmani - Mrs. Porselvi</b></FamilyInfo>
         <Name> <span>{getName(selectedGender)}.</span><b> Kamalesh P</b></Name>
         <HorizontalRule />
       </DistrictContainer>
    <DasaBalanceContainer>
 <DasaBalanceText>
    <span>Mars</span>
    <span>Dasa Balance : 6 months</span>
  </DasaBalanceText>
        </DasaBalanceContainer>
        <HoroscopeBoxes/>
        <T2Three>
          <h3>Namadhayam : Kamalesh . P</h3>
        </T2Three>
      <T2Four>
          <p>Gothram : Shiva Gothram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Madhulam : dfdfdsa</p>
        </T2Four>
        <T2Divider/>
        <T2FamilyDetailsContainer>
        <div>
        <table>
         <tbody>
        <T2TableRow>
          <th><b>Father</b> :</th>
          <T2TableCell> {familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}</T2TableCell>
        </T2TableRow>
        <T2TableRow>
          <th><b>Height</b> : </th>
          <T2TableCell>{formatHeight(familyDetails.height)}</T2TableCell>
        </T2TableRow>
        <T2TableRow>
          <th><b>Blood Group</b> :</th>
          <T2TableCell> {personalInfo.bloodGroup}</T2TableCell>
        </T2TableRow>
        <T2TableRow>
          <th><b>Complexion</b> : </th>
          <T2TableCell>{personalInfo.complextion}</T2TableCell>
        </T2TableRow>
      </tbody>
    </table>
  </div>
  <div>
    <table>
      <tbody>
        <T2TableRow>
          <th><b>Brother</b>  : </th>
          <T2TableCell> {familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})</T2TableCell>
        </T2TableRow>
        <T2TableRow>
          <th><b>Education</b> : </th>
          <T2TableCell>{qualification.Education}</T2TableCell>
        </T2TableRow>
        <T2TableRow>
          <th><b>Profession</b> :</th>
          <T2TableCell> {personalInfo.Profession}</T2TableCell>
        </T2TableRow>
        <T2TableRow>
          <th><b>Income</b> : </th>
          <T2TableCell>{occupation.Income}</T2TableCell>
        </T2TableRow>
      </tbody>
    </table>
  </div>
       </T2FamilyDetailsContainer>
      </T2InnerBorder>
      <T2Dividers/>
      <T2Address>Address</T2Address>
      <StyledParagraph>
          {personalInfo.name}.{qualification.Education}.{qualification.fieldOfStudy}.({personalInfo.Profession})
        </StyledParagraph>
      <T2ResidentialAddress>
         {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}
      </T2ResidentialAddress>
      <T2ContactDetails>
        Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}
      </T2ContactDetails>
    </T2A4Container>
  );
};

export default HoroscopeTwo;