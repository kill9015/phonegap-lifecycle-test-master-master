// declared variables
var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
/*var key = "keys";
var value = "silver";
var key = "phone"; */
 

    function onLoad() {
        // Event listener for device ready or not
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready"); 
        window.localStorage.setItem("pen", "blue");
        window.localStorage.setItem("phone", "brown");
        window.localStorage.setItem("keys", "silver");
        window.localStorage.setItem("wallet", "black");
        window.localStorage.setItem("USB", "red");
       
        var calling = window.localStorage.getItem("pen");
        var calling2 = window.localStorage.getItem("phone");
        var calling3 = window.localStorage.getItem("keys");
        var calling4 = window.localStorage.getItem("wallet");
        var calling5 = window.localStorage.getItem("USB");
        window.alert(calling);
        window.alert(calling2);
        window.alert(calling3);
        window.alert(calling4);
        window.alert(calling5);
        
     /*   {var choclate = [ 
        {"anoreo": "Dairy Milk with Oreo"}
       {"calories": "84"}
    console.log( choclate.anoreo + "has" + choclate.calories);
    ]}  */
    }
	
	function updateDisplay() {
        // Function for when the applcation is launched, paused or resumed
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
        // refers to event listener at the top of document 
		alert("device ready");
        // when user hits resume/pause the opposite command will be changed to false  
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    // creates the function that pauses the screen for user, also displays alert message informing them 
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	// creates a function what resumes the program for the user, will also display an alert box informing them of this 
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }