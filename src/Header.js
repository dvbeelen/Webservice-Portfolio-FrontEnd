import React from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'Portfolio Cases'

export class Header extends React.Component{
    render() {
      return (
        <>
          <Helmet>
            <title>{ TITLE }</title>
          </Helmet>
          <div>
            <h2>Portfolio</h2>
          </div>
        </>
      );
    }
  }