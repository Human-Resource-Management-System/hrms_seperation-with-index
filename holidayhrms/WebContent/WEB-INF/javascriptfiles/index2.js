 
 const sidebar = document.querySelector(".sidebar");
 const sidebarClose = document.querySelector("#sidebar-close");
 const menu = document.querySelector(".menu-content");
 const menuItems = document.querySelectorAll(".submenu-item");
 const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

 sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

 menuItems.forEach((item, index) => {
   item.addEventListener("click", () => {
     menu.classList.add("submenu-active");
     item.classList.add("show-submenu");
     menuItems.forEach((item2, index2) => {
       if (index !== index2) {
         item2.classList.remove("show-submenu");
       }
     });
   });
 });

 subMenuTitles.forEach((title) => {
   title.addEventListener("click", () => {
     menu.classList.remove("submenu-active");
   });
 });
 
 
 function loadStatistics() {
	 var main = $('.main');
	 main.empty();

	 var row = $('<div class="row"></div>');

	 var graphContainer1 = $('<div class="graph-container-wrapper"><div class="graph-container"></div></div>');
	 var graphCanvas1 = $('<canvas id="punch"></canvas>');
	 graphContainer1.find('.graph-container').append(graphCanvas1);
	 var graphMessage1 = $('<div class="graph-message">Punch in/Punch out for yesterday</div>');
	 graphContainer1.append(graphMessage1);
	 row.append(graphContainer1);

	 // Add space between the graphs
	 row.append('<div class="graph-space"></div>');

	 var graphContainer2 = $('<div class="graph-container-wrapper"><div class="graph-container"></div></div>');
	 var graphCanvas2 = $('<canvas id="pie"></canvas>');
	 graphContainer2.find('.graph-container').append(graphCanvas2);
	 var graphMessage2 = $('<div class="graph-message">Leaves & Permissions</div>');
	 graphContainer2.append(graphMessage2);
	 row.append(graphContainer2);

	 main.append(row);

	 var dataFields = $('<div class="row right"></div>');
	 
	 
	 // field 1
	 
	 var field = $('<div class="col right"><div class="field" id="field1">0</div></div>');
var fieldMessage = $('<div class="field-message" id="msg1">No of leaves taken</div>');
	 field.append(fieldMessage);
	 dataFields.append(field);
	 

		 
		// field 3
		  field = $('<div class="col right"><div class="field" id="field3">8</div></div>');
		  fieldMessage = $('<div class="field-message" id="msg3">No of permissions taken</div>');
		  field.append(fieldMessage);
			 dataFields.append(field);
			 

				 field = $('<div class="col right"><div class="field" id="field5"></div></div>');
				  fieldMessage = $('<div class="field-message" id="msg5">Average Punch in</div>');
				  field.append(fieldMessage);
					 dataFields.append(field);
			   
				
					// field 6
					 field = $('<div class="col right"><div class="field" id="field6"></div></div>');
					  fieldMessage = $('<div class="field-message" id="msg6">Average punch out</div>');
					  field.append(fieldMessage);
						 dataFields.append(field);
	  
						 
					
						 
// 	 for (var i = 1; i <= 6; i++) {
		 
// 	   var field = $('<div class="col right"><div class="field">Field ' + i + '</div></div>');
// 	   var fieldMessage = $('<div class="field-message">Message for Field ' + i + '</div>');
// 	   field.append(fieldMessage);
// 	   dataFields.append(field);
// 	 }

	 // Add space between the fields
	 dataFields.append('<div class="field-space"></div>');

	 main.append(dataFields);

	 

	 $.ajax({
		 url:"getAvgPunchInAndOut",
		 type:"GET",
		 success:function(response){
			 var punchData = JSON.parse(response);
			 console.log(punchData[0]);
			 var punchhrs = Math.floor(punchData[0]/60);
			 var remainingMinutes = punchData[0] % 60; 
			 
			 $('#field5').text(punchhrs + " hrs " + remainingMinutes + " mins");
			 
			 punchhrs = Math.floor(punchData[1]/60);
			 remainingMinutes = punchData[1] % 60; 
			 
			$('#field6').text(punchhrs + " hrs " + remainingMinutes + " mins");
		 },
		 error:function(error){
			 console.log(error);
		 }
		 
	 });
	 
	 $.ajax({
		 url:"permissionStatistics",
		 type:"GET",
		 success:function(response){
			 console.log(response);
			 
			 $('#field3').text(response);
			 
		 },
		 error:function(error){
			 console.log(error);
		 }
		 
	 });
	 
	 createPunchGraph();
	 
	 
	 var piegraphdata;
	 
	 $.ajax({
		 url:"getLeaveStatistics",
		 type:"GET",
		 success:function(response){
			 console.log(JSON.parse(response));
			 var piegraphdata = JSON.parse(response);
			 $('#field1').text(piegraphdata.takenTotalLeaves);
			 createPieGraph(piegraphdata.allowedTotalLeaves,piegraphdata.takenTotalLeaves,24, $('#field3').val());
		 },
		 error:function(error){
			 console.log(error);
		 }
		 
	 });
	 
	 
	  
	}

 
 function createPieGraph(totalLeaves,leavesUsed,totalPermissions,permissionsUsed){

	    var data = {
	      labels: ["Leaves Available (per Year)", "Leaves Used", "Permissions Available (per Year)", "Permissions Used"],
	      datasets: [
	        {
	          data: [totalLeaves - leavesUsed, leavesUsed, totalPermissions - permissionsUsed, permissionsUsed],
	          backgroundColor: ["#c2e0a3", "#ff7373", "#98c1d9", "#ffb347"],
	        }
	      ]
	    };

	    var options = {
	      responsive: true,
	      maintainAspectRatio: false
	    };

	    var ctx = document.getElementById("pie").getContext("2d");
	    var pieChart = new Chart(ctx, {
	      type: "pie",
	      data: data,
	      options: options
	    });
 }
 

 
 
 function createPunchGraph() {
	  $.ajax({
	    url: "punchData",
	    type: "GET",
	    success: function(response) {
	      console.log(response);
	      const punchData = JSON.parse(response);

	      const times = punchData.map(data => data.time);
	      const events = punchData.map(data =>
	        data.event === "Punch In"
	          ? { value: 1, label: "Punch In" }
	          : { value: -1, label: "Punch Out" }
	      );

	      const ctx = document.getElementById("punch").getContext("2d");
	      new Chart(ctx, {
	        type: "bar",
	        data: {
	          labels: times,
	          datasets: [
	            {
	              label: "Punch In/Punch Out",
	              data: events.map(event => event.value),
	              backgroundColor: "rgba(54, 162, 235, 0.5)",
	              borderColor: "rgba(54, 162, 235, 1)",
	              borderWidth: 1
	            }
	          ]
	        },
	        options: {
	          responsive: true,
	          maintainAspectRatio: false,
	          scales: {
	            x: {
	              grid: {
	                display: false
	              }
	            },
	            y: {
	              ticks: {
	                stepSize: 1
	              }
	            }
	          },
	          plugins: {
	            tooltip: {
	              callbacks: {
	                label: function(context) {
	                  const event = events[context.dataIndex];
	                  return event.label;
	                }
	              }
	            }
	          }
	        }
	      });
	    },
	    error: function(error) {
	      console.log(error);
	    }
	  });
	}



 function getHolidays() {
	 console.log("hello");
	 $(".main").empty();
    	  $.ajax({
    	    type: "POST",
    	    url: "holidaysupd",
    	    data: {},
    	    success: function(response) {
    	      var containerDiv = $(".main");
    	      containerDiv.html(response);
    	     
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	}

    
    
    function getyourtHolidays() {
  	  $.ajax({
  	    type: "POST",
  	    url: "yourholidays",
  	    data: {},
  	    success: function(response) {
  	      var containerDiv = $(".main");
  	      containerDiv.html(response);
  	     
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}

    
    function getPermissions() {
  	  $.ajax({
  	    type: "POST",
  	    url: "getpermissions",
  	    data: {},
  	    success: function(response) {
  	      var containerDiv = $(".main");
  	      containerDiv.html(response);
  	     
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}

   
    function applyLeaves() {
  	  $.ajax({
  	    type: "GET",
  	    url: "leaveform",
  	    success: function(response) {
  	      var containerDiv = $(".main");
  	      containerDiv.html(response);
  	     
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}
    
    function viewAttendance() {
    	  $.ajax({
    	    type: "GET",
    	    url: "employeeAttendance",
    	    success: function(response) {
    	      var containerDiv = $(".main");
    	      containerDiv.html(response);
    	     
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	}
    
    function getLeaves() {
  	  $.ajax({
  	    type: "GET",
  	    url: "geEmployeeLeaves",
  	    success: function(response) {
  	      var containerDiv = $(".main");
  	      containerDiv.html(response);
  	     
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}
    
    function viewProfile() {
    	  $.ajax({
    	    type: "GET",
    	    url: "toprofile",
    	    success: function(response) {
    	      var containerDiv = $(".main");
    	      containerDiv.html(response);
    	     
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	}
    
    function getPayslip() {
  	  $.ajax({
  	    type: "GET",
  	    url: "getemppayslip",
  	    success: function(response) {
  	      var containerDiv = $(".main");
  	      containerDiv.html(response);
  	     
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}
    
    
    function getRefdoc() {
  	  $.ajax({
  	    type: "GET",
  	    url: "emprefDocuments",
  	    success: function(response) {
  	      var containerDiv = $(".main");
  	      containerDiv.html(response);
  	     
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}
    
    
    function logout(){
    	$.ajax({
    		url:"logout",
    		type:"GET",
    		success:function(response){
    			window.location.href='./';
    		},
    		error:function(error){
    			console.log(error);
    		}
    		
    	});
    }
    