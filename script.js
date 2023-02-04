"use strict";
// 178.223.234.125

const getCountry = function () {
  const ipAdd = document.querySelector(".ip").value;
  console.log(ipAdd);

  const request = new XMLHttpRequest();
  request.open("GET", `http://www.geoplugin.net/xml.gp?ip=${ipAdd}`);
  request.send();

  request.addEventListener("load", function () {
    const country = this.responseXML.all[12].textContent;

    document.querySelector(".country").textContent = country;
  });
};

document.querySelector(".send").addEventListener("click", getCountry);

const getDog = function () {
  const request = new XMLHttpRequest();
  request.open("GET", "https://dog.ceo/api/breeds/image/random");
  request.send();

  request.addEventListener("load", function () {
    const response = JSON.parse(this.responseText);
    const img = document.querySelector(".dog-img");
    img.src = response.message;
  });
};
document.querySelector(".get-dog").addEventListener("click", getDog);

const getUser = function () {
  const username = document.querySelector("#user").value;
  const request = new XMLHttpRequest();
  request.open("GET", `https://api.github.com/users/${username}`);
  request.send();
  request.addEventListener("load", function () {
    const response = JSON.parse(this.responseText);
    console.log(response);

    const html = `
    <figure>
      <img src=${response.avatar_url} alt="Github user avatar" />
      <figcaption>${response.name || response.login}</figcaption>
    </figure>
    `;

    document.querySelector(".git").insertAdjacentHTML("beforeend", html);
  });
};

document.querySelector(".search").addEventListener("click", getUser);
