$(document).ready(function() {
	 const picnum = $('.price').length;
	 let total = 0;
	  for (let i = 0; i<picnum; i++)
	  {
	  	let originPrice = ($('.price').eq(i)).text();
	  	let percent = ($('.dis').eq(i)).text();
	  	let price = originPrice * ($('.quan').eq(i)).text() - (originPrice * percent)/100;
	  	($('.item_price').eq(i)).text(price);
	  	total += price;

	  }
	  total = "Total: $" + total;
	  $('.total-price').text(total);

		  $(".close1").bind("click", function(Event){
		  	const ele = $(this).parent().parent();
		  	const index = $('.close1').index($(this));
		  	swal({
			  	title: "Wait!!",
			  	text: "Are you sure you want to delete this item??",
			  	type: "warning",
			  	confirmButtonText: "Yes",
			  	cancelButtonText: "Nah, I don't think so",
			  	showCancelButton: true
				},
				function(isConfirm){
					if (isConfirm)
					{
						$.ajax({
							type: 'POST',
							data: {productid: ($('.hidden').eq(index)).text()},
							url: '/deleteItem',
							success: function(data){
								if (data.localeCompare("1") == 0)
								{
								  	ele.fadeOut('slow', function(Event){
										$(this).remove();
									});
								}
								else
								{
									//500
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

					}
				})
		  	

         });

	$('#pay').click(function(){
		$.ajax({
			type: 'POST',
			url: '/checkout',
			success: function(data){
				if (data.localeCompare("1") == 0)
					{
						swal("Success!", "Order successfully!", "success")
					}
				else
					{
						//500
					}
			},
			error: function(jqXHR, exception) {
		        let msg = '';
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

	});
});