function input()
{
	//let feedbackform=document.querySelector("form");
	var status=true;
	var fname=document.getElementById("first").value;
	if ((fname == "")||(fname.length>40)) 
	{
        alert("First name must be required and less than 40 characters.");
		document.getElementById("first").focus();
		status=false;
    }
	var mname=document.getElementById("middle").value;
	if(status)
	{
		var lname=document.getElementById("last").value;
		if ((lname == "")||(lname.length>40))
		{
        alert("Last name must be required and less than 40 characters.");
		document.getElementById("last").focus();
		status=false;
		}
	}
	if(status)
	{
		var gender=true;
		if(document.getElementById("male").checked)
			gender="Mr.";
		else if(document.getElementById("female").checked)
			gender="Mrs.";
		if(gender==true)
		{
			alert("Please select your gender.");
			document.getElementById("male").focus();
			status=false;
		}
	}
	if(status)
	{
		var fullName= gender + " " + fname + " " + mname + " " + lname + "'s suggestion:-";
		var suggest = document.getElementById("suggestions").value;
		var feedback=document.getElementById("mytest").value;
        if(suggest=="")
		{
			alert("Please give your feedback");
			document.getElementById("suggestions").focus();
		}
		else
		{ 
			feedback=fullName + "<br/> <br/>" + suggest + feedback;
	
			document.getElementById("mytest").innerHTML=feedback;
		}

	}
}
