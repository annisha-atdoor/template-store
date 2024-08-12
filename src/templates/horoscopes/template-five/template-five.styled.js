import styled from 'styled-components';

export const Container = styled.div`
  width: 210mm;
    height: 297mm;
    padding: 10mm;
    margin: auto;
    box-shadow: 0 0 5mm rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background-color: rgb(161, 161, 73); 
`;

export const InnerBorder = styled.div`
  width: calc(100% - 30px); 
    height: calc(100% - 30px); 
    border: 3px solid rgb(0, 110, 0);
    box-sizing: border-box; 
    margin: 15px;
    padding: 10%;
`;

export const MainHeader = styled.div`
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const SubHeading = styled.div`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

export const FamilyDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FamilyDetailLeft = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #fff;
`;

export const FamilyDetailRight = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #fff;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Divider = styled.hr`
  border-top: 1px solid #ddd;
`;

export const AdditionalData = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const HoroscopeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const HoroscopeTable = styled.table`
  width: 46%;
  border: 1px solid #333;
  border-spacing: 0;
`;

export const DottedRow = styled.tr`
  border-bottom: 1px dashed #333;
`;

export const Address = styled.div`
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
`;

export const Bottom = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

export const ResidentialAddress = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`;

export const ContactDetails = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`;
