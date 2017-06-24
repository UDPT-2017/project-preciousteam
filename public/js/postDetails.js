var user = {
	userID: 1,
	email: 'phuongthanh@gmail.com',
	name: 'Phương Thanh',
	phone: '0123547863',
	type: '0',
	state: '1',
};

function checkPost(productID, btn){
      $.ajax({
      type: 'POST',
      data: {productID:productID, userID:user.userID, btn:btn},
      url: '/newPosts',
      success: function(data){
        if (data.localeCompare('1') === 0)
        {
          // alert("Thành công rồi kià");
          swal({
                   title: "Success!",
                   text: "Check post successful!",
                   type: "success",
                  confirmButtonText: "Cool"
                },
                function (isConfirm) {
                  if (isConfirm) {
                        location.reload();
                  }
              });
        }
        else if(data.localeCompare('2') === 0){
					swal({
                   title: "Success!",
                   text: "Delete post successful!",
                   type: "success",
                  confirmButtonText: "Cool"
                },
                function (isConfirm) {
                  if (isConfirm) {
										window.location.href = "/allPosts";
										window.load();
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
    })
  }
