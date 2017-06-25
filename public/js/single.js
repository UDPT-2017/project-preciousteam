
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
	}};

	function addReview(customerid, productid){
		const content = $('#content').val();
		if (content.localeCompare("") == 0)
		{
			swal({
			   title: "Oops!!",
			   text: "Comment can't be empty",
			   type: "error",
			   confirmButtonText: "Try again",
			   confirmButtonColor: "#DD6B55"
        	});
		}
		else
		{

			

			$.ajax({
				type: 'POST',
				url: '/addReview',
				data: {customerid: customerid, productid: productid, detail: content},
				success: function(data){
					if (data.localeCompare("1") == 0)
					{
						addComment(content);
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
			
		}
	}

	function addComment(content){
		let $cmt = $( "<div class='comments-info'></div>" );	
			let $cmtLeft = $("<div class='cmnt-icon-left'></div> ");	
			let $cmtRight = $("<div class='cmnt-icon-right'></div> ");
			let $date = $("<p></p>");
			let $uName = $("<p></p>");
			let $uCon = $("<p class='cmmnt'></p>");
			let $uPic = $("<img class='cmtPic'/>");
			let $clear =  $( "<div class='clearfix'></div>" );
			let CurrentDate = moment().fromNow();
			$('#comment').append($cmt);
			$cmt.append($cmtLeft, $cmtRight, $clear);
			$cmtLeft.append($uPic);
			$cmtRight.append($date, $uName, $uCon);
			$date.text(CurrentDate);
			$uName.text($('#em').text());
			$uCon.text(content);
			$uPic.attr("src", $('#pic').attr("src"));
	}

