import styled from 'styled-components';

export const TopbarSection = styled.div`
  height: 64px;
  background-color: #01579B;
  float: left;
  width: 100%;
  display: none;
`;

export const LogoSection = styled.div`
  float: left;
  height: 100%;
  width: 85%;
  float: left;
  display: flex;
  align-items: center;
`;

export const Logo = styled.span`
  color: #E1F5FE;
  margin-left: 10px;
  font-size: 24px;
  cursor: pointer;
`;

export const ProfileSection = styled.div`
  float: left;
  height: 100%;
  width: 15%;
  display: flex;
  align-items: center;
`;

export const ProfileName = styled.div`
  float: left;
  padding-left: 16px;
  color: #E1F5FE;
  overflow: hidden;
  max-height: 21px;
  width: 125px;
`;

export const ExpandibleSection = styled.div`

`;

export const LogoPrincipalSection = styled.div`
  width: 100vw;
  /* height: calc(100vh - 64px); */
  height: 100vh
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.div`
  float: left;
  width: 100%;
  font-size: 100px;
  text-align: center;
  color: black;
  font-family: 'Poiret One';
`;

export const LogoSubText = styled.div`
  float: left;
  width: 100%;
  font-size: 18px;
  text-align: center;
  font-weight: 300;
`;
