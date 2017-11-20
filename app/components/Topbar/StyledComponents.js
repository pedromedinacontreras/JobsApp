import styled from 'styled-components';

export const TopbarSection = styled.div`
  height: 64px;
  background-color: #01579b;
  float: left;
  width: 100%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.24), 0 0 4px 0 rgba(0, 0, 0, 0.12);
`;

export const LogoSection = styled.div`
  float: left;
  height: 100%;
  width: 15%;
  display: flex;
  align-items: center;
`;

export const SearcherSection = styled.div`
  width: 70%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
`;

export const Logo = styled.span`
  color: #e1f5fe;
  padding-left: 18px;
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
  color: #e1f5fe;
  overflow: hidden;
  max-height: 21px;
  width: 125px;
`;

export const ExpandibleSection = styled.div``;

export const Searcher = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.12);
`;

export const SearcherIconSection = styled.div`
  width: 15%;
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearcherTextSection = styled.div`
  width: 85%;
  float: left;
  height: 100%;
  padding-right: 16px;
`;
