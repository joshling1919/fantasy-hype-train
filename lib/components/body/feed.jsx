import React from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

class Feed extends React.Component {

  render(){
    return(
      <Accordion>
        <AccordionPanel heading="First Panel">
          <p>First Panel contents</p>
        </AccordionPanel>
        <AccordionPanel heading="Second Panel">
          <p>First Panel contents</p>
        </AccordionPanel>
      </Accordion>
    );
  }

}


export default Feed;
