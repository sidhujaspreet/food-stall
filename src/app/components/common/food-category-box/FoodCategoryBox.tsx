import * as React from "react";
import './FoodCategoryBox.scss';

type CitySelectProps = {
  id: string,
  type: string,
  imgUrl: string,
  onCityNameClick(name: string): any
}

export const FoodCategoryBox = (props: CitySelectProps) => {
  return (
      <div className="city-select-box" style={{backgroundImage: 'url(' + props.imgUrl + ')'}}>
        <div className="city-name-box" onClick={() => props.onCityNameClick(props.id)}>
          <p className="city-name">{props.type}</p>
        </div>
      </div>);
};
