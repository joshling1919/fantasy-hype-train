import React from 'react';

class Settings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      adds: true,
      percentage: true
    };
  }

  handleCheckbox(){
    let change = this.state.adds ? false : true;
    this.setState({
      adds: change
    });
  }

  prefillAdd(){
    if (localStorage.settings !== undefined) {
      return localStorage.settings.add;
    } else {
      return this.state.adds;
    }
  }

  render(){
    return(
      <div>
        <div>
          Notify me of:
        </div>
        <label className="settings-label">
          <input type="checkbox"
            name="Net Adds"
            checked={this.prefillAdd()}
            onChange={this.handleCheckbox.bind(this)}/>
          Net Adds(Adds - Drops)
          <span> above </span>
          <input className="settings-number"
            type="number"
            min={100}
            step={100}
            defaultValue={1000}/>
        </label>

        <label className="settings-label">
          <input type="checkbox" name="Percent Change"/>
          Ownership Percentage Change
          <span> above </span>
            <input className="settings-percent"
              type="number"
              min={1}
              max={99}
              step={1}
              defaultValue={5}/>
            %
        </label>
      </div>
    );
  }
}


export default Settings;
