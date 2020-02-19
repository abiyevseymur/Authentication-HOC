import React from 'react';
import Header from './Header';

export default ({children}:any) => {
  return (
    <div className="App">
      <Header/>
     {children}
    </div>
  );
}

