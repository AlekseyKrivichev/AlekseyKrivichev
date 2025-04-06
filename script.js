document.getElementById("contactBtn").addEventListener("click", function() {
  let contactInfo = document.getElementById("contactInfo");

  if (contactInfo.style.height === "0px" || contactInfo.style.height === "") {
    contactInfo.style.height = contactInfo.scrollHeight + "px";
    contactInfo.style.opacity = "1";
  } else {
    contactInfo.style.height = "0px";
    contactInfo.style.opacity = "0";
  }
});
