import React from 'react';

const FeedAccordion = ({ title }) => {

  return (
    <div>
      <button className="accordion">Section 1</button>
      <div className="panel">
        {title}
          <p>Lorem ipsum...</p>
      </div>
    </div>
  );
};

export default FeedAccordion;
