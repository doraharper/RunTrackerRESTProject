window.addEventListener('load', function(e){
	console.log('document loaded');
	init();

});

function init() {
	document.runForm.lookup.addEventListener('click', function(evt){
		evt.preventDefault();
		var runId = document.runForm.runId.value;
		if(!isNaN(runId) && runId > 0){
			getRun(runId);
		}
	});
	
	document.newRun.save.addEventListener('click', sendNewRun);
	
	loadRunIndex();
}

function getRun(runId){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/runs/' + runId, true);
	xhr.onreadystatechange = function(){
		if(this.readyState === 4){
			if(this.status === 200){
				var runJSON = this.responseText;
				var runObj = JSON.parse(runJSON);
				displayRun(runObj);
				console.log(runObj);
			}
			else{
				displayRunNotFound(runId);
			}
		}
		
	};
	xhr.send(null);
}

function displayRun(run){
	var runDiv = document.getElementById('runData');
	runDiv.textContent = '';
//	console.log(run)
	
	var name = document.createElement('h1');
	var age = document.createElement('h3');
	var date = document.createElement('p');
	var time = document.createElement('p');
	var distance = document.createElement('p');
	
	name.textContent = run.name;
	age.textContent = "Age: "+ run.age;
	date.textContent = "Date created: " + run.date;
	distance.textContent = "Distance in miles: " + run.distanceInMiles;
	time.textContent = "Time in minutes: " + run.timeInMin;
	
	runDiv.appendChild(name);
	runDiv.appendChild(age);
	runDiv.appendChild(date);
	runDiv.appendChild(distance);
	runDiv.appendChild(time);
	
}

function displayRunNotFound(runId){
	var runDiv = document.getElementById('runData');
	runDiv.textContent = "Run "+ runId + " not found."
	}


function sendNewRun(evt){
	evt.preventDefault();
	var form = document.newRun;
	var run = {
			name: form.name.value,
			age: form.age.value,
			distanceInMiles: form.distanceInMiles.value,
			timeInMin: form.timeInMin.value
	};
	var runJson = JSON.stringify(run);
	console.log(run);
	var xhr = new XMLHttpRequest();
	  xhr.open('POST', 'api/runs'); 
	  xhr.setRequestHeader('Content-type','application/json');
	  xhr.onreadystatechange = function(){
		if (this.readyState === 4) {
		    if (this.status === 200 || this.status === 201) {
		      var newRunJson = this.responseText;
		      var newRun = JSON.parse(newRunJson);
		      displayRun(newRun);
		    }
	        else {
		        // display error or something
	        }
	    }
  }; 	 
  xhr.send(runJson);
}


function loadRunIndex(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/runs');
	xhr.onreadystatechange = function(){
		if(this.readyState === 4) {
			if (this.status === 200) {
				var runs = JSON.parse(this.responseText);
				displayRunIndex(runs);
				console.log(runs.length);
			}
		}
	};
	xhr.send(null)
}

function displayRunIndex(runs){
 var div = document.getElementById('runIndex');
 var table = document.createElement('table');
 div.appendChild(table);
 var thead = document.createElement('thead');
 table.appendChild(thead);
 var th = document.createElement('th');
 thead.appendChild(th);
 th.textContext = "User Name";
 
 console.log(runs);
 runs.forEach(function(run){
	 var tr = document.createElement('tr');
	 tr.runId = run.id;
	 thead.appendChild(tr);
	 var td = document.createElement('td');
	 td.textContent = run.name;
	 tr.appendChild(td);
	 table.appendChild(tr);
	 tr.addEventListener('click', function(evt){
		 var cell = evt.target;
		 console.log(cell.parentElement.runId);
		 var rid = cell.parentElement.runId;
		 if(!isNaN(rid && rid > 0)){
			 getRun(rid);
		 }
	 });
 });
} 

