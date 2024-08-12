import styled from 'styled-components';

export const Container = styled.div`
   width: 214mm;
  height: 297mm;
  padding: -4%;
  margin: auto;
  
  box-shadow: 0 0 5mm rgba(0, 0, 0, 0.1);
  box-sizing: border-box; 
`;

export const BackgroundImage = styled.div`
  background-image: url('/path-to-your-background-image.jpg');
  background-size: cover;
  background-position: center;
  padding: 50px;
  border-radius: 10px;
`;

export const InnerBorder = styled.div`
  border: 2px solid #000;
  padding: 20px;
  border-radius: 10px;
`;

export const MainHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const SubHeading = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ThirdHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const TableDivider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 2px dashed #ccc;
`;

export const MidHeading = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

export const HoroscopeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const HoroscopeTable = styled.table`
  width: 46%;
  border-collapse: collapse;
`;

export const DottedRow = styled.tr`
  border: 1px dotted #000;
`;

export const TableCell = styled.td`
  border: 1px solid #000;
  padding: 10px;
  text-align: center;
`;

export const FamilyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FamilyDetail = styled.div`
  width: 48%;
`;

export const AddressContainer = styled.div`
  margin-top: 20px;
`;

export const Address = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const ContactDetails = styled.div`
  margin-top: 10px;
`;

export const BlueText = styled.span`
  color: blue;
`;

export const BrownText = styled.span`
  color: brown;
`;

export const DottedUnderline = styled.span`
  border-bottom: 1px dotted #000;
`;
