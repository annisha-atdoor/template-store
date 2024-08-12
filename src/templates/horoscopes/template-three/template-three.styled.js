import styled from 'styled-components';
import logoImage from './images/logo.svg';

// Main Container Style
export const MainContainer = styled.div`
  width: 214mm;
  height: 297mm;
  padding: -4%;
  margin: auto; 
  box-shadow: 0 0 5mm rgba(0, 0, 0, 0.1);
  box-sizing: border-box; 
  border: 4px solid rgb(3, 74, 4);
`;

// Header Style
export const Header = styled.div`
    width: calc(100% - 30px); 
    height: calc(100% - 30px); 
    border: 3px solid rgb(3, 74, 4); 
    box-sizing: border-box; 
    margin: 15px;
    padding: 10%;
`;

// Main Heading Style
export const MainHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

// Sub Heading Style
export const SubHeading = styled.h2`
  font-size: 20px;
  font-weight: normal;
  color: #666;
  margin: 10px 0;
`;

// Gender Selector Style
export const GenderSelector = styled.div`
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;

// Additional Data Style
export const AdditionalData = styled.div`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ddd;
`;

// Divider Style
export const Divider = styled.hr`
  border-top: 1px solid #000;
  margin: 20px 0;
`;

// Family Details Style
export const FamilyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

// Address Section Style
export const AddressSection = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;

// Bottom Section Style
export const BottomSection = styled.div`
  margin-top: 20px;
`;


export const LogoImage = styled.img.attrs({
  src: logoImage,
  alt: 'Canvas Logo'
})`
  width: 100px;
  height: auto;
`;
