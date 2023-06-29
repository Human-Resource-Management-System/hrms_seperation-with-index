<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Pennant HRMS</title>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>



<link rel="stylesheet" type="text/css" href="./css/index2.css">






<script src="https://code.jquery.com/jquery-3.7.0.min.js"
	integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
	crossorigin="anonymous"></script>

<!-- Fontawesome CDN Link -->
<script
	src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
<link
	href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
	rel="stylesheet">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />

</head>
<body>
	<nav class="sidebar">
		<a href="#" class="logo">EMPLOYEE</a>

		<div class="menu-content">
			<ul class="menu-items">

				<li class="item"><a onclick="loadStatistics()"><i
						class="ri-booklet-line"></i> Dashboard </a></li>
				<li class="item"><a onclick="viewProfile()"><i
						class="ri-bar-chart-line"></i> Profile</a></li>

				<li class="item">
					<div class="submenu-item">
						<span><i class="ri-handbag-line"></i> Master Data</span> <i
							class="fa-solid fa-chevron-right"></i>
					</div>

					<ul class="menu-items submenu">
						<div class="menu-title">
							<i class="fa-solid fa-chevron-left"></i> Back to Master Data
						</div>
						<li class="item"><a onclick="getHolidays()"><i
								class="ri-calendar-line"></i> Holidays</a></li>
						<li class="item"><a onclick="getLeaves()"><i
								class="ri-file-list-line"></i> Leaves</a></li>
					</ul>
				</li>
				<li class="item">
					<div class="submenu-item">
						<span><i class="ri-user-line"></i> ALMS</span> <i
							class="fa-solid fa-chevron-right"></i>
					</div>

					<ul class="menu-items submenu">
						<div class="menu-title">
							<i class="fa-solid fa-chevron-left"></i> Back to ALMS
						</div>
						<li class="item"><a onclick="applyLeaves()"><i
								class="ri-file-list-line"></i> Apply Leaves</a></li>
						<li class="item"><a onclick="getPermissions()"><i
								class="ri-check-double-line"></i> Permissions</a></li>
						<li class="item"><a onclick="viewAttendance()"><i
								class="ri-time-line"></i> Attendance</a></li>
					</ul>
				</li>

				<li class="item"><a onclick="getRefdoc()"><span
						class="icon"><i class="ri-booklet-line"></i></span> Ref Documents</a>
				</li>
				<li class="item"><a onclick="getPayslip()"><span
						class="icon"><i class="ri-file-line"></i></span> Payslips</a></li>
				<li class="item"><a onclick="logout()"><span class="icon"><i
							class="ri-logout-box-r-line"></i></span> Logout</a></li>
			</ul>
		</div>
	</nav>

	<nav class="navbar">
		<i class="fa-solid fa-bars" id="sidebar-close"></i>
	</nav>

	<main class="main">
		<h1>Welcome to Pennant Technologies....</h1>
	</main>




	<script src="./js/index2.js"></script>




</body>
</html>

