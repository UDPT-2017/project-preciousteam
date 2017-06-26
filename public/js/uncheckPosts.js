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
                   text: "Check post successfully!",
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
                   text: "Cancel post successfully!",
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
						// msg = 'Internal Server Error [500].';
						window.location.href = "/404/2";
						window.load();
				}
      }
    })
  }
