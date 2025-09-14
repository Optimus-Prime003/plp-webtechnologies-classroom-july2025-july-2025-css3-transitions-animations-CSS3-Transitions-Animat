// ===== Part 2: Functions, Scope & Return Values =====

// Global variable
let animationState = false;


// Function with parameter + return value
function toggleAnimation(state) {
  return !state; // Returns the opposite of current state
}

// Function to update DOM and apply CSS class
function toggleBoxAnimation() {
  const box = document.getElementById("animateBox");

  // Local scope variable
  let currentState = animationState;

  // Call function with parameter
  animationState = toggleAnimation(currentState);

  // Apply/remove class based on returned value
  if (animationState) {
    box.classList.add("animate");
  } else {
    box.classList.remove("animate");
  }
}


// ===== Modal Functions =====

// Function with reusable logic
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}