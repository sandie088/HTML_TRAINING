function sayHello() {
    alert("Hello");
};

function showAlert() {
    console.log("inside showAlert");
    if ($("#myAlert").find("div#myAlert2").length == 0) {
        console.log("if check valid");
        //Adding append html code here in case no alert is configured in HTML and it is defined to be used in multiple places
        $("#myAlert").append("<div class='alert alert-success alert-dismissable' id='myAlert2'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button> Success! message sent successfully.</div>");
    }
    $("#myAlert").css("display", "");
}

function closeAlert() {
    console.log("inside close alert()");
    if($("#closeableAlert").contains("guacamole"))
    {
        $("#closeableAlert").alert('close');
    }
}