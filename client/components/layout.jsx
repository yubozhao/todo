import React from 'react';

class Layout extends React.Components {
  render() {
    return (
      <div>
        {this.props.content()}
      </div>
    );
  }
};

export default Layout;
