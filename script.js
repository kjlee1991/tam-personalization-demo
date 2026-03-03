// Simulated Personalization API
function fetchPersonalization(userId) {
  return new Promise((resolve) => {
    console.log("Calling Personalization API...");

    setTimeout(() => {
      // Simple segmentation logic
      const variation = userId % 2 === 0 ? "A" : "B";

      resolve({
        variation: variation,
        headline:
          variation === "A"
            ? "Welcome! Enjoy 10% Off"
            : "Welcome Back! Exclusive Offer Inside",
        description:
          variation === "A"
            ? "Special discount for first-time visitors."
            : "Thanks for being a loyal customer."
      });
    }, 800); // simulate network delay
  });
}

// Simulated Conversion Tracking API
function sendConversionEvent(userId, variation) {
  return new Promise((resolve) => {
    console.log("Sending conversion event to API...");

    setTimeout(() => {
      console.log("Conversion recorded:", { userId, variation });
      resolve(true);
    }, 500);
  });
}

// Simulate user session
const userId = Math.floor(Math.random() * 1000);
let activeVariation = null;

// On Page Load
window.addEventListener("DOMContentLoaded", async () => {
  const response = await fetchPersonalization(userId);

  activeVariation = response.variation;

  document.getElementById("headline").innerText = response.headline;
  document.getElementById("description").innerText = response.description;

  console.log("Variation applied:", activeVariation);
});

// Track conversion
document.getElementById("cta").addEventListener("click", async () => {
  await sendConversionEvent(userId, activeVariation);

  document.getElementById("log").innerText =
    "Conversion tracked for variation " + activeVariation;
});

//Manual Variation Button Changes
document.getElementById("variationA").addEventListener("click", () => {
applyVariation("A");
});

document.getElementById("variationB").addEventListener("click", () => {
applyVariation("B");
});

//Apply Variation Function
function applyVariation(key){

  if(key=="A"){
    document.getElementById("description").innerText = "Variation Button A Clicked";
    console.log(`Variation ${key} applied`);
  }
  else{
    document.getElementById("description").innerText = "Variation Button B Clicked";
    console.log(`Variation ${key} applied`);
  }

}




