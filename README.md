In this project, let's build a **Weather ForeCast** by applying the concepts we have learned till now.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### apiStatus : INTIAL
- The apiStatus state default is intial 

### apiStatus:SUCCESS
- Get data openweather.com and store in **TemperatureList**

### apiStatus:FAILURE 
- retrive the data as FAILURE see **NOT FOUND IMAGE **
### apiStatus :LOADING 
- Get Loader of **ThreeDots** by using **react-loder-spinner@4.0.0**
### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the app should have Weather details At current time ,
- When the **Submit** button is clicked, get data from openWeather using APi url 

  

-  If user get Event trigger on Input  information store state 
-  When the **Submit** button is clicked, get data from openWeather using APi url 
-  **Current Location**  get from Open Weather Api url Using **name**
-  **Temperature**  get from Open Weather Api url Using **temp**
-  **Date Time** get from date time using local storage convert into timeZone

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Weather/index.js`
- `src/components/Weather/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Onclick of **Submit** button  get data from Api url from openWeather.com

</details>

<details>
<summary>Icons</summary>

- REACT JS icons are used **IoSunnySharp  , FaMoon**

</details>


<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #fffff</div>
</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
<details>
<summary>Font-Weight</summary>

- bold

</details>



<details>
<summary>Font-size</summary>

- >50px

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - Clicking Double tap of **submit** button  getting error 