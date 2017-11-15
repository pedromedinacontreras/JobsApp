/**
*
* Topbar
*
*/

import React from 'react';
import Avatar from 'material-ui/Avatar';
import ExpandibleIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import {
  TopbarSection,
  LogoSection,
  Logo,
  ProfileSection,
  ProfileName,
  ExpandibleSection,
} from './StyledComponents';

class Topbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <TopbarSection>
        <LogoSection>
          <Logo>Officium</Logo>
        </LogoSection>
        <ProfileSection>
          <div>
            <Avatar src="https://laopinionla.files.wordpress.com/2015/11/dove_leduo_hair-emojis_2.png?w=1024" />
          </div>
          <ProfileName>Aslly Melisse Vega Corvera</ProfileName>
          <ExpandibleSection>
            <ExpandibleIcon color="#E1F5FE" />
          </ExpandibleSection>
        </ProfileSection>
      </TopbarSection>
    );
  }
}

Topbar.propTypes = {

};

export default Topbar;
