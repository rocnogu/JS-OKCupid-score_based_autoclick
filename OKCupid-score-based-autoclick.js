setInterval(() => {
  personScore = parseInt(document.querySelector(".match-percentage").innerText);
  if (personScore < 95) {
    document.querySelector(".pass").click();
    console.log("pass");
  } else {
    document.querySelector(".like").click();
    console.log("like");
  }
}, 1000);
