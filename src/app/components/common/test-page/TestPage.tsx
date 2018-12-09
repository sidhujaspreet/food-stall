import * as React from 'react';
import {CitySelectBox} from "../city-select-box/CitySelectBox";

class TestPage extends React.Component<{props: any, state: any}> {
  constructor(props: any){
    super(props);
    this.onCityNameClick = this.onCityNameClick.bind(this);
  }
  
  private onCityNameClick(name: string): void {
    alert(`${name} selected.`);
  }
  render() {
    const imgUrl = 'https://www.mitid.edu.in/images/culture/Culture-Shaniwarwada-pune-full.jpg';
    return (
        <CitySelectBox id="pune" name="Pune" imgUrl={imgUrl} onCityNameClick={this.onCityNameClick}/>
    );
  }
}

export default TestPage;
