import React from 'react';
import { Link } from 'framework7-react';
import avatarSrc from '../assets/avatar.jpeg';
import './AppstorePageTitle.less';

const AppstorePage = ({
  title,
  heading,
  accountLink = true,
}) => {
  return (
    <h1 className="appstore-page-title">
      {heading && (
        <div className="appstore-page-title-heading">{heading}</div>
      )}
      <span>{title}</span>
      {accountLink && (
        <Link href="/account/">
          <img src="https://i1.pngguru.com/preview/306/690/544/app-store-for-macos-apple-store-logo.jpg" alt="Account" />
        </Link>
      )}
    </h1>
  );
};

export default AppstorePage;
