import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };
  return (
    <header style={headerStyle}>
      <h1 className="header">Tasks list</h1>
    </header>
  );
};

export default Header;
