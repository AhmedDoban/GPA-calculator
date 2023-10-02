// selectElement = document.querySelector("#GRADE");
// var oInputs = new Array();
// oInputs = document.getElementsByTagName("input");

// var sum = 0;
// var res = 0;
// var n = 0;
// var nOfHours = 0;
// function GPA() {
//   for (i = 0; i < oInputs.length; i++) {
//     if (oInputs[i].type == "number") {
//       n = oInputs[i].value;
//     }
//   }
//   output = selectElement.options[selectElement.selectedIndex].value;
//   nOfHours = nOfHours + n;
//   res = res + n * output;
// }
// function ADD() {
//   var course = document.getElementById("CourseName").value;
//   var degree = document.getElementById("CourseHour").value;
//   output = selectElement.options[selectElement.selectedIndex].value;
//   var table = document.getElementsByTagName("table")[0];
//   var newRow = table.insertRow(table.rows.length);
//   var cell0 = newRow.insertCell(0);
//   var cell2 = newRow.insertCell(1);
//   var cell3 = newRow.insertCell(2);
//   cell0.innerHTML = course;
//   cell2.innerHTML = degree;
//   cell3.innerHTML = output;
//   GPA();
// }
// function Calc() {
//   var x = document.getElementById("prosses");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

//   while (nOfHours != 0) {
//     sum = sum + (nOfHours % 10);
//     nOfHours = parseInt(nOfHours / 10);
//   }
//   res = res / sum;
//   document.querySelector(".output").textContent = res;
//   reset();
// }
// function reset() {
//   sum = 0;
//   res = 0;
//   n = 0;
//   nOfHours = 0;
// }

/*******************************************************
# Navmenu
**********************************************************/
const TogleNavbar = document.querySelector(".togglemanu");
const main_Nav = document.querySelector(".main-nav");
TogleNavbar.addEventListener("click", (e) => {
  main_Nav.classList.toggle("active");
});

/*******************************************************
# table handelar
**********************************************************/
const semester_inputs_container = document.querySelector(
  ".semester-inputs tbody"
);
const addbtn = document.querySelector(".addbtn");

const table_ROW_Maker = () => {
  const tr = document.createElement("tr");
  //Course Name
  const tdCourseName = document.createElement("td");
  const CourseNameInput = document.createElement("input");
  CourseNameInput.placeholder = "Course Name";
  tdCourseName.appendChild(CourseNameInput);
  // Grade
  const tdGrade = document.createElement("td");
  const tdGradeOptions = [
    "",
    { text: "A+", value: 4 },
    { text: "A", value: 4 },
    { text: "A-", value: 3.7 },
    { text: "B+", value: 3.3 },
    { text: "B", value: 3 },
    { text: "B-", value: 2.7 },
    { text: "C+", value: 2.3 },
    { text: "C", value: 2 },
    { text: "C-", value: 1.7 },
    { text: "D+", value: 1.3 },
    { text: "D", value: 1 },
    { text: "F", value: 0 },
  ];
  const OptionSelct = document.createElement("select");
  tdGradeOptions.map((element) => {
    const tdGrade = document.createElement("option");
    if (element === "") {
      tdGrade.disabled = true;
      tdGrade.selected = true;
      tdGrade.innerHTML = "Grade";
      OptionSelct.appendChild(tdGrade);
      return;
    }
    tdGrade.value = element.value;
    tdGrade.innerHTML = element.text;

    OptionSelct.appendChild(tdGrade);
  });
  OptionSelct.classList.add("GPAGrade");
  OptionSelct.onchange = updateToal;
  tdGrade.appendChild(OptionSelct);
  // Credits
  const tdCredits = document.createElement("td");
  const CreditsInput = document.createElement("input");
  CreditsInput.placeholder = "Credits";
  CreditsInput.classList.add("CreditsInput");
  CreditsInput.onchange = updateToal;
  tdCredits.appendChild(CreditsInput);
  // Trash
  const tdTrash = document.createElement("td");
  const tdTrashDiv = document.createElement("div");
  tdTrashDiv.onclick = DeleteHandelar;
  tdTrashDiv.classList.add("DeleteCourse");
  const tdTrashI = document.createElement("i");
  tdTrashI.classList.add("fa-solid", "fa-trash");
  tdTrashDiv.appendChild(tdTrashI);
  tdTrash.appendChild(tdTrashDiv);

  tr.appendChild(tdCourseName);
  tr.appendChild(tdGrade);
  tr.appendChild(tdCredits);
  tr.appendChild(tdTrash);
  semester_inputs_container.appendChild(tr);
};

addbtn.onclick = () => {
  table_ROW_Maker();
};

const DeleteHandelar = () => {
  const DeleteCourse = document.querySelectorAll(".DeleteCourse");
  DeleteCourse.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      ele.parentElement.parentElement.remove();
      updateToal();
    });
  });
};

const updateToal = () => {
  const TotalGpa = document.querySelector(".TotalGpa");
  const CreditsInput = document.querySelectorAll(".CreditsInput");
  const Grade = document.querySelectorAll(".GPAGrade");
  let GradeArr = [];
  let CreditsInputArr = [];
  let Total_Hours = 0;
  let GPA = 0;
  Grade.forEach((grade) => {
    if (+grade !== "") {
      GradeArr.push(+grade.value);
    }
  });
  CreditsInput.forEach((e) => {
    if (+e.value !== "") {
      Total_Hours += +e.value;
      CreditsInputArr.push(+e.value);
    }
  });
  for (let i = 0; i < GradeArr.length; i++) {
    GPA += GradeArr[i] * CreditsInputArr[i];
  }
  console.log();

  if ((GPA / Total_Hours).toFixed(2) === "NaN") {
    TotalGpa.innerHTML = (0.0).toFixed(2);
    return;
  }
  TotalGpa.innerHTML = (GPA / Total_Hours).toFixed(2);
};
