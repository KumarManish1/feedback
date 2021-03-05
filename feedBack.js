 function Clear() {
            document.getElementById("first").value = "";
            document.getElementById("middle").value = "";
            document.getElementById("last").value = "";
            document.querySelector('input[name="gender"]:checked').checked = false;
            document.getElementById("sugges").value = "";
        }
        function input() {
            debugger;
           // alert("Hello!");
            var fname = document.getElementById("first").value;
            var midmame = document.getElementById("middle").value;
            var lastname = document.getElementById("last").value;
           var Gender = document.querySelector('input[name="gender"]:checked').value;
           alert("fname");
            //var feedback = document.getElementById("mytest").value;
            var suggestion = document.getElementById("sugges").value;
            var d = new Date();
            //alert(fname.length);
            if (fname == "" ) {
                alert("Please inpur your first name. ");
            }
            else if (lastname == "")
            {
                alert("Please inpur your last name. ");
            }
            else if (fname.length > 40 || midmame.length > 40 || lastname.length > 40)
            {
                alert("Please inpur your name in 40 char ");
            }
            else{
                if (midmame.trim() == "")
                    name = Gender + " " + fname.trim() + " " + lastname.trim();
                else {
                    name = Gender + " " + fname.trim() + " " + midmame.trim() + " " + lastname.trim()
                    }
            } 
            feedback += "\n" + "Name: " + name + "\n" + "Suggestion: " + suggestion + "\n" + d + "\n";
        //    document.getElementById("mytest").value = feedback;
           

        }