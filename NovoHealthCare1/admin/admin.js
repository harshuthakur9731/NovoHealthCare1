/*
 NoveHealthcare Admin JavaScript
 Demo Frontend Version
*/

// ===========================
// Login System
// ===========================

function login() {
  let user = document.getElementById("username").value;

  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "novo123") {
    localStorage.setItem("noveAdmin", "logged");

    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerHTML =
      "Invalid Username or Password";
  }
}

// ===========================
// Logout
// ===========================

function logout() {
  localStorage.removeItem("noveAdmin");

  window.location.href = "login.html";
}

// ===========================
// Protect Dashboard
// ===========================

if (window.location.pathname.includes("dashboard")) {
  if (localStorage.getItem("noveAdmin") !== "logged") {
    window.location.href = "login.html";
  }
}

// ===========================
// Product Management
// ===========================

let products = JSON.parse(localStorage.getItem("products")) || [];

function addProduct() {
  let name = document.getElementById("productName").value;

  let category = document.getElementById("category").value;

  let description = document.getElementById("description").value;

  if (name === "") {
    alert("Enter product name");

    return;
  }

  products.push({
    name: name,

    category: category,

    description: description,
  });

  localStorage.setItem("products", JSON.stringify(products));

  loadProducts();
}

function loadProducts() {
  let table = document.getElementById("productTable");

  if (!table) return;

  table.innerHTML = "";

  products.forEach((product, index) => {
    table.innerHTML += `

<tr>

<td>${product.name}</td>

<td>${product.category}</td>


<td>

<button class="delete-btn"
onclick="deleteProduct(${index})">

Delete

</button>


</td>


</tr>

`;
  });
}

function deleteProduct(index) {
  products.splice(index, 1);

  localStorage.setItem(
    "products",

    JSON.stringify(products),
  );

  loadProducts();
}


// newly added code
function addProduct() {

  let name = document.getElementById("productName").value;
  let category = document.getElementById("category").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("productImage").value;

  if (name === "") {
    alert("Enter product name");
    return;
  }

  products.push({
    name,
    category,
    description,
    image
  });

  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("productName").value = "";
  document.getElementById("category").value = "";
  document.getElementById("description").value = "";

  loadProducts();

  alert("Product Added Successfully");
}
``
// newly added code

loadProducts();
