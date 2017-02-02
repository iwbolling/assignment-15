// GO! - IWB

// TASK 1 -- Show/Hide Nav
var buttonHideNav = document.querySelector("#hide-nav button");
var navNavMenu = document.querySelector(".nav-menu");
buttonHideNav.addEventListener("click", function(){
  if (navNavMenu.className === "nav-menu") {
    navNavMenu.className = "nav-menu-hidden";
  } else if (navNavMenu.className === "nav-menu-hidden") {
    navNavMenu.className = "nav-menu";
  }
})

// TASK 2 -- Select an Icon
var divOptions = document.querySelectorAll(".wish-list .option")
for (i=0;i<divOptions.length;i++) {
  var currentOption = divOptions[i];
  currentOption.addEventListener("click", function(){
    var clickOccurrence = event.currentTarget;
    if (clickOccurrence.className.indexOf("selected") === -1) {
      clickOccurrence.className = "option selected";
    } else if (clickOccurrence.className.indexOf("selected") !== -1) {
      clickOccurrence.className = "option";
    }
  })
};

// TASK 3 -- Move Item From List to List
var buttonsAddPoints = document.querySelectorAll("#add-vals .point");
var h4TotalPoints = document.querySelector("#add-vals .total-points")
var pointTotalVal = parseInt(h4TotalPoints.textContent);
for (i=0;i<buttonsAddPoints.length;i++) {
  var currentButton = buttonsAddPoints[i];
  currentButton.addEventListener("click", function(){
    var pointVal = parseInt(event.currentTarget.textContent);
    pointTotalVal += pointVal;
    h4TotalPoints.textContent = pointTotalVal;
  })
};

// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
