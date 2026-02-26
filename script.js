function setNewUser() {
    document.getElementById("headline").innerText = "Welcome! Enjoy 10% Off";
    document.getElementById("description").innerText = "Special discount for first-time visitors.";
  }
  
  function setReturningUser() {
    document.getElementById("headline").innerText = "Welcome Back!";
    document.getElementById("description").innerText = "Thanks for being a loyal customer.";
  }
  
  function trackClick() {
    document.getElementById("log").innerText = "Conversion Tracked: Buy Now clicked!";
    console.log("Conversion event fired");
  }