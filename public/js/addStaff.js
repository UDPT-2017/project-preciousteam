    $("#btnAdd").click(function(){
          let pass = $('#pass').val();
          let email = $('#email').val();
          let name = $('#name').val();
          let phone = $('#phone').val();
          $.ajax({
          type: 'POST',
          data: { pass: pass, email:email, name:name, phone:phone},
          url: '/addStaff',
          success: function(data, res){
            if (data.localeCompare('1') === 0)
            {
              // alert("Thành công rồi kià");
              swal({
                       title: "Success!",
                       text: "Add staff successfully!",
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
            if (jqXHR.status == 404) {
              window.location.href = "/404/1";
              window.load();
            } else{
                // msg = 'Internal Server Error [500].';
                window.location.href = "/404/2";
                window.load();
            }
          }
        })
    });
