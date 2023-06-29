<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pennant HRMS</title>
    <link rel="stylesheet" href="style.css" />
 
 
    <!-- Fontawesome CDN Link -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    
    
  
    
   <link rel="stylesheet" type="text/css" href="./css/Index_admin.css">
            <script src="./js/Index_admin.js"></script>

    
  </head>
  <body>
    <nav class="sidebar">
      <a href="#" class="logo">ADMIN</a>

      <div class="menu-content">
        <ul class="menu-items">
          <div class="menu-title"><i class="ri-dashboard-line"></i>
            DashBoard
          </div>

          <li class="item">
            <a href="#"><i class="ri-bar-chart-line"></i> Profile</a>
          </li>
          
 <li class="item">
            <a onclick = "getcandidates();"><i class="ri-bar-chart-line"></i> Candidates</a>
          </li>

          <li class="item">
            <div class="submenu-item">
              <span><i class="ri-handbag-line"></i> Offer Letters</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <ul class="menu-items submenu">
              <div class="menu-title">
                <i class="fa-solid fa-chevron-left"></i>
                Back to Offer Letters
              </div>
             
              <li class="item">
              <a href="javascript:void(0)" onclick="providedOffers();"><i class="ri-calendar-line"></i> Provided</a>
              </li>
              
               <li class="item">
                <a href="javascript:void(0)"  onclick="issueOffer();"><i class="ri-file-list-line"></i> Issue</a>
              </li>
              
            </ul>
          </li>
          
<li class="item">
            <div class="submenu-item">
              <span><i class="ri-handbag-line"></i> Induction</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <ul class="menu-items submenu">
              <div class="menu-title">
                <i class="fa-solid fa-chevron-left"></i>
                Back to Induction
              </div>
             
              <li class="item">
              <a href="javascript:void(0)" onclick="getInductions();"><i class="ri-calendar-line"></i> Insert</a>
              </li>
              
               <li class="item">
                <a href="javascript:void(0)" onclick="viewInductions();"><i class="ri-file-list-line"></i> View</a>
              </li>
              
            </ul>
          </li>
          
          <li class="item">
            <a onclick = "getemployees();"><i class="ri-bar-chart-line"></i> Employees</a>
          </li>

          
           
          
          <li class="item">
            <div class="submenu-item">
              <span><i class="ri-user-line"></i> Master Data</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <ul class="menu-items submenu">
              <div class="menu-title">
                <i class="fa-solid fa-chevron-left"></i>
                Back to Master Data
              </div>
              <li class="item">
                <a onclick="getHolidays();"><i class="ri-file-list-line"></i> Holidays</a>
              </li>
              <li class="item">
                <a onclick="getHolidaysByGrade();"><i class="ri-file-list-line"></i> Grade Wise Holidays</a>
              </li>
              <li class="item">
                <a onclick="getLeavesByGrade();"><i class="ri-check-double-line"></i>Grade Wise Leaves</a>
              </li>
            </ul>
          </li>
          
           <li class="item">
            <div class="submenu-item">
              <span><i class="ri-user-line"></i> ALMS</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <ul class="menu-items submenu">
              <div class="menu-title">
                <i class="fa-solid fa-chevron-left"></i>
                Back to ALMS
              </div>
              <li class="item">
                <a onclick="uploadAttendance();"><i class="ri-file-list-line"></i> Upload Attendance</a>
              </li>
               <li class="item">
                <a onclick="viewAttendance();"><i class="ri-file-list-line"></i> View Attendance</a>
              </li>
              <li class="item">
              <li class="item">
                <a onclick="getLeaveRequests();"><i class="ri-check-double-line"></i> LeaveRequests</a>
              </li>
              <li class="item">
                <a onclick="getApprovedLeaves();"><i class="ri-check-double-line"></i> Approved Leaves</a>
              </li>
               <li class="item">
                <a onclick="permissionsToBeApproved();"><i class="ri-check-double-line"></i> Permissions</a>
              </li>
            </ul>
          </li>
          
          <li class="item">
            <div class="submenu-item">
              <span><i class="ri-user-line"></i> Documents</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <ul class="menu-items submenu">
              <div class="menu-title">
                <i class="fa-solid fa-chevron-left"></i>
                Back to Documents
              </div>
              <li class="item">
                <a onclick="referenceDoc();"><i class="ri-check-double-line"></i> Employee Reference</a>
              </li>
               <li class="item">
                <a onclick="inductiondoc();"><i class="ri-check-double-line"></i> Induction Document</a>
              </li>
            </ul>
          </li>
          
          <li class="item">
            <a onclick="generatePayroll();"><span class="icon"><i class="ri-booklet-line"></i></span> Payrolls</a>
          </li>
          <li class="item">
            <a onclick="logout()"><span class="icon"><i class="ri-logout-box-r-line"></i></span> Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <nav class="navbar">
      <i class="fa-solid fa-bars" id="sidebar-close"></i>
    </nav>

<div class="main" id="main">
   <!--  <main class="main" id="main"  height="600px" width="600px">
      <h1>Welcome Admin to Pennant Technologies....</h1>
    </main> -->
    
</div>

   
  </body>

            <script src="./js/Index_admin1.js"></script>

 
</html>

