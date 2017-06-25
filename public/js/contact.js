

$("#btnSend").click(function(){
      $.ajax({
      type: 'POST',
      data: {email:$('#email').val(), subject:$('#subject').val(), message:$('#msg').val()},
      url: '/contact',
      success: function(data){
        if (data.localeCompare('1') === 0)
        {
          swal({
                   title: "Success!",
                   text: "Send message successful!",
                   type: "success",
                  confirmButtonText: "Cool"
                },
                function (isConfirm) {
                  if (isConfirm) {
                        location.reload();
                  }
              });
        }
				else{
          // alert("Lỗi do định mệnh");
          swal({
                title: "Oops!!",
                text: "That's our fault, please try again!!",
                type: "error",
                confirmButtonText: "Try again",
                confirmButtonColor: "#DD6B55"
              });
        }
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
              text: msg,
              type: "error",
              confirmButtonText: "Try again",
              confirmButtonColor: "#DD6B55"
            });
            console.log(msg);
      }
    });
    return false;
  });
