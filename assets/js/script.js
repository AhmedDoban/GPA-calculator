selectElement = document.querySelector('#GRADE');
var oInputs = new Array();
oInputs = document.getElementsByTagName( 'input' ) ;

var sum = 0;
var res = 0;
var n   = 0;
var nOfHours=0;
function GPA(){
    for ( i = 0; i < oInputs.length; i++ )
    { 
        if ( oInputs[i].type == 'number' )
        {
            n=oInputs[i].value;
        }
    }
  output = selectElement.options[selectElement.selectedIndex].value;
  nOfHours=nOfHours+n;
  res=(res+(n*output));
} 
function ADD(){
  var course = document.getElementById('CourseName').value;
  var degree =document.getElementById('CourseHour').value;
  output = selectElement.options[selectElement.selectedIndex].value;
  var table = document.getElementsByTagName('table')[0];
  var newRow = table.insertRow(table.rows.length);
  var cell0 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  cell0.innerHTML=course;
  cell2.innerHTML=degree;
  cell3.innerHTML=output;
  GPA();
}
function Calc(){
  var x = document.getElementById('prosses');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  while (nOfHours != 0) {
    sum = sum + nOfHours % 10;
    nOfHours = parseInt(nOfHours / 10);
  }
  res=res/sum;
  document.querySelector('.output').textContent = res;
  reset();
}
function reset(){
 sum = 0;
 res = 0;
 n   = 0;
 nOfHours=0;
 }




