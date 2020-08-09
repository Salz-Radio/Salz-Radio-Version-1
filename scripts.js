let dateFunction = () => {
  let currentTime = new Date();
  let dayOfTheWeek = currentTime.getDay();
  let hourOfTheDay = currentTime.getHours();
  let newButton = document.getElementById("btn1");

  if (dayOfTheWeek >= 4) {
    if (hourOfTheDay >= 15 && hourOfTheDay <= 19) {
      newButton.style.display = "block";
      //   console.log("button will show");
    } else {
      newButton.style.display = "none";
      //   console.log("button will not show");
    }
  } else {
    newButton.style.display = "none";
    //  console.log("button will not show");
  }
};

dateFunction();
