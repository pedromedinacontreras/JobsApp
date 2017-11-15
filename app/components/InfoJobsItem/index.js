/**
*
* InfoJobsItem
*
*/

import React from 'react';
import {
  InfoSection,
  InfoTitle,
  InfoBody,
  InfoTextSection,
} from './StyledComponents';


function InfoJobsItem({ title, body }) {
  return (
    <InfoSection>
      <InfoTextSection><InfoTitle>{title}</InfoTitle></InfoTextSection>
      <InfoTextSection>
        <InfoBody>
          {body}
        </InfoBody>
      </InfoTextSection>
    </InfoSection>
  );
}

InfoJobsItem.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,
};

export default InfoJobsItem;
