import styled from 'styled-components';
import backgroundImage from './images/enabled-bg.svg';

export const T4Container = styled.div`
  width: 214mm;
  height: 297mm;
  padding: -4%;
  margin: auto;
  box-shadow: 0 0 5mm rgba(0, 0, 0, 0.1);
  box-sizing: border-box; 
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

export const  T4thirdheading = styled.div`
  text-align: center;
  color: rgb(63, 111, 49);
  margin-top: -1%;
  margin-bottom: 0%;
`;

export const HeadingText = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #333;
`;
export const LogoImage = styled.img`
  display: block;
  margin-left: auto; 
  margin-right: auto;
  margin-bottom: 0px;
  width: 35px;
  margin-top: 0px;
  font size:10px;
  `;
  export const SubHeadingText = styled.div`
  font-size: 15px;
  color: brown;
 margin-top: 7px;
  color: rgb(63, 111, 49);
  `;
  export const LineText = styled.div`
  text-align: center;
   margin-top: -2%;
   font-size: 13px;
   color: rgb(63, 111, 49);
   `;
 
export const MainContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
`;


export const T4MainHeader = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const T4TopHeading = styled.div`
  font-size: 18px;
  color: #333;
`;

export const T4HeadingContainer = styled.div`
  margin: 10px 0;
`;

export const T4Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const T4LogoImage = styled.img`
 display: block;
  margin-left: auto; 
  margin-right: auto;
  margin-bottom: 0%;
  width: 35px;
  margin-top: -67px;
  width: 50px;
  height: auto;
  margin-left: auto;
`;

export const T4SubHeading = styled.div`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

export const T4ThirdHeading = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 15px;

  `;

export const Paragraph = styled.div`
p{
  font-size: 1em;
  margin-top: 3px;
  margin-bottom: -1px;
  margin-left: 87px;
  color: rgb(3, 74, 4);
  text-align: justify;
  word-spacing: 9px;
  margin-right: 90px;
  line-height: 35px;
}
`;
export const  EmailAddress= styled.div`
  text-align: center;
  margin-top: -2px;
  margin-bottom: -4%;
  color: rgb(3, 74, 4);
 `;
export const StyledHoroscopeBoxes = styled.div.attrs(() => ({
  className: 'horoscope-boxes', 
}))`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px; 
  padding: 20px; 

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px; 
  }


  & > div {
    width: 100px;
    height: 100px; 
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc; 
    border-radius: 10px; 
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
    transition: transform 0.2s ease-in-out; 

    &:hover {
      transform: scale(1.05);
      border-color: #666; 
    }
  }
`;
export const TableDivider = styled.div`
  height: 2px;
  background: rgb(63, 111, 49);
  width: 95%;
  margin: 25px 0;
  margin-top: 6px;
  border: 25px;
  margin-left: 21px;
`;

export const MidHeading = styled.div`
  text-align: center;
  color: rgb(3, 74, 4);
  margin-top: -2%;
  margin-bottom: -4%;
 `;
 

export const T4MidHeading = styled.div`
  font-size: 18px;
  color: #777;
  margin: 20px 0;
`;

export const T4TableDivider = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 20px 0;
`;

export const T4Third = styled.div`
  margin-top: -15px;
  font-size: 14px;
  margin-left: 72px;

`;

export const T4FamilyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: rgb(3, 74, 4);
  line-height: 29px;

  .family-details {
  display: flex;
  padding: 35px;
  border: 3px solid rgb(63, 111, 49);
  height: 101px;
  margin-top: -7px;
  text-align: center;
  margin-left: 68px;
  margin-right: 0px;
  margin-bottom: 0px;
  color: rgb(74, 154, 75);
}
  .family-detail.left {
  margin-top: -26px;
  line-height: 33px;
  color: rgb(3, 74, 4);
  text-align: left;
  margin-left: -30px; 
}

.family-detail.right {
  margin-top: -24px;
  color: green;
}
  family-detail.right {
  margin-top: -24px;
  word-spacing: 4px;
  line-height: 34px;
  margin-right: -5px;
  margin-top: -24px;
  margin-right: 37px;

  color: green;
}
   .tablet4{
  width: 106%;
  border-collapse: collapse;
  margin-right: 27px;
  margin-left: 9px;
  line-height: 32px;
}
  .rowt4 {
  color: rgb(3, 74, 4);
}
  .columnt4 {
   color: rgb(3, 74, 4);
}
`;
export const T4FamilyDetail = styled.div`
  width: 48%;
  margin-left: 64px;
  display: flex;
  justify-content: space-between;
  padding: 35px;
  border: 3px solid rgb(63, 111, 49);
  height: 78px;
  margin-top: -9%;
  flex: 1;
  margin: 10px;

  .tablet4{
  width: 100%;
  border-collapse: collapse;
  color: rgb(74, 154, 75)
}

.rowt4, td {
  border-collapse: collapse;
  color: rgb(3, 74, 4);
  white-space: nowrap;
  font-size: 16px;
  text-align: left;
  white-space: nowrap;
  
}

.rowt4 {
  width: 30%;
  white-space: nowrap;
   color: rgb(3, 74, 4);
    color: rgb(3, 74, 4);
}

td {
  width: 70%;
   color: rgb(3, 74, 4);
}


td:not(:last-child)::after, .rowt4:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: -1px;
   color: rgb(3, 74, 4);
  
}
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
   color: rgb(3, 74, 4);
`;

export const StyledTh = styled.th`
  text-align: left;
  padding-right: 10px;
`;


export const BoldText = styled.span`
  font-weight: bold;
  color: #333;
`;


export const T4AddressContainer = styled.div`
  margin-top: 30px;
`;
export const T4Address = styled.div`
 color: rgb(3, 74, 4);
  text-align: center;
  margin-top: -24px;
  font-size: 1em;
  margin-left: -7px;
}
`;

export const T4ResidentialAddress = styled.div`
  font-size: 1.2em;
 color: rgb(3, 74, 4);
  text-align: center;
  margin-top: -23px;
}
`;

export const T4ContactDetails = styled.div`
  margin-top: 5px;
  font-size: 1em;
  margin-left: 163px;
  color: rgb(3, 74, 4);

`;

export const T4BlueText = styled.span`
  color: #007bff;
`;

export const T4BrownText = styled.span`
  color: #8b4513;
`;

export const T4DottedUnderline = styled.span`
  border-bottom: 1px dotted #000;
`;

export const T4BoldText = styled.b`
  font-weight: bold;
`;