import { connect } from 'react-redux';
import HomeComponent from '../../../components/pages/home/HomeComponent';
import {fetchWeatherData} from "../../../actions/WeatherActions";

function mapStateToProps(state: any) {
  return {
    city: state.weather.city,
    data: state.weather.data,
    isFetching: state.weather.isFetching
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchWeatherData: () => dispatch(fetchWeatherData)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
