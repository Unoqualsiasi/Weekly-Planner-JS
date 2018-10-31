var addArray, submitArray, openArray;

addArray = Array.prototype.slice.call(document.querySelectorAll(".add"));

submitArray = Array.prototype.slice.call(
  document.querySelectorAll(".submit-btn")
);

openArray = Array.prototype.slice.call(document.querySelectorAll(".open"));

class DayList {
  constructor() {
    this.b = document.getElementById("input3").value;
    var radios = document.getElementsByName("day");
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        var checkedRadio = radios[i].value;
        break;
      }
    }
    this.f = checkedRadio;
    this.g = ul_tasks.innerHTML;
  }

  createDay(dayNumber) {
    document.getElementById("btns_" + dayNumber + "_sub").style.display =
      "block";

    document.getElementById(
      "box_image_" + dayNumber
    ).style.backgroundImage = this.f;
  }

  openDay(dayNumber) {
    document.querySelector("#output8").innerHTML = this.b;
    var word = this.g;
    var todoHtml = `<div id='todolist' class='notes-item'>My tasks:<ul id='task_list_output'>${word}</ul></div>`;
    mynotes.insertAdjacentHTML("afterend", todoHtml);
    document.getElementById("close-day-" + dayNumber).style.display = "block";
  }

  changeDay() {
    var ul_tasks_output = document.getElementById("task_list_output").innerHTML;
    this.g = ul_tasks_output;
    this.b = document.querySelector("#output8").innerHTML;
  }
}

//FORM TODO LIST - TBC, IN PROGRESS...

var input_todo_form = document.getElementById("input_list");
var ul_tasks = document.getElementById("task_list");

function inputLength(element) {
  return element.value.length;
}

function createListElement() {
  var logo_done = document.createElement("img");
  logo_done.setAttribute("src", "images/completed.png");
  logo_done.setAttribute("alt", "logo done");
  logo_done.setAttribute("class", "logo_done");
  logo_done.setAttribute("height", "15px");
  logo_done.setAttribute("width", "15px");
  ul_tasks.appendChild(logo_done);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input_todo_form.value));
  ul_tasks.appendChild(li);
  input_todo_form.value = "";
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox_todo";
  checkbox.value = "test";
  checkbox.name = "todoscb";
  //checkbox.checked = false;
  ul_tasks.appendChild(checkbox);
  var br = document.createElement("br");
  ul_tasks.appendChild(br);
  document.getElementById("delete_todo_form").style.display = "block";
}

//DAY TODO LIST - TBC, IN PROGRESS...

var input_todo_day = document.getElementById("input_list_output");
var ul_tasks_day = document.getElementById("task_list_output");

function createListDay() {
  var ul_tasks_day = document.getElementById("task_list_output");
  var logo_done = document.createElement("img");
  logo_done.setAttribute("src", "images/completed.png");
  logo_done.setAttribute("alt", "logo done");
  logo_done.setAttribute("class", "logo_done");
  logo_done.setAttribute("height", "15px");
  logo_done.setAttribute("width", "15px");
  ul_tasks_day.appendChild(logo_done);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input_todo_day.value));
  ul_tasks_day.appendChild(li);
  input_todo_day.value = "";
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox_todo";
  checkbox.value = "test";
  checkbox.name = "todoscb";
  //checkbox.checked = false;
  ul_tasks_day.appendChild(checkbox);
  var br = document.createElement("br");
  ul_tasks_day.appendChild(br);
  document.getElementById("delete_todo_form").style.display = "block";
}

//VIEW OBJECT

var view = {
  todoListRemove: function() {
    var todolist = document.getElementById("todolist");
    todolist.remove();
  },

  disableAdd: function() {
    for (var i = 0; i < addArray.length; i++) {
      addArray[i].disabled = true;
    }
  },

  disableOpen: function() {
    for (var i = 0; i < openArray.length; i++) {
      openArray[i].disabled = true;
    }
  },

  enableAdd: function() {
    for (var i = 0; i < addArray.length; i++) {
      addArray[i].disabled = false;
    }
  },

  enableOpen: function() {
    for (var i = 0; i < openArray.length; i++) {
      openArray[i].disabled = false;
    }
  },

  displayForm: function() {
    document.getElementById("input3").value = "";
    document.getElementById("work").checked = true;
    document.getElementById("form-container").style.display = "flex";
    document.querySelector(".notes-box").style.display = "none";
    ul_tasks.innerHTML = "";
  },

  clearTodo: function() {
    ul_tasks.innerHTML = "";
  },

  undisplayForm: function() {
    for (var i = 0; i < submitArray.length; i++) {
      submitArray[i].style.display = "none";

      document.getElementById("form-container").style.display = "none";
    }
  },

  displaySubmit: function(el) {
    document.getElementById("btn_" + el).style.display = "block";
  },

  closeDay: function() {
    document.querySelector(".notes-box").style.display = "none";
    var closeSave = Array.prototype.slice.call(
      document.querySelectorAll(".close-save")
    );

    closeSave.forEach(element => {
      element.style.display = "none";
    });

    document.getElementById("close-day-1").style.display;
  },

  startFromToday: function(number) {
    document.getElementById("name" + number).innerHTML = "TODAY";
  },

  calculateProgress: function() {
    var todos_checked3 = Array.prototype.slice.call(
      document.getElementsByName("todoscb")
    );

    var x = 0;

    for (var i = 0, length = todos_checked3.length; i < length; i++) {
      if (
        todos_checked3[i].previousSibling.style.textDecoration ===
        "line-through"
      ) {
        var x = x + 1;
      }
    }

    var y = (x / todos_checked3.length) * 100;
    var widthPercentage = Math.round(y);

    if (isNaN(widthPercentage) || widthPercentage === 0) {
      document.getElementById("progressbar").style.width = "100%";
      document.getElementById("progressbar").innerHTML = "0% completed";
      document.getElementById("progressbar").style.backgroundColor = "grey";
    } else {
      document.getElementById("progressbar").style.width =
        widthPercentage * 1.8;
      document.getElementById("progressbar").style.backgroundColor = "orange";
      if (widthPercentage > 40) {
        document.getElementById("progressbar").innerHTML =
          widthPercentage + "% done";
      } else {
        document.getElementById("progressbar").innerHTML =
          widthPercentage + "%";
      }
    }
  },

  clearProgress: function() {
    document.getElementById("progressbar").style.width = "100%";
    document.getElementById("progressbar").innerHTML = "0% completed";
    document.getElementById("progressbar").style.backgroundColor = "grey";
  }
};

//SEVEN DAYS DISPLAY CONUNDRUM IN PROGRESS...

var date = new Date();
var today = date.toDateString();
var hellotoday = "Hi, today's " + today;
var day = date.getDay();
var currentDate;

function jumpToNextDay(date, numb) {
  currentDate = new Date(
    + date + (7 - ((date.getDay() + numb) % 7)) * 86400000
  ).toDateString();
  document.getElementById("background_text").innerHTML = currentDate;
}

function jumpToToday() {
  document.getElementById("background_text").innerHTML = hellotoday;
}

function notToday(dayNumber) {

  return document.getElementById("btns_" + dayNumber + "_sub").previousSibling.previousSibling
  .previousSibling.previousSibling.firstChild.firstChild.innerHTML !==
"TODAY";

}

//CLICK EVENT LISTENER

document.addEventListener(
  "click",
  function(event) {
    if (event.target.id.includes("btn_")) {
      view.enableAdd();
      view.undisplayForm();
      view.enableOpen();

      var eventbtn_submit = event.target;

      switch (eventbtn_submit.id) {
        case "btn_1":
          day1List = new DayList();
          day1List.createDay(1);
          view.clearTodo();
          break;

        case "btn_2":
          day2List = new DayList();
          day2List.createDay(2);
          view.clearTodo();
          break;

        case "btn_3":
          day3List = new DayList();
          day3List.createDay(3);
          view.clearTodo();
          break;

        case "btn_4":
          day4List = new DayList();
          day4List.createDay(4);
          view.clearTodo();
          break;

        case "btn_5":
          day5List = new DayList();
          day5List.createDay(5);
          view.clearTodo();
          break;

        case "btn_6":
          day6List = new DayList();
          day6List.createDay(6);
          view.clearTodo();
          break;

        case "btn_7":
          day7List = new DayList();
          day7List.createDay(7);
          view.clearTodo();
          break;

        default:
          break;
      }
    } else if (event.target.id.includes("-button")) {
      view.displayForm();
      view.disableAdd();
      var eventbtn_add = event.target.id;

      switch (eventbtn_add) {
        case "day1-button":
          view.displaySubmit(1);
          break;
        case "day2-button":
          view.displaySubmit(2);
          break;
        case "day3-button":
          view.displaySubmit(3);
          break;
        case "day4-button":
          view.displaySubmit(4);
          break;
        case "day5-button":
          view.displaySubmit(5);
          break;
        case "day6-button":
          view.displaySubmit(6);
          break;
        case "day7-button":
          view.displaySubmit(7);
          break;
        default:
          break;
      }
    } else if (event.target.id.includes("_sub")) {
      document.querySelector(".notes-box").style.display = "flex";
      view.undisplayForm();
      view.disableOpen();
      view.disableAdd();

      var eventbtn_open = event.target.id;

      if (eventbtn_open === "btns_1_sub") {
        if (
          notToday(1) 
        ) {
          jumpToNextDay(date, 6);
        } else {
          jumpToToday();
        }

        day1List.openDay(1);
      } else if (eventbtn_open === "btns_2_sub") {
        if (
          notToday(2) 
        ) {
          jumpToNextDay(date, 5);
        } else {
          jumpToToday();
        }
        day2List.openDay(2);
        view.calculateProgress();
      } else if (eventbtn_open === "btns_3_sub") {
        if (
          notToday(3) 
        ) {
          jumpToNextDay(date, 4);
        } else {
          jumpToToday();
        }
        day3List.openDay(3);
        view.calculateProgress();
      } else if (eventbtn_open === "btns_4_sub") {
        if (
          notToday(4) 
        ) {
          jumpToNextDay(date, 3);
        } else {
          jumpToToday();
        }
        day4List.openDay(4);
        view.calculateProgress();
      } else if (eventbtn_open === "btns_5_sub") {
        if (
          notToday(5) 
        ) {
          jumpToNextDay(date, 2);
        } else {
          jumpToToday();
        }
        day5List.openDay(5);
        view.calculateProgress();
      } else if (eventbtn_open === "btns_6_sub") {
        if (
          notToday(6) 
        ) {
          jumpToNextDay(date, 1);
        } else {
          jumpToToday();
        }
        day6List.openDay(6);
        view.calculateProgress();
      } else if (eventbtn_open === "btns_7_sub") {
        if (
          notToday(7) 
        ) {
          jumpToNextDay(date, 0);
        } else {
          jumpToToday();
        }
        day7List.openDay(7);
        view.calculateProgress();
      } else {
        return;
      }
    } else if (event.target.id.includes("close-day")) {
      var eventbtn_closesave = event.target.id;

      if (eventbtn_closesave === "close-day-1") {
        day1List.changeDay();
      } else if (eventbtn_closesave === "close-day-2") {
        day2List.changeDay();
      } else if (eventbtn_closesave === "close-day-3") {
        day3List.changeDay();
      } else if (eventbtn_closesave === "close-day-4") {
        day4List.changeDay();
      } else if (eventbtn_closesave === "close-day-5") {
        day5List.changeDay();
      } else if (eventbtn_closesave === "close-day-6") {
        day6List.changeDay();
      } else if (eventbtn_closesave === "close-day-7") {
        day7List.changeDay();
      } else {
        return;
      }

      view.closeDay();
      view.todoListRemove();
      view.enableAdd();
      view.enableOpen();
      view.clearProgress();
    } else if (event.target.id.includes("close-form")) {
      view.enableAdd();
      view.enableOpen();
      view.undisplayForm();
    } else if (event.target.id.includes("delete_todo_form")) {
      var todos_checked = document.getElementsByName("todoscb");
      for (var i = 0, length = todos_checked.length; i < length; i++) {
        if (todos_checked[i].checked) {
          todos_checked[i].previousSibling.remove();
          todos_checked[i].nextSibling.remove();
          todos_checked[i].remove();
          i--;
        }
      }
    } else if (event.target.id.includes("delete_output")) {
      var todos_checked = document.getElementsByName("todoscb");
      for (var i = 0, length = todos_checked.length; i < length; i++) {
        if (todos_checked[i].checked) {
          todos_checked[i].previousSibling.remove();
          todos_checked[i].previousSibling.remove();
          todos_checked[i].nextSibling.remove();
          todos_checked[i].remove();
          i--;
        }
        view.calculateProgress();
      }
    } else if (event.target.id.includes("completed")) {
      var todos_checked = document.getElementsByName("todoscb");
      for (var i = 0, length = todos_checked.length; i < length; i++) {
        if (todos_checked[i].checked) {
          todos_checked[i].previousSibling.style.textDecoration =
            "line-through";
          todos_checked[i].previousSibling.style.color = "grey";
          todos_checked[i].checked = false;

          todos_checked[i].previousSibling.previousSibling.style.display =
            "inline-block";
        }
      }
      view.calculateProgress();
    } else if (event.target.id.includes("enter")) {
      if (inputLength(input_todo_form) > 0) {
        createListElement();
      }
    } else if (event.target.id.includes("enter")) {
      if (inputLength(input_todo_form) > 0) {
        createListElement();
      }
    } else if (event.target.id.includes("add")) {
      if (inputLength(input_todo_day) > 0) {
        createListDay();
        view.calculateProgress();
      }
    }
  },
  false
);

document.addEventListener(
  "keypress",
  function(event) {
    if (event.target.id.includes("input_list")) {
      if (inputLength(input_todo_day) > 0 && event.keyCode === 13) {
        createListElement();
        view.calculateProgress();
      }
    }
  },
  false
);

//DAY ORDER ON LOAD

window.onload = function() {
  var dayWeek = new Date();
  var currentDay = dayWeek.getDay();

  if (currentDay === 1) {
    view.startFromToday(1);
  } else if (currentDay === 2) {
    document.getElementById("box1").style.order = 8;
    view.startFromToday(2);
  } else if (currentDay === 3) {
    document.getElementById("box1").style.order = 8;
    document.getElementById("box2").style.order = 9;
    view.startFromToday(3);
  } else if (currentDay === 4) {
    document.getElementById("box1").style.order = 8;
    document.getElementById("box2").style.order = 9;
    document.getElementById("box3").style.order = 10;
    view.startFromToday(4);
  } else if (currentDay === 5) {
    document.getElementById("box5").style.order = -3;
    document.getElementById("box6").style.order = -2;
    document.getElementById("box7").style.order = -1;
    view.startFromToday(5);
  } else if (currentDay === 6) {
    document.getElementById("box6").style.order = -2;
    document.getElementById("box7").style.order = -1;
    view.startFromToday(6);
  } else if (currentDay === 0) {
    document.getElementById("box7").style.order = -1;
    view.startFromToday(7);
  }
};
