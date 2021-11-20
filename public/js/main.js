const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_val = document.getElementById("temp_val_span");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector(".middle_layer");
const getInfo = async (event) => {
  event.preventDefault();
  let city = cityName.value;
  if (city === "") {
    city_name.innerText = `Please write the city name before search`;
    data_hide.classList.add('data_hide');
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=855cc60010e51684c470478dbb895750`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      temp_val.innerText = arrData[0].main.temp;
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      const tempMood = arrData[0].weather[0].main;
      if (tempMood == "Clouds") {
        temp_status.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6;"></i>`;
      } else if (tempMood == "Clear") {
        temp_status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;"></i>`;
      } else if (tempMood == "Rain") {
        temp_status.innerHTML = `<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>`;
      } else {
        temp_status.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6;"></i>`;
      }
      data_hide.classList.remove('data_hide');
    } catch {
      city_name.innerText = `Please write the valid city name`;
      data_hide.classList.add('data_hide');
    }
  }
};
submitBtn.addEventListener("click", getInfo);
