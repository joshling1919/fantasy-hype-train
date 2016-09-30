import React from 'react';

class Settings extends React.Component {
  constructor(props){
    super(props);
    let addSettingOn = true;
    if (localStorage.addSettingOn !== undefined) {
      addSettingOn = (localStorage.addSettingOn === "true");
    }
    let addsNum = parseInt(localStorage.addsNum) || 5000;

    let percentageSettingOn = true;
    if (localStorage.percentageSettingOn !== undefined) {
      percentageSettingOn = (localStorage.percentageSettingOn === "true");
    }

    let ownershipMaxPercentage = parseInt(localStorage.ownershipMaxPercentage) || 50;

    let percentageNum = parseInt(localStorage.percentageNum) || 5;
    this.state = {
      addSettingOn: addSettingOn,
      addsNum: addsNum,
      percentageSettingOn: percentageSettingOn,
      percentageNum: percentageNum,
      ownershipMaxPercentage: ownershipMaxPercentage
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


  // prefillAddSettings(){
  //   if (localStorage.addSettingOn !== undefined) {
  //     const addSettingOn = (localStorage.addSettingOn === "true");
  //     return addSettingOn;
  //   } else {
  //     return this.state.addSettingOn;
  //   }
  // }

  // prefillAddsNum(){
  //   if (localStorage.addsNum !== undefined) {
  //     const addsNum = parseInt(localStorage.addsNum);
  //     return addsNum;
  //   } else {
  //     return this.state.addsNum;
  //   }
  // }
  //
  // prefillPercentSettings(){
  //   if (localStorage.percentageSettingOn !== undefined) {
  //     const percentageSettingOn = (localStorage.percentageSettingOn === true);
  //     return localStorage.percentageSettingOn;
  //   } else {
  //     return this.state.percentage;
  //   }
  // }

  // prefillPercentNum(){
  //   if (localStorage.percentageNum !== undefined) {
  //     const percentageNum = parseInt(localStorage.percentageNum);
  //     return percentageNum;
  //   } else {
  //     return this.state.percentageNum;
  //   }
  //
  // }
  //
  // prefillOwnershipMaxPercentage(){
  //   if (localStorage.ownershipMaxPercentage !== undefined) {
  //     const ownershipMaxPercentage = parseInt(localStorage.ownershipMaxPercentage);
  //     return ownershipMaxPercentage;
  //   } else {
  //     return this.state.ownershipMaxPercentage;
  //   }
  // }


  saveSettings(e){
    e.preventDefault();
    localStorage.setItem("addSettingOn", this.state.addSettingOn);
    localStorage.setItem("addsNum", this.state.addsNum);
    localStorage.setItem("percentageSettingOn", this.state.percentageSettingOn);
    localStorage.setItem("percentageNum", this.state.percentageNum);
    localStorage.setItem("ownershipMaxPercentage", this.state.ownershipMaxPercentage);
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
