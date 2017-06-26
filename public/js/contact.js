

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
        if (jqXHR.status == 404) {
          window.location.href = "/404/1";
          window.load();
        } else{
            window.location.href = "/404/2";
            window.load();
        }
      }
    });
    return false;
  });
