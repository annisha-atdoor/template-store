import React from 'react';
import HoroscopeBoxes from '../horoscope-boxes/horoscope-boxes';
import '../horoscope-boxes/horoscope-boxes.css';
import logoImage from './images/logo.svg';
import { 
  Container, 
  InnerBorder, 
  MainHeader, 
  DetailsContainer, 
  Divider, 
  FamilyDetails, 
  Bottom,
  Heading,
  T3SubHeading,
  T3AdditionalData,
  Third,
  T3Divider,
  Address,
  T3Third,
  T3AdditionalDatas,
  T3Bottom,
  T3ResidentialAddress,
  T3ContactDetails


} from './template-three.styled';


const formatHeight = (height) => {
  const [feet, inches] = height.split('.');
  return `${feet}'${inches}"`;
};

const HoroscopeThree= ({
  birthDetails,
  horoscopeDetails,
  familyDetails,
  contactDetails,
  personalInfo,
  qualification,
  occupation,
  residentialAddress
}) => {
  return (
    <Container>
      <InnerBorder>
        <MainHeader>
            <div className="heading-container">
            <Heading>
                <img src={logoImage} alt="Canvas Logo" className="logo-image" />
                  <span className="unbold">  Subamasthu<br/>Sri Vasavi Sagayam</span>
             </Heading>
            <T3SubHeading>
                 <span className="unbold"> Janani Janma Sowkyanam Varathanee Kulasumbathaam</span><br/>
                    <span className="unbold">Padhavi Pooorva Punyanaam Likyathe Janma Pathrika</span> 
              </T3SubHeading>
          </div>
        </MainHeader>
        <DetailsContainer>
          <div className="personal-detail left">
            <table className='tablet3'>
              <tbody className='tbodyt3'>
                <tr className='trt3'>
                  <th className='rowt3'>Date of Birth : </th>
                  <td className='columnt3'>{birthDetails.dob.dateOfBirth}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'>Tamil Year</th>
                  <td className='columnt3'>{birthDetails.tamilYear}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'>Tamil Month</th>
                  <td className='columnt3'>{birthDetails.tamilMonth}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3' >Tamil Date</th>
                  <td className='columnt3'>{birthDetails.tamilDate}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'>Day</th>
                  <td className='columnt3'>{birthDetails.dob.day}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'>Birth Time</th>
                  <td className='columnt3'>{birthDetails.dob.time}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="personal-detail right">
            <table className='tablet3' >
              <tbody  className='tbodyt3'>
                <tr  className='trt3'>
                  <th className='rowt3'>Naaligai</th>
                  <td className='columnt3'>{horoscopeDetails.naaligai}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'>Birth Star</th>
                  <td className='columnt3'>{horoscopeDetails.BirthStar}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3' >Rasi</th>
                  <td className='columnt3'>{horoscopeDetails.rasi}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'>Thithi</th>
                  <td className='columnt3'>{horoscopeDetails.thithi}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'>Lagnam</th>
                  <td className='columnt3'>{horoscopeDetails.lagnam}</td>
                </tr>
                <tr  className='trt3'>
                  <th className='rowt3'>Place Of Birth</th>
                  <td className='columnt3'>{birthDetails.dob.placeOfBirth}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DetailsContainer>
        <T3AdditionalData>
        <div className="second-name">
            Mr <b><span className="dotted-underline">{familyDetails.fatherName}- Mrs.{familyDetails.motherName}</span></b> For Them Kumaran.
        </div>   
        </T3AdditionalData>
        <T3AdditionalDatas>
                     <b><span className="dotted-underline">{personalInfo.name}</span></b> Mars Dasa balance - <b><span className="dotted-underline">{horoscopeDetails.dasaBalance}</span></b>.
        </T3AdditionalDatas>
        <HoroscopeBoxes />
        <T3Third>
            <p>Gothram: Shiva Gothram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Madhulam: dfdfdsa</p>
        </T3Third>
        <Divider />
        <FamilyDetails>
          <div className="family-detail left">
            <table className='tablet3'>
              <tbody className='tbodyt3'>
                <tr className='trt3'>
                  <th className='rowt3'><b>Father</b> :</th>
                  <td className='columnt3'>{familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'><b>Height</b> :</th>
                  <td className='columnt3'>{formatHeight(familyDetails.height)}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'><b>Blood Group</b> :</th>
                  <td className='columnt3'>{personalInfo.bloodGroup}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'><b>Complexion</b> :</th>
                  <td className='columnt3'>{personalInfo.complextion}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="family-detail right">
            <table  className='tablet3'>
              <tbody  className='tbodyt3'>
                <tr className='trt3'>
                  <th className='rowt3'><b>Brother</b> :</th>
                  <td className='columnt3'>{familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'><b>Education</b> :</th>
                  <td className='columnt3'>{qualification.Education}</td>
                </tr>
                <tr className='trt3'>
                  <th className='rowt3'><b>Profession</b> :</th>
                  <td className='columnt3'>{personalInfo.Profession}</td>
                </tr>
                <tr className='trt3' >
                  <th className='rowt3'><b>Income</b> :</th>
                  <td className='columnt3'>{occupation.Income}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FamilyDetails>
      </InnerBorder>
      <T3Divider/>
      <Address>
      <div className="address">
        Address
      </div>
      </Address>
      <T3Bottom>
          {personalInfo.name}.{qualification.Education}.{qualification.fieldOfStudy}.({personalInfo.Profession})
      </T3Bottom>
        <T3ResidentialAddress>
        {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}
        </T3ResidentialAddress>
        <T3ContactDetails>
        Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}
        </T3ContactDetails>
    </Container>
  );
};

export default HoroscopeThree;
