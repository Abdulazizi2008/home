const button = document.getElementById("button");
const container = document.getElementById("container");

button.onclick = async function () {
  const promise = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await promise.json();

  users.forEach(function (user) {
    const li = document.createElement("li");

    const name = document.createElement("h3");
    name.textContent = user.name;
    li.append(name);

    const email = document.createElement("p");
    email.textContent = user.email;
    li.append(email);

    const adress = document.createElement("p");
    adress.textContent = user.address.street;
    li.append(adress);

    const phone = document.createElement("p");
    phone.textContent = user.phone;
    li.append(phone);

    container.append(li);
  });
};

const btn = document.getElementById("button2");
const cont = document.getElementById("container2");

btn.onclick = function () {
  const promise = fetch("https://jsonplaceholder.typicode.com/users");
  promise
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      users.forEach(function (user) {
        const li = document.createElement("li");
        const name = document.createElement("h3");
        name.textContent = user.name;
        li.append(name);

        const email = document.createElement("p");
        email.textContent = user.email;
        li.append(email);

        const adress = document.createElement("p");
        adress.textContent = user.address.street;
        li.append(adress);

        const phone = document.createElement("p");
        phone.textContent = user.phone;
        li.append(phone);
        cont.append(li);
      });
    });
};
