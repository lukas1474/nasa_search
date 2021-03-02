import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

class MainLayout extends React.Component {
  render() {

    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
