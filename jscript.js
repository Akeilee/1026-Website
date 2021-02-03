//when clicking on the answer box, the answer will be displayed (on lesson page)
function answer(){
	var a = document.getElementById("answer1");
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}

function answer1(){	
	var a1 = document.getElementById("answer2");
    if (a1.style.display === "none") {
        a1.style.display = "block";
    } else {
        a1.style.display = "none";
    }
}

function answer2(){	
	var a2 = document.getElementById("answer3");
    if (a2.style.display === "none") {
        a2.style.display = "block";
    } else {
        a2.style.display = "none";
    }
}

//opening the navigation sidebar
function openNav() {
    document.getElementById("sideBar").style.width = "200px";
}

function closeNav() {
    document.getElementById("sideBar").style.width = "0";
}

//validation checks for the search bar
function validate(){
	var x = document.forms["search"]["searchhere"].value;
	if (x == "") {
		alert("Did not search anything!");
		return false;
	}
}

//validation check for the forms
function validateForm() {
    var x = document.forms["contactUs"]["fullName"].value;
    if (x == "") {
        alert("Please enter a Name");
        return false;
    }
	
	var y = document.forms["contactUs"]["emailAdd"].value;
    if (!y.includes("@")) { //must include an @ symbol
        alert("Please enter a valid email");
        return false;
    }
	
	var z = document.forms["contactUs"]["dropdown"].value;
	if (z == "blank") {
		alert("Please select a choice");
		return false;
		}
}

//validation checks for the login
function validateAccount(){	
    var e = document.forms["account"]["emailA"].value;
    if (!e.includes("@")) {
        alert("Please enter your email");
        return false;
    }		
	
	 var p = document.forms["account"]["passA"].value;
    if (p == "") {
        alert("Please enter your password");
        return false;
    }	
}

//validation checks for the registering
function validateAccount2(){	
    var n = document.forms["account2"]["fname"].value;
    if (n == "") {
        alert("Please enter a Name");
        return false;
    }
	
	var ea = document.forms["account2"]["remail"].value;
    if (!ea.includes("@")) {
        alert("Please enter a valid email");
        return false;
    }
	
	var p1 = document.forms["account2"]["rpass"].value;
    if (p1 == "") {
        alert("Please enter a password");
        return false;
    }
	
	//password must be the same as p1
	var p2 = document.forms["account2"]["passrepeat"].value;
    if (!p2.includes(p1)) {
        alert("Passwords do not match!");
        return false;
    }
	
	//must select yes or no
    var c = document.getElementsByName("choiceC");
    var valid = false;
    var i = 0;
    while (!valid && i < c.length) {
        if (c[i].checked) valid = true;
        i++;        
    }
    if (!valid) 
		{alert("Please select an option");
		return valid;}
	
	//must tick checkbox
	var at = document.getElementsByName("agreeTerms");
    var term = false;
    var i = 0;
    while (!term && i < at.length) {
        if (at[i].checked) term = true;
        i++;        
    }
    if (!term) 
		{alert("Please agree to the terms and conditions");
		return term;}
	
}


	var mods = document.getElementById('modal'); //modals (reference: https://www.w3schools.com/howto/howto_css_modals.asp)
	var mods2 = document.getElementById('modal2');
	var click = document.getElementById("ClickHere"); //open modal button
	var click2 = document.getElementById("ClickHere2")
	var span = document.getElementsByClassName("exit")[0]; //closes the modal

function openLog() { //opens the login modal
		document.getElementById('modal').style.display = "block";	
}

function openLog2(){ //opens the register modal
	document.getElementById('modal2').style.display = "block";
}
	
function closeLog() { //closes modal when clicked on the x
		document.getElementById('modal').style.display = "none";
		document.getElementById('modal2').style.display = "none";
}
