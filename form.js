document.getElementById("userForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const state = document.getElementById("state").value;
  const district = document.getElementById("district").value;
  const village = document.getElementById("village").value;

  const userData = { name, phone, state, district, village };

  // 🟢 Replace with your Google Apps Script Web App URL
  fetch("YOUR_WEB_APP_URL_HERE", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(data => {
    console.log("Saved:", data);

    // ✅ mark login in this device
    localStorage.setItem("loggedIn", "true");

    alert("✅ Details Submitted Successfully!");
    window.location.href = "index.html"; // redirect to main site
  })
  .catch(err => {
    console.error("Error:", err);
    alert("❌ Error saving data!");
  });
});