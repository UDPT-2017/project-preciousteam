 $(document).ready(function() {
$('#log-in').click(function(e){
    e.preventDefault();
    var email = $('#email').val();
    var pass = $('#pass').val();
    login(email, pass);
    return false;
})

login = function(email, pass){
    $.ajax({
        type: 'POST',
        data: {"em": email, "password": pass},
        success: function(data){
            window.location = data;
            alert(data);
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
        alert(msg);
    }
    })

}
 })

