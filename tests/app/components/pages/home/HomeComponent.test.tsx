import * as React from 'react';
import 'jsdom-global/register';
import {mount} from 'enzyme';
import HomeComponent from "../../../../../src/app/components/pages/home/HomeComponent";

describe("Home Component:", ()=> {
  
  const homeComponent = mount(<HomeComponent />);
  beforeEach(() => {
    homeComponent.setProps({
      city: 'Some City',
      data: {weather: ['sunny'], main: {temp: 100}},
      isFetching: false
    });
    homeComponent.update();
  });
  it("should render home component", ()=> {
    expect(homeComponent.find('p').text()).toEqual(`Food Stall in development.`);
  })
});
