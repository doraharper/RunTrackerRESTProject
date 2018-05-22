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
function deleteRun(run){
	
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/runs/' + run.id, true);
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
	location.reload();
}
function updateRun(evt){
	evt.preventDefault();
	var form = document.updateForm;
	var run = {
			name: form.name.value,
			age: form.age.value,
			distanceInMiles: form.distanceInMiles.value,
			timeInMin: form.timeInMin.value
			
	};
	var runJson = JSON.stringify(run);
	
	
	var xhr = new XMLHttpRequest();
	xhr.open('PATCH', 'api/runs/' + form.runId.value, true);
	xhr.onreadystatechange = function(){
		if(this.readyState === 4){
			if(this.status === 200){
				  var newRunJson = this.responseText;
			      var newRun = JSON.parse(runJson);
				
				console.log("success");
			}
			else{
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
		
	};
	xhr.send(runJson);
}

function updateForm(run){
	console.log(run);
	var runDiv = document.getElementById('runData');
	var form = document.createElement('form');
	var distanceInput = document.createElement('input');
	var distanceLabel = document.createElement('label');
	var nameInput = document.createElement('input');
	var nameLabel = document.createElement('lable');
	var timeInput = document.createElement('input');
	var timeLabel = document.createElement('lable');
	var ageInput = document.createElement('input');
	var ageLabel = document.createElement('lable');
	var br = document.createElement('br');
	var hr = document.createElement('hr');
	var submit = document.createElement('button');
	var id = document.createElement('input');
	
	form.name = "updateForm";
	id.name = "runId";
	id.type = "hidden";
	id.value = run.id;
	
	ageInput.name = "age"
	ageInput.value = run.age;
	ageLabel.textContent = "Age ";
	
	nameInput.name = "name";
	nameInput.value = run.name;
	nameLabel.textContent = "Name "
	
	timeInput.name = "timeInMin";
	timeInput.value = run.timeInMin;
	timeLabel.textContent = "Time in Minutes ";
	
	distanceInput.name = "distanceInMiles";
	distanceInput.value = run.distanceInMiles;
	distanceLabel.textContent = "Distance in Miles ";
	submit.textContent = "update";
	
	submit.addEventListener('click', updateRun);
	
	form.appendChild(nameLabel);
	form.appendChild(nameInput);
	nameInput.appendChild(br);
	form.appendChild(ageLabel);
	form.appendChild(ageInput);
	form.appendChild(br);
	form.appendChild(distanceLabel);
	form.appendChild(distanceInput);
	form.appendChild(br);
	form.appendChild(timeLabel);
	form.appendChild(timeInput);
	form.appendChild(hr);
	form.appendChild(submit);
	form.appendChild(id);
	runDiv.appendChild(form);
	
	

	
}

function displayRun(run){
	var runDiv = document.getElementById('runData');
	runDiv.textContent = '';
	
	var name = document.createElement('h1');
	var age = document.createElement('h3');
	var date = document.createElement('p');
	var time = document.createElement('p');
	var distance = document.createElement('p');
	var del = document.createElement('button');
	var update = document.createElement('button');
	var hr = document.createElement('hr');
	var id = document.createElement('input');
	
	id.name = "runId";
	id.type = "hidden";
	id.value = run.id;
	name.textContent = run.name;
	age.textContent = "Age: "+ run.age;
	date.textContent = "Date created: " + run.date;
	distance.textContent = "Distance in miles: " + run.distanceInMiles;
	time.textContent = "Time in minutes: " + run.timeInMin;
	del.textContent = "Delete";
	update.textContent = "Update";
	
	del.addEventListener('click', function(){
		console.log("delete button clicked");	
		deleteRun(run);
		
	});
		
		
	
	update.addEventListener('click', function(){
		console.log("update button clicked")
		var runDiv = document.getElementById('runData');
		runDiv.textContent ='';
		
		updateForm(run);
		
	});

	runDiv.appendChild(name);
	runDiv.appendChild(age);
	runDiv.appendChild(date);
	runDiv.appendChild(distance);
	runDiv.appendChild(time);
	runDiv.appendChild(del);
	runDiv.appendChild(update);
	runDiv.appendChild(id);
	runDiv.appendChild(hr);

	
//	document.runData.deleted.addEventListener('click', deleteRun);
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
	        	console.error(xhr.status + ': ' + xhr.responseText);
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
 th.textContent = "User Name";
 
 console.log(runs);
 var counter = 0;
 runs.forEach(function(run){
	 counter += 1;
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
 	var tr = document.createElement('h3');
 	tr.textContent = "Total runs: " + counter + ".";
 	div.appendChild(tr);
} 

