    function getHolidays() {
    	  $.ajax({
    	    type: "GET",
    	    url: "holidaysupd",    	  
    	    success: function(response) {
    	      var containerDiv = $("#main");
    	      containerDiv.html(response);

    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	}

    function getCandidates() {
  	  $.ajax({
  	    type: "POST",
  	    url: "candidates",
  	    data: {},
  	    success: function(response) {
  	      var containerDiv = $("#main");
  	      containerDiv.html(response);
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}

    
    
    function getemployees() {
  	  $.ajax({
  	    type: "POST",
  	    url: "employees",
  	    data: {},
  	    success: function(response) {
  	      var containerDiv = $("#main");
  	      containerDiv.html(response);
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}
    
    function getcandidates() {
    	  $.ajax({
    	    type: "POST",
    	    url: "viewcandidates",
    	    data: {},
    	    success: function(response) {
    	      var containerDiv = $("#main");
    	      containerDiv.html(response);
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	}
    
    function referenceDoc() {
  	  $.ajax({
  	    type: "GET",
  	    url: "viewDocuments",
  	    success: function(response) {
  	      var containerDiv = $("#main");
  	      containerDiv.html(response);
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}
    
    function inductiondoc() {
    	  $.ajax({
    	    type: "GET",
    	    url: "getform",
    	    success: function(response) {
    	      var containerDiv = $("#main");
    	      containerDiv.html(response);
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	}
    
    function getInductions() {
    	  $.ajax({
    	    type: "GET",
    	    url: "inductioninsert",
    	    data: {},
    	    success: function(response) {
    	      var containerDiv = $("#main");
    	      containerDiv.html(response);
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	}
    
    function viewInductions() {
  	  $.ajax({
  	    type: "POST",
  	    url: "inductionlist",
  	  
  	    success: function(response) {
  	      var containerDiv = $("#main");
  	      containerDiv.html(response);
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	}
    
    function getLeaveRequests() {
    	  $.ajax({
    	    type: "GET",
    	    url: "leaveRequests",
    	   
    	    success: function(response) {
    	      var containerDiv = $("#main");
    	      containerDiv.html(response);
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	}
    
    function getApprovedLeaves() {
  	  $.ajax({
  	    type: "GET",
  	    url: "AdminapprovedLeaves",
  	   
  	    success: function(response) {
  	      var containerDiv = $("#main");
  	      containerDiv.html(response);
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	} 
    
    function uploadAttendance() {
    	  $.ajax({
    	    type: "GET",
    	    url: "attendanceform",
    	   
    	    success: function(response) {
    	      var containerDiv = $("#main");
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
    	    url: "adminAttendance",
    	   
    	    success: function(response) {
    	      var containerDiv = $("#main");
    	      containerDiv.html(response);
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	} 
    
    function permissionsToBeApproved() {
  	  $.ajax({
  	    type: "POST",
  	    url: "adminviewpermissions",
  	   
  	    success: function(response) {
  	      var containerDiv = $("#main");
  	      containerDiv.html(response);
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	} 
  
    function generatePayroll() {
    	  $.ajax({
    	    type: "GET",
    	    url: "getemppayroll",
    	   
    	    success: function(response) {
    	      var containerDiv = $("#main");
    	      containerDiv.html(response);
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	} 
    
    function issueOffer() {
  	  $.ajax({
  	    type: "GET",
  	    url: "issue",
  	   
  	    success: function(response) {
  	      var containerDiv = $("#main");
  	      containerDiv.html(response);
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	} 
    
    function providedOffers() {
    	  $.ajax({
    	    type: "GET",
    	    url: "provided",
    	   
    	    success: function(response) {
    	      var containerDiv = $("#main");
    	      containerDiv.html(response);
    	    },
    	    error: function() {
    	      alert("Error occurred. Please try again later.");
    	    }
    	  });
    	} 
    
    function getLeavesByGrade() {
  	  $.ajax({
  	    type: "GET",
  	    url: "getJobGradeWiseLeaves",
  	   
  	    success: function(response) {
  	      var containerDiv = $("#main");
  	      containerDiv.html(response);
  	    },
  	    error: function() {
  	      alert("Error occurred. Please try again later.");
  	    }
  	  });
  	} 
    
    function getHolidaysByGrade() {
    	  $.ajax({
    	    type: "GET",
    	    url: "getgradewiseholidays",
    	   
    	    success: function(response) {
    	      var containerDiv = $("#main");
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