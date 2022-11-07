import React from 'react';
import styled from './layout.module.scss';

const Layout = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};

export default Layout;
