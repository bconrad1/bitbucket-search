import React from 'react';
import swaggerImage from '../../static/images/swagger.png';
import {FaGithub} from 'react-icons/fa';

const SiteHeader = () => {
  return (
    <div className={'site-title'}>
      <div className={'swagger-logo'}><img src={swaggerImage}/></div>
      <div className={'site-title-text'}><span
        className={'site-title-name'}>{'Swagger'}</span> Formatter
      </div>
      <div className={'git-logo'}>
        <a href={'https://github.com/bconrad1/swagger-formatter'} className={'git-logo-link'} target={'#'}> <FaGithub/></a>
      </div>
    </div>
  );
};

export default SiteHeader;