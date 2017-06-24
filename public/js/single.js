
	function put2cart(proQuan, productid){
				let quan = $('#quan').text();
				if (quan > proQuan)
				{
					swal({
			            title: "Oops!!",
			            text: "This product is currently out of stock!!",
			            type: "error",
			            confirmButtonText: "Try again",
			            confirmButtonColor: "#DD6B55"
        			});
				}
				else
				{
					swal({
				  	title: "Wait!!",
				  	text: "Are you sure you want to put this product in your cart??",
				  	type: "warning",
				  	confirmButtonText: "Yes",
				  	cancelButtonText: "Nah, I don't think so",
				  	showCancelButton: true
					},
					function(isConfirm){
					if (isConfirm)
					{
						console.log($('#quan').val());
						$.ajax({
				        type: 'POST',
				        url: '/add2Cart',
				        data: {add : 1, productid: productid, quantity: quan},
				        success: function(data){
				            if (data.localeCompare("1") == 0)
				            {
				            	alert('This item has been added to your cart');
				            }
				            else if (data.localeCompare("-1") == 0)
				            {
								alert('Please sign in to buy');
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
				        alert(msg);
				    }
					})
				}})

		return false;
	}}

	