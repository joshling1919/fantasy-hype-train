import React from 'react';

import { fetchPlayers, storePlayerData } from '../../util/feed_api_util';

class Settings extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      addSettingOn: localStorage.addSettingOn,
      addsNum: localStorage.addsNum,
      percentageSettingOn: localStorage.percentageSettingOn,
      percentageNum: localStorage.percentageNum,
      ownershipMaxPercentage: localStorage.ownershipMaxPercentage
    };
  }

  handleAddsCheckbox(e){
    let change = this.state.addSettingOn ? false : true;
    this.setState({
      addSettingOn: change
    });
  }

  handlePercentageCheckbox(e){
    let change = this.state.percentageSettingOn ? false : true;
    this.setState({
      percentageSettingOn: change
    });
  }

  handlePercentageNum(e){
    this.setState({
      percentageNum: parseInt(e.target.value)
    });
  }

  handleAddsNum(e){
    this.setState({
      addsNum: parseInt(e.target.value)
    });
  }

  updateSlider(e){
    this.setState({
      ownershipMaxPercentage: e.currentTarget.value
    });
  }


  saveSettings(e){
    e.preventDefault();
    localStorage.setItem("addSettingOn", this.state.addSettingOn);
    localStorage.setItem("addsNum", this.state.addsNum);
    localStorage.setItem("percentageSettingOn", this.state.percentageSettingOn);
    localStorage.setItem("percentageNum", this.state.percentageNum);
    localStorage.setItem("ownershipMaxPercentage", this.state.ownershipMaxPercentage);
    fetchPlayers(localStorage, storePlayerData);
  }


  render(){
    return(
      <div className="body">
        <div>
          Notify me of:
        </div>
        <div>
          <input type="checkbox"
            name="Net Adds"
            checked={this.state.addSettingOn}
            onChange={this.handleAddsCheckbox.bind(this)}/>
          Net Adds (Adds - Drops)
          <span> above </span>
          <input className="settings-number"
            type="number"
            min={100}
            step={100}
            onChange={this.handleAddsNum.bind(this)}
            value={this.state.addsNum}/>
        </div>

        <div>
          <input type="checkbox"
            name="Percent Change"
            onChange={this.handlePercentageCheckbox.bind(this)}
            checked={this.state.percentageSettingOn}/>
          Ownership Percentage Change
          <span> above </span>
          <input className="settings-percent"
            type="number"
            min={1}
            max={99}
            step={1}
            onChange={this.handlePercentageNum.bind(this)}
            value={this.state.percentageNum}/>
          %
        </div>

        <div className="slider-container">
          <div>
            Only give notifications for players with ownership percentage less than:
          </div>
          <div>
            <input className="ownership-slider"
              type="range"
              min={0}
              max={100}
              step={1}
              onChange={this.updateSlider.bind(this)}
              value={this.state.ownershipMaxPercentage}/>
              <input className="settings-percent"
                type="number"
                min={0}
                max={100}
                step={1}
                onChange={this.updateSlider.bind(this)}
                value={this.state.ownershipMaxPercentage}/> %
          </div>
        </div>

        <div>
          <button onClick={this.saveSettings.bind(this)}>Save</button>
        </div>
      </div>
    );
  }
}


export default Settings;
