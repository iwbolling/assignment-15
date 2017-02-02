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
var divGoodStandingList = document.querySelector("#list-2-list .good-standing-list");
var divProbationList = document.querySelector("#list-2-list .probation-list");
var listItemAllNames = document.querySelectorAll("#list-2-list li");
for (i=0;i<listItemAllNames.length;i++) {
  var currentName = listItemAllNames[i];
  currentName.addEventListener("click", function(){
    var currentList = event.currentTarget.parentNode.className;
    if (currentList === divGoodStandingList.className) {
      divGoodStandingList.removeChild(event.currentTarget);
      divProbationList.appendChild(event.currentTarget);
    } else if (currentList === divProbationList.className) {
      divProbationList.removeChild(event.currentTarget);
      divGoodStandingList.appendChild(event.currentTarget);
    }
  })
};

  // if statement for which section a list item is in
  // removeChild from the section an item is in
  // appendChild to the other section

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
