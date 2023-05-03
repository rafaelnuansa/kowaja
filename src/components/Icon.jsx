import React from 'react';

const Icon = ({icon}) => {
  return (
    <i className="icon">
      <svg viewBox={icon.viewBox}>
        <use xlinkHref={`#${icon.id}`} />
      </svg>
    </i>
  );
};

export default Icon;
