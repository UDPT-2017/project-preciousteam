    $("#btnAdd").click(function(){
          let pass = $('#pass').val();
          let email = $('#email').val();
          let name = $('#name').val();
          let phone = $('#phone').val();
          $.ajax({
          type: 'POST',
          data: { pass: pass, email:email, name:name, phone:phone},
          url: '/addStaff',
          success: function(data){
            if (data.localeCompare('1') === 0)
            {
              // alert("Thành công rồi kià");
              swal({
                       title: "Success!",
                       text: "Add staff successful!",
                       type: "success",
                      confirmButtonText: "Cool"
                    });
                    $('#pass').val("");
                    $('#email').val("");
                    $('#name').val("");
                    $('#phone').val("");
            }
            else if(data.localeCompare('-1') === 0)
            {
              // alert("Email trùng rồi")
              swal({
                    title: "Oops!!",
                    text: "Email has been used!!",
                    type: "error",
                    confirmButtonText: "Try again",
                    confirmButtonColor: "#DD6B55"
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
          }
        })
    });
