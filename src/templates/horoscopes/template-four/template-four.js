import React from 'react';
import { 
  T4Container, 
  MainContainer,
  Header,
  HeadingText,
  LineText,
  SubHeadingText,
  LogoImage,
  T4Third, 
  T4FamilyDetails, 
  T4FamilyDetail, 
  T4AddressContainer, 
  T4ResidentialAddress, 
  T4ContactDetails, 
  T4BoldText,
  T4thirdheading,
  TableDivider,
  Paragraph,
  MidHeading,
  T4Address,
  EmailAddress
} from './template-four.styled';
import StyledHoroscopeBoxes from '../horoscope-boxes/horoscope-boxes';
import '../horoscope-boxes/horoscope-boxes.css';
import logoImage from './images/logo.svg';
import './template-four.css';



const formatHeight = (height) => {
  const [feet, inches] = height.split('.');
  return `${feet}'${inches}"`;
};

const HoroscopeFour= ({
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
    <T4Container>
     <MainContainer className='backgroundImage'>
      <Header>
        <HeadingText>
            <LogoImage src={logoImage} alt="Canvas Logo" /> 
          </HeadingText>
        <LineText>
        Vasavi Sahayam
       <br/> Angala Parameshwari Amman Thunai
      </LineText>
          <SubHeadingText>
            Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
            Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
          </SubHeadingText>
        </Header>
        <T4thirdheading>
        <div className='third-heading'>
           <h3><strong><u>Janma Pathrika</u></strong></h3> 
            </div>
           </T4thirdheading>
           <Paragraph>
            <div>
            <p>
            Born in the auspicious Veguthanya year, in the month of Aadi, on the 4th date, which corresponds to the 20th of July, 1998 (Monday), during the Shukla Paksha, on the Thuvadasi tithi. The exact birth time was
            at 1:56 AM, with 44 Naaligai and 00 Vinaadi elapsed. The individual was born under
            the Rohini nakshatra, in the Taurus (Rishaba) rasi, specifically the 4th pada. The
            ascendant (lagna) at the time of birth was Libra (Thulam). The place of birth is
            Thindukal (Dindigul)  Mr <b><span>{familyDetails.fatherName}- Mrs.{familyDetails.motherName}</span></b> For Them.{selectedGender === 'male' ? 'Kumaran' : 'Kumari'}   <b><span className="dotted-underline">{personalInfo.name}</span></b> suba jananam.
          </p>
       </div>
       </Paragraph>
        <TableDivider/>
        <MidHeading>
          <div className="mid-heading">
          <h3>Mars <span>Dasa Balance : 6months</span></h3>
           </div>
          </MidHeading>
            <StyledHoroscopeBoxes/> 
            <T4Third>
              <p>Name: {personalInfo.name}</p>
              <p>Gothram: {horoscopeDetails.gothram}</p>
              <p>Madhulam: {horoscopeDetails.mathulam}</p>
            </T4Third>
            <T4FamilyDetails>
      <div className="family-details">
        <div className="family-detail left">
          <table className='tablet4'>
            <tbody className='tbodyt4'>
              <tr className='trt4'>
                <th className='rowt4'><b>Father</b> :</th>
                <td className='columnt4'>{familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}</td>
              </tr>
              <tr className='trt4'>
                <th className='rowt4'><b>Height</b> :</th>
                <td className='columnt4'>{formatHeight(familyDetails.height)}</td>
              </tr>
              <tr className='trt4'>
                <th  className='rowt4'><b>Blood Group</b> :</th>
                <td className='columnt4'>{personalInfo.bloodGroup}</td>
              </tr>
              <tr className='trt4'>
                <th  className='rowt4'><b>Complexion</b> :</th>
                <td className='columnt4'>{personalInfo.complextion}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="family-detail right">
          <table className='tablet4'>
            <tbody className='tbodyt4'>
              <tr className='trt4'>
                <th  className='rowt4'><b>Brother</b> :</th>
                <td className='columnt4'>{familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})</td>
              </tr>
              <tr className='trt4'>
                <th  className='rowt4'><b>Education</b> :</th>
                <td className='columnt4'>{qualification.Education}</td>
              </tr>
              <tr className='trt4'>
                <th  className='rowt4'><b>Profession</b> :</th>
                <td className='columnt4'>{personalInfo.Profession}</td>
              </tr>
              <tr className='trt4'>
                <th  className='rowt4'><b>Income</b> :</th>
                <td className='columnt4'>{occupation.Income}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </T4FamilyDetails>
            <T4AddressContainer>
              <T4ResidentialAddress>
                <h4>Address</h4>
              </T4ResidentialAddress>
              <T4Address>
              {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}
           </T4Address>
            </T4AddressContainer>
            <T4ContactDetails>
                &nbsp;&nbsp;&nbsp;&nbsp;Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}
            </T4ContactDetails>
            <EmailAddress>
               Email: {contactDetails.emailId}
            </EmailAddress>
          </MainContainer>
      </T4Container>
    );
  };
  export default HoroscopeFour;
