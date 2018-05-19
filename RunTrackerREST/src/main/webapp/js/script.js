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
		else{
			
		}
	});
	
	
	
	loadRunIndex();
}

function loadRunIndex(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/runs');
	xhr.onreadystatechange = function(){
		if(this.readyState === 4) {
			if (this.status === 200) {
				var runs = JSON.parse(this.responseText);
				displayRunIndex(runs);
			}
		}
	};
	xhr.send(null)
}

function displayRunIndex(runs){
 var div = document.getElementById('runIndex');
 var table = document.createElement('table');
 console.log(runs);
 div.appendChild(table);
 runs.forEach(function(run){
	 var tr = document.createElement('tr');
	 tr.runId = run.id;
	 
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




































