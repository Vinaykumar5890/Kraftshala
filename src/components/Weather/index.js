import {Component} from 'react'
import {IoSunnySharp} from 'react-icons/io5'
import {FaMoon} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import './index.css'
const api = {
  key: '43080d1c8a2a02d934c06166790a5888',
}
const apiStatus = {
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

const month = {
  month_names_short: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
}
class Weather extends Component {
  state = {
    apied: apiStatus.intial,
    changeMode: true,
    SearchInput: '',
    TemperatureList: [],
    dated: '',
    time: '',
    celcius: '',
    country: '',
    humdity: '',
    description: '',
    windSpeed: '',
  }
  add = async event => {
    event.preventDefault()
    this.setState({apied: apiStatus.loading})
    const {SearchInput} = this.state
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${SearchInput}&appid=${api.key}`,
    )
    if (response.ok === true) {
      const data = await response.json()
      const d = new Date()
      const localTime = d.getTime()
      const localOffset = d.getTimezoneOffset() * 60000
      const utc = localTime + localOffset
      var atlanta = utc + 1000 * data.timezone
      const nd = new Date(atlanta)
      const date =
        nd.getDate() +
        '/' +
        month.month_names_short[nd.getMonth() + 1] +
        '/' +
        nd.getFullYear()
      const timed = nd.getHours() + ':' + nd.getMinutes()
      const celcioses = data.main.temp
      const countrys = data.sys.country
      const humdity = data.main.humidity
      const windSpeed = data.wind.speed
      const des = data.weather.description
      this.setState({
        apied: apiStatus.success,
        dated: date,
        TemperatureList: data,
        SearchInput: '',
        time: timed,
        celcius: Math.round(parseInt(celcioses) - 273.15),
        country: countrys,
        humdity,
        windSpeed,
        description: des,
      })
    } else {
      this.setState({apied: apiStatus.failure})
    }
  }

  clickedChangeMode = () => {
    this.setState(prevState => ({changeMode: !prevState.changeMode}))
  }
  Input = event => {
    this.setState({SearchInput: event.target.value})
  }
  renderSuccess = () => {
    const {
      TemperatureList,
      dated,
      time,
      celcius,
      country,
      humdity,
      windSpeed,
      description,
      changeMode,
    } = this.state
    return (
      <div>
        <div className="dateLoactionContainer">
          <>
            <h1 className={changeMode ? 'countryName' : 'countryName1'}>
              {TemperatureList.name},
              <span className="countryNameSpan"> {country}</span>
            </h1>
          </>

          <div className="countryDate">
            <h3 className={changeMode ? 'countryDate' : 'countryDate1'}>
              Date: {dated}
            </h3>
            <p className={changeMode ? 'countryDate' : 'countryDate1'}>
              Time :{time}
            </p>
          </div>
        </div>
        <h1 className="celeiusHeading">Temperature: {celcius}°C </h1>

        <div className="datebottomContainer">
          <h1 className="humdity">Humidity:</h1>
          <p className="countryParagraph">{humdity}</p>
          <hr className="horizontal" />
          <h1 className="humdity">WindSpeed:</h1>
          <p className="countryParagraph">{windSpeed}</p>
        </div>
      </div>
    )
  }

  renderSwitch = () => {
    const {apied, changeMode} = this.state
    console.log(apied)
    switch (apied) {
      case apiStatus.success:
        return this.renderSuccess()
      case apiStatus.failure:
        return (
          <div>
            <h1 className={changeMode ? 'countryDate' : 'countryDate1'}>
              Not Found Data
            </h1>
            <img
              src="https://img.freepik.com/free-vector/tiny-programmers-working-with-system-error-computer-monitor-internet-flat-vector-illustration-programming-it-digital-technology_74855-8632.jpg?size=626&ext=jpg"
              alt="notFound"
              className="notFoundImg"
            />
          </div>
        )
        break
      case apiStatus.loading:
        return (
          <div className="loading">
            <Loader
              type="ThreeDots"
              className={changeMode ? 'loader' : 'loader1'}
            />
          </div>
        )
        break

      default:
        null
    }
  }

  render() {
    const {changeMode, SearchInput} = this.state

    return (
      <div className={changeMode ? 'bg-container' : 'bg-container1'}>
        <h1 className={changeMode ? 'weatherHeading' : 'weatherHeading1'}>
          Weather Forecast
        </h1>
        <div className={changeMode ? 'container' : 'container1'}>
          <div className="insideContainer">
            <form onSubmit={this.add}>
              <input
                type="text"
                className="insideContainerInput"
                placeholder="Search City"
                onChange={this.Input}
                value={SearchInput}
              />
              <button className="insideContainerButton" type="submit">
                Submit
              </button>
            </form>
            <button onClick={this.clickedChangeMode} className="button">
              {changeMode ? (
                <IoSunnySharp className="IoSunnySharp" />
              ) : (
                <FaMoon className="FaMoon" />
              )}
            </button>
          </div>
          {this.renderSwitch()}
        </div>
      </div>
    )
  }
}
export default Weather
