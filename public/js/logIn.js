$('#log-in').click(function(){
	var email = $('#email').val();
	var pass = $('#pass').val();
    alert(email + pass);
	login(email, pass);
})

login = function(email, pass){
	$.ajax({
		type: 'POST',
        //contentType: "application/json",
		//data: JSON.stringify( {"em": email, "password": pass}),
        data: {"em": email, "password": pass},
		url: '/logIn',
		success: function(data){
			window.location = data;
		},
		error: function(jqXHR, exception) {
        var msg = '';
        if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
        } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
         swal({
            title: "Oops!!",
            text: "You might mistype your email or password!!",
            type: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#DD6B55"
        });
    }
	})
}