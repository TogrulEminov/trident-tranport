// first label
const fromCountries = document.getElementById('fromcountry');
const fromCities = document.getElementById('fromcities');

window.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8999/distance/allcities')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(datas => {
      const uniqueCountries = [...new Set(datas.map(element => element.country))];

      let html = '<option selected>Choose a country</option>';
      uniqueCountries.forEach(country => {
        html += `
          <option value="${country}">${country}</option>
        `;
      });
      fromCountries.innerHTML = html;
    })
    .catch(error => {
      console.error('Fetch error:', error);
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

  fetch('http://localhost:8999/distance/allcities') // Replace with the appropriate URL
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(cityData => {
      const selectData = cityData.filter(city => city.country === country);

      if (selectData.length > 0) {
        let data = '<option value="" selected>Choose a city</option>';
        selectData.forEach(city => {
          data += `<option value="${city.id}">${city.name}</option>`;
        });

        fromCities.disabled = false;
        fromCities.innerHTML = data;
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}



// second label
const toCountries = document.getElementById('tocountry');
const toCities = document.getElementById('tocity');

window.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8999/distance/allcities')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(datas => {
      const uniqueCountries = [...new Set(datas.map(element => element.country))];

      let html = '<option selected>Choose a country</option>';
      uniqueCountries.forEach(country => {
        html += `
          <option value="${country}">${country}</option>
        `;
      });
      toCountries.innerHTML = html;
    })
    .catch(error => {
      console.error('Fetch error:', error);
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

  fetch('http://localhost:8999/distance/allcities') // Replace with the appropriate URL
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(cityData => {
      const selectData = cityData.filter(cities => cities.country === city);

      if (selectData.length > 0) {
        let data = '<option value="" selected>Choose a city</option>';
        selectData.forEach(city => {
          data += `<option value="${city.id}">${city.name}</option>`;
        });

        toCities.disabled = false;
        toCities.innerHTML = data;
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}


// display wieght
const submitBTN = document.querySelector("#submit");
const weight = document.getElementById("weight");

submitBTN.addEventListener('click', async () => {
  const id1 = fromCities.options[fromCities.selectedIndex].value;
  const id2 = toCities.options[toCities.selectedIndex].value;
  const weightValue = weight.value;

  const response = await fetch(`http://localhost:8999/distance/${id1}/${id2}/${weightValue}`);
  const data = await response.json();

  console.log(data);

  document.querySelector("#price-span").innerHTML = `Price:
  <span>${data}</span>`
});
