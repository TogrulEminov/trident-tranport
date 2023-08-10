const fromCountries = document.getElementById('fromcountry');

window.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'db.json', true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let datas = JSON.parse(xhr.responseText);
      let html = '<option selected>Choose a country</option>';
      datas.data.forEach((element) => {
        html += `
        <option value="${element.name}">${element.name}</option>
        `;
      });
      fromCountries.innerHTML = html;
    }
  };
});

function getCities(country) {
  const fromcities = document.getElementById('fromcities');
  if (country.trim() === '') {
    fromcities.disabled = true;
    fromcities.selectedIndex = 0;
  }
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'db.json', true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let allCities = JSON.parse(xhr.responseText);
      let selectData = allCities.data.find(
        (element) => element.name === country
      );
      if (selectData) {
        let data = '<option value="" selected>Choose a city</option>';
        selectData.fromCity.forEach((city) => {
          data += `<option value="${city.id}">${city.city}</option>`;
        });

        fromcities.disabled = false;
        fromcities.innerHTML = data;
      }
    }
  };
}
