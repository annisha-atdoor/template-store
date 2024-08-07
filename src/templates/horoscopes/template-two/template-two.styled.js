import styled from 'styled-components';

export const A4Container = styled.div`
  width: 214mm;
  height: 297mm;
  padding: -4%;
  margin: auto;
  box-shadow: 0 0 5mm rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border: 4px solid #000;
`;

export const InnerBorder = styled.div`
  width: calc(108% - 25px);
  height: calc(106% - 30px);
  border: 3px solid rgb(14, 13, 13);
  padding: 20px;
  box-sizing: border-box;
`;

export const MainHeader = styled.div`
  text-align: center;
  color: rgb(7, 7, 7);
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const CornerImageContainer = styled.div`
  flex: 1;
`;

export const CornerImage = styled.img`
  width: 100px;
`;

export const Heading = styled.div`
  flex: 2;
  font-size: 14px;
`;

export const LogoImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0%;
  width: 35px;
  margin-top: -67px;
`;

export const SubHeading = styled.div`
  font-size: 16px;
  margin-bottom: -5px;
  text-align: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PersonalDetail = styled.div`
  flex: 1;
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      padding: 10px;
      text-align: left;
      font-size: 15px;
      color: rgb(7, 7, 7);
    }
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #000;
  width: 100%;
  margin: 20px 0;
`;

export const BelowHeading = styled.div`
  margin-top: 8px;
  font-size: 20px;
`;

export const NameContainer = styled.div`
  font-size: 43px;
  margin-bottom: 4px;
  text-align: center;
`;

export const FamilyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -11px;
`;

export const FamilyDetail = styled.div`
  flex: 1;
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      padding: 10px;
      text-align: left;
      font-size: 15px;
      color: rgb(7, 7, 7);
    }
  }
`;

export const Address = styled.div`
  text-align: center;
  color: rgb(7, 7, 7);
  margin-top: -2%;
  margin-bottom: -2%;
`;

export const ContactDetails = styled.div`
  text-align: center;
  color: rgb(7, 7, 7);
  margin-top: 0%;
  margin-bottom: 0%;
`;