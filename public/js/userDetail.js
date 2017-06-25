$("#btnAdd").click(function(){
     let u = $('#uid').val();
      $.ajax({
      type: 'POST',
      data: {userID: u},
      url: '/userDetail/'+ u,
      success: function(data){
        if (data.localeCompare('1') === 0)
        {
          // alert("Thành công rồi kià");
          swal({
                   title: "Success!",
                   text: "Block user successfully!",
                   type: "success",
                  confirmButtonText: "Cool"
                });
                $('#pass').val("");
                $('#email').val("");
                $('#name').val("");
                $('#phone').val("");
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
