import React from 'react';
import {
  Container, InnerBorder,HeadingOneT5, HeadingT5,SubHeadingT5,FamilyDetails,
  FamilyDetail,
  DottedRow,
  AdditionalDataT5,
  NameOneT5,
  NameTwoT5,
  AddressT5,
  ResidentialAddressT5,
  ContactDetailsT5,
  NamesT5,
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
    <Container>
      <InnerBorder>
        <div className="main-header-t5">
          <div className="top-heading-t5">
            <div className="heading-container-t5">
              <HeadingT5>
                <img src={logoImage} alt="Canvas Logo" className="logo-image-t5" />
                </HeadingT5>
               <HeadingOneT5>
              Subamasthu<br/>
              Sri Vasavi Sagayam
              </HeadingOneT5> 
            </div>
             <SubHeadingT5>
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </SubHeadingT5> 
            <FamilyDetails>
        <FamilyDetail className="left">
        <table className='tablet5'>
          <tbody className='tbody'>
            <DottedRow>
              <th className='row'>Date of Birth : </th>
              <td className='td'>{birthDetails.dob.dateOfBirth}</td>
            </DottedRow>
            <DottedRow>
              <th className='row'>Tamil Year : </th>
              <td className='td'>{birthDetails.tamilYear}</td>
            </DottedRow>
            <DottedRow>
              <th className='row'>Tamil Month : </th>
              <td className='td'>{birthDetails.tamilMonth}</td>
            </DottedRow>
            <DottedRow>
              <th className='row'>Tamil Date : </th>
              <td className='td'>{birthDetails.tamilDate}</td>
            </DottedRow>
            <DottedRow>
              <th className='row'>Day : </th>
              <td className='td'>{birthDetails.dob.day}</td>
            </DottedRow>
            <DottedRow>
              <th scope="row">Birth Time : </th>
              <td className='td'>{birthDetails.dob.time}</td>
            </DottedRow>
          </tbody>
        </table>
      </FamilyDetail>
      <FamilyDetail className="right">
        <table  className='tablet5'>
          <tbody className='tbody'>
            <DottedRow>
              <th className='row'>Naaligai : </th>
              <td className='td'>{horoscopeDetails.naaligai}</td>
            </DottedRow>
            <DottedRow>
              <th  className='row'>Birth Star : </th>
              <td className='td'>{horoscopeDetails.BirthStar}</td>
            </DottedRow>
            <DottedRow>
              <th  className='row'>Rasi : </th>
              <td className='td'>{horoscopeDetails.rasi}</td>
            </DottedRow>
            <DottedRow>
              <th  className='row'>Thithi : </th>
              <td className='td'>{horoscopeDetails.thithi}</td>
            </DottedRow>
            <DottedRow>
              <th  className='row'>Lagnam : </th>
              <td className='td'>{horoscopeDetails.lagnam}</td>
            </DottedRow>
            <DottedRow>
              <th className='row'>Place Of Birth : </th>
              <td className='td'>{birthDetails.dob.placeOfBirth}</td>
            </DottedRow>
          </tbody>
        </table>
      </FamilyDetail>
    </FamilyDetails>
          </div>
             <AdditionalDataT5>
              <b>Mr <span>{familyDetails.fatherName} - Mrs. {familyDetails.motherName}</span></b>
            </AdditionalDataT5>
            <NameOneT5>
            <span className="unbold">For Them Kumaran. </span>
             <span>{personalInfo.name}</span>
           </NameOneT5>
              <NameTwoT5>
              Mars Dasa balance - {horoscopeDetails.dasaBalance}
              </NameTwoT5> 
          <HoroscopeBoxes/> 
           <div>
            <div className="name-t5">
              Name : <b>{personalInfo.name}.{qualification.Education}</b>
            </div>
            <FamilyDetails>
        <FamilyDetail className="left">
        <table className='tablet5'>
          <tbody className='tbody'>
            <DottedRow>
            <th className='row'>Father : </th>
              <td className='td'>
                {familyDetails.fatherAlive} - Mother: {familyDetails.motherAlive}
              </td>
            </DottedRow>
            <DottedRow>
            <th className='row'> Height : </th>
            <td className="td">{formatHeight(familyDetails.height)}</td>
            </DottedRow>
            <DottedRow>
            <th className='row' >Blood Group : </th>
            <td className="td">{personalInfo.bloodGroup}</td>
            </DottedRow>
            <DottedRow>
            <th className='row'>Complexion : </th>
            <td className="td">{personalInfo.complextion}</td>
            </DottedRow>
          </tbody>
        </table>
      </FamilyDetail>
      <FamilyDetail className="right">
        <table  className='tablet5'>
          <tbody className='tbody'>
            <DottedRow>
            <th  className='row'>Brother : </th>
              <td className="td">
                {familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})
              </td>
              </DottedRow>
            <DottedRow>
            <th className='row'>Education : </th>
            <td className="td">{qualification.Education}</td>
            </DottedRow>
            <DottedRow>
            <th className='row'>Profession : </th>
            <td className="td">{personalInfo.Profession}</td>
            </DottedRow>
            <DottedRow>
            <th className='row'>Income : </th>
            <td className="td">{occupation.Income}</td>
            </DottedRow>
          </tbody>
        </table>
      </FamilyDetail>
    </FamilyDetails>
        </div> 
        </div>
         <AddressT5>
          Address
        </AddressT5>
          <NamesT5>
             {personalInfo.name}.{qualification.Education}.{qualification.fieldOfStudy}.({personalInfo.Profession})
          </NamesT5>
          <ResidentialAddressT5>
             {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown} {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}
            </ResidentialAddressT5>
           <ContactDetailsT5>
          Mobile: {contactDetails.contactNumber} &nbsp;&nbsp;&nbsp;&nbsp; WhatsApp Number: {contactDetails.whatsappNumber}
          </ContactDetailsT5>  
      </InnerBorder>
    </Container>
  );
};
export default HoroscopeFive;
