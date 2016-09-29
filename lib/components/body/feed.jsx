import React from 'react';

class Feed extends React.Component {


  componentDidMount(){
    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      };
    }
  }

  render(){

    return(
      <div>
        this is the feeds page
        <button className="accordion">Section 1</button>
        <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

        <button className="accordion">Section 2</button>
        <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

        <button className="accordion">Section 3</button>
        <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
      </div>
    );
  }

}


export default Feed;
