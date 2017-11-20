/**
*
* Topbar
*
*/

import React from 'react';
import Avatar from 'material-ui/Avatar';
import ExpandibleIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AutoComplete from 'material-ui/AutoComplete';
import styles from './styles';
import {
  TopbarSection,
  LogoSection,
  Logo,
  ProfileSection,
  ProfileName,
  ExpandibleSection,
  SearcherSection,
  Searcher,
  SearcherIconSection,
  SearcherTextSection,
} from './StyledComponents';

class Topbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  dataSource = [
    'Carpintería',
    'Plomería',
    'Herrería',
    'Electricista',
    'Albañilería',
    'Cerrajería',
    'Mecánico',
    'Vulcanizadora',
    'Técnico en refrigeración',
    'Pintor',
    'Tapicero',
  ];

  render() {
    return (
      <TopbarSection>
        <LogoSection>
          <Logo>Servicios mx</Logo>
        </LogoSection>
        <SearcherSection>
          <Searcher>
            <SearcherIconSection>
              <SearchIcon
                color="#BBDEFB"
              />
            </SearcherIconSection>
            <SearcherTextSection>
              <AutoComplete
                id={'searcherId'}
                hintText={'Busca servicios más rápido'}
                underlineShow={false}
                hintStyle={styles.searcherHint}
                inputStyle={styles.searcherInput}
                dataSource={this.dataSource}
                filter={AutoComplete.fuzzyFilter}
                fullWidth
              />
            </SearcherTextSection>
          </Searcher>
        </SearcherSection>
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
