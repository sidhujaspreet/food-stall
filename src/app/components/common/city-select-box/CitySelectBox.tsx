import * as React from "react";
import './CitySelectBox.scss';

type CitySelectProps = {
  id: string,
  name: string,
  imgUrl: string,
  onCityNameClick(name: string): any
}

export const CitySelectBox = (props: CitySelectProps) => {
  return (
      <div className="city-select-box" style={{backgroundImage: 'url(' + props.imgUrl + ')'}}>
        <div className="city-name-box" onClick={() => props.onCityNameClick(props.id)}>
          <p className="city-name">{props.name}</p>
        </div>
      </div>);
};
