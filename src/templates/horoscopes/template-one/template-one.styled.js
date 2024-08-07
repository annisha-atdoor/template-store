import styled from 'styled-components';
import backgroundImage from './images/enabled-bg.svg';

export const MainContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
    color:brown;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
    color:brown;
`;

export const Heading = styled.h1`
  font-size: 24px;
  color: #000;
  margin: 0;
  padding: 0;
    color:brown;

  img {
    max-width: 150px;
    height: auto;
  }
`;

export const SubHeading = styled.h2`
  font-size: 18px;
  color: #666;
  margin-top: 10px;
  padding: 0;
    color:brown;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
    color:brown;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
      color:brown;
  }

  th {
    background-color: #f4f4f4;
      color:brown;
  }
`;

export const BelowHeading = styled.div`
  margin: 20px 0;
  font-size: 16px;
    color:brown;
`;

export const SecondName = styled.div`
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
    color:brown;
`;

export const ThirdLine = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #555;
`;

export const MidHeading = styled.div`
  margin: 20px 0;
font-size: 1
   color:brown;

  .blue-text {
    color: #1e1e66;
  }

  .brown-text {
    color:brown;
  }
`;

export const FamilyDetails = styled.div`
  margin: 20px 0;
   color:brown;
`;

export const ResidentialAddress = styled.div`
  margin: 20px 0;
   color:brown;
     font-size: 14px;
`;

export const ContactDetails = styled.div`
  margin: 20px 0;
   color:brown;
     font-size: 14px;
`;

export const EmailAddress = styled.div`
  margin: 20px 0;
    color:brown;
      font-size: 14px;
`;
