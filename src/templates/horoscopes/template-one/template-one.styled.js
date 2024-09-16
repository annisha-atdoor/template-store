import styled from 'styled-components';
import backgroundImage from './images/enabled-bg.svg';


export const MainContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  color:brown;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

export const MidHeading = styled.div`
  text-align: center;
  margin: 20px 0;
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

export const LineText = styled.div`
  text-align: center;
   margin-top: -2%;
   font-size: 13px;
   `;
 
export const SubHeadingText = styled.div`
  font-size: 1em;
  color: brown;
  margin-top: 14px;
`;
export const UnboldText = styled.span`
  font-weight: normal;
  color: rgb(27, 19, 81);
`;
export const PersonalDetails = styled.div`
margin-left: 114px;
  color:brown;
  width: 69px;
  `;
export const  FamilyDetails = styled.div`
  margin-left: 22px;
  color:brown;
  width: 69px;
 `;
 
export const Table = styled.table`
.tablet1{
border: 2px solid brown;
  border-collapse: collapse;
  color: brown;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  padding: 12px;
  text-align: left;
  margin-left: 21%;
  margin-right: 50%;
 
}
 .rowt1, .columnt1{
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }

  .rowt1 {
    border: 2px solid brown;
    color: brown;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
    padding: 12px; 
    text-align: left;
  }

 .columnt1 {
      border: 2px solid brown;
     color: brown;
     overflow: hidden;
     white-space: nowrap;
     font-size: 15px;
     padding: 12px; 
     text-align: left;
  }
`;

export const BelowHeading = styled.div`
  margin-top: 1px;
 font-size: 20px;
  text-align: center;

`;

export const SecondName = styled.div`
  font-size: 19px;
  font-weight: bold;
  color: rgb(27, 19, 81);
  text-align: center;
  margin-top: 2px;
`;

export const ThirdLine = styled.div`
 margin-top: -18px;
  font-size: 18px;
  text-align: center;
`;

export const Address = styled.p`
  margin-top: 2px;
  font-size: 0.8em;
  margin-left: 35px;
  line-height: 44px;
  color: brown;
`;

export const ContactDetails = styled.p`
 margin-top: -9px;
  font-size: 0.9em;
  text-align: center;
  color: brown;
  line-height: 28px;
}
`;

export const EmailAddress = styled.p`
  margin-top: -10px;
  font-size: 0.9em;
  text-align: center;
  line-height: 31px;
  color: brown;
`;

export const BlueText = styled.span`
 color: rgb(27, 19, 81);
`;

export const BrownText = styled.span`
  color: brown;
`;


export const HeadingText = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #333;
`;
