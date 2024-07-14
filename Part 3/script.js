document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `<p>Name: ${name}</p><p>Age: ${age}</p><p>Favorite Color: ${color}</p>`;
    document.body.style.backgroundColor = color;
  });
