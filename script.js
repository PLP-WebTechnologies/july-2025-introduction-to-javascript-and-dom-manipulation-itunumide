// ==========================
// Part 1: JavaScript Basics
// ==========================

// Variables & conditionals
let userName = prompt("What is your name?");
let hour = new Date().getHours();
let greetingMessage;

if (hour < 12) {
  greetingMessage = "Good morning";
} else if (hour < 18) {
  greetingMessage = "Good afternoon";
} else {
  greetingMessage = "Good evening";
}

// Output to webpage
document.getElementById("greeting").textContent = `${greetingMessage}, ${
  userName || "guest"
}! 👋`;

// ==========================
// Part 2: Functions
// ==========================

// Function to calculate total price
function calculateTotal(price, qty) {
  return price * qty;
}

// Another function: format string
function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

// Hook into DOM
document.getElementById("totalBtn").addEventListener("click", () => {
  let total = calculateTotal(19.99, 3);
  document.getElementById("totalOutput").textContent =
    "Your total is: " + formatCurrency(total);
});

// ==========================
// Part 3: Loops
// ==========================

// For loop: countdown
document.getElementById("countdownBtn").addEventListener("click", () => {
  const list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old countdown
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
  let li = document.createElement("li");
  li.textContent = "🎉 Blast off!";
  list.appendChild(li);
});

// While loop: generate first 5 even numbers
let numbers = [];
let n = 0;
while (numbers.length < 5) {
  if (n % 2 === 0) {
    numbers.push(n);
  }
  n++;
}
console.log("First 5 even numbers:", numbers);

// ==========================
// Part 4: DOM Interactions
// ==========================

// Toggle visibility
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("hidden");
});

// Add items dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  const list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New item " + (list.children.length + 1);
  list.appendChild(li);
});

// Change styles on interaction
document.getElementById("toggleText").addEventListener("mouseover", () => {
  document.getElementById("toggleText").style.color = "blue";
});
document.getElementById("toggleText").addEventListener("mouseout", () => {
  document.getElementById("toggleText").style.color = "black";
});
