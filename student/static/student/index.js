var students = [];
var num_time = [];

function addNumber() {
  var num_input = document.getElementById('numberInput');
  num_time = [];
  var time = Math.floor(Math.random() * 360000);

  num_time.push(num_input.value);
  num_time.push(time);

  students.push(num_time);

  num_input.value = '';
  displayNumbers();
}

function displayNumbers() {
  var tableBody = document.getElementById('numberTableBody');
  tableBody.innerHTML = '';
  
  var num_1 = document.getElementById('num_1')
  var time_1 = document.getElementById('time_1')
  var num_2 = document.getElementById('num_2')
  var time_2 = document.getElementById('time_2')
  var num_3 = document.getElementById('num_3')
  var time_3 = document.getElementById('time_3')
  
  students.sort((a, b) => b[1] - a[1]);
  
  for (var i = 0; i < students.length; i++) {
    
    var search_input = document.getElementById('searchInput')
    var row = document.createElement('tr');
    var rankcell = document.createElement('td');
    var numcell = document.createElement('td');
    var timecell = document.createElement('td');
    
    var hours = Math.floor(students[i][1]/3600)
    var minutes = Math.floor((students[i][1]%3600)/60)
    var seconds = students[i][1]%60

    if (students[i][0].slice(0, search_input.value.length) == search_input.value)  {
      rankcell.innerHTML = i+1;
      numcell.innerHTML = students[i][0];
      timecell.innerHTML = hours + ':' + minutes + ':' + seconds;
  
      row.appendChild(rankcell);
      row.appendChild(numcell);
      row.appendChild(timecell);
      tableBody.appendChild(row);
    } 
      
    if (i==0) {
      num_1.innerHTML = students[i][0];
      time_1.innerHTML = hours + ':' + minutes + ':' + seconds;
    }
    if (i==1) {
      num_2.innerHTML = students[i][0];
      time_2.innerHTML = hours + ':' + minutes + ':' + seconds;
    }
    if (i==2) {
      num_3.innerHTML = students[i][0];
      time_3.innerHTML = hours + ':' + minutes + ':' + seconds;
    }

    
  }
}

