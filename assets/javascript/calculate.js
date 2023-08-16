// first label
const fromCountries = document.getElementById('fromcountry');
const fromCities = document.getElementById('fromcities');
const submitBTN = document.querySelector('#submit');
const weight = document.getElementById('weight');

// btn
submitBTN.disabled = true;

function checkFields() {
  const fromCitySelected = fromCities.selectedIndex !== 0;
  const toCitySelected = toCities.selectedIndex !== 0;
  const weightFilled = weight.value.trim() !== '';

  submitBTN.disabled = !(fromCitySelected && toCitySelected && weightFilled);
}

fromCountries.addEventListener('change', () => {
  const selectedCountry = fromCountries.value;
  getCities(selectedCountry);
  checkFields();
});

toCountries.addEventListener('change', () => {
  const selectedCountry = toCountries.value;
  Cities(selectedCountry);
  checkFields();
});

weight.addEventListener('input', () => {
  checkFields();
});
// function
window.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8999/distance/allcities')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((datas) => {
      const uniqueCountries = [
        ...new Set(datas.map((element) => element.country)),
      ];
      const i18n = new I18n();
      i18n.lang(localStorage.getItem('lang') || 'az');

      let html = `<option selected>${
        demoJson.demo.chooseCountry[i18n.language]
      }</option>`;
      uniqueCountries.forEach((country) => {
        html += `
          <option value="${country}">${country}</option>
        `;
      });
      fromCountries.innerHTML = html;
    })
    .catch((error) => {
      return error;
    });
});

fromCountries.addEventListener('change', () => {
  const selectedCountry = fromCountries.value;
  getCities(selectedCountry);
});

function getCities(country) {
  if (country.trim() === '') {
    fromCities.disabled = true;
    fromCities.selectedIndex = 0;
    return;
  }

  fetch('http://localhost:8999/distance/allcities')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((cityData) => {
      const selectData = cityData.filter((city) => city.country === country);

      if (selectData.length > 0) {
        const i18n = new I18n();
        i18n.lang(localStorage.getItem('lang') || 'az');

        let data = `<option selected>${
          demoJson.demo.chooseCity[i18n.language]
        }</option>`;
        selectData.forEach((city) => {
          data += `<option value="${city.id}">${city.name}</option>`;
        });

        fromCities.disabled = false;
        fromCities.innerHTML = data;
      }
    })
    .catch((error) => {
      return error;
    });
}

// second label
const toCountries = document.getElementById('tocountry');
const toCities = document.getElementById('tocity');

window.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8999/distance/allcities')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((datas) => {
      const uniqueCountries = [
        ...new Set(datas.map((element) => element.country)),
      ];
      const i18n = new I18n();
      i18n.lang(localStorage.getItem('lang') || 'az');

      let html = `<option selected>${
        demoJson.demo.chooseCountry[i18n.language]
      }</option>`;
      uniqueCountries.forEach((country) => {
        html += `
          <option value="${country}">${country}</option>
        `;
      });
      toCountries.innerHTML = html;
    })
    .catch((error) => {
      return error;
    });
});

toCountries.addEventListener('change', () => {
  const selectedCountry = toCountries.value;
  Cities(selectedCountry);
});

function Cities(city) {
  if (city.trim() === '') {
    toCities.disabled = true;
    toCities.selectedIndex = 0;
    return;
  }

  fetch('http://localhost:8999/distance/allcities')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((cityData) => {
      const selectData = cityData.filter((cities) => cities.country === city);

      if (selectData.length > 0) {
        const i18n = new I18n();
        i18n.lang(localStorage.getItem('lang') || 'az');

        let data = `<option selected>${
          demoJson.demo.chooseCity[i18n.language]
        }</option>`;
        selectData.forEach((city) => {
          data += `<option value="${city.id}">${city.name}</option>`;
        });

        toCities.disabled = false;
        toCities.innerHTML = data;
      }
    })
    .catch((error) => {
      return error;
    });
}

// display wieght

submitBTN.addEventListener('click', async () => {
  const id1 = fromCities.options[fromCities.selectedIndex].value;
  const id2 = toCities.options[toCities.selectedIndex].value;
  const weightValue = weight.value;
  const response = await fetch(
    `http://localhost:8999/distance/${id1}/${id2}/${weightValue}`
  );
  const data = await response.json();
  const i18n = new I18n();
  i18n.lang(localStorage.getItem('lang') || 'az');

  document.querySelector('#price-span').innerHTML = `<p>${
    demoJson.demo.price[i18n.language]
  }</p>
  <span>${data} ₼</span>`;
});
