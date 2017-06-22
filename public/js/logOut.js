document.getElementById('log-out').addEventListener('click', () => {
		swal({
	  	title: "Wait!!",
	  	text: "Are you sure you want to log out??",
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
					data: {logout: 1},
					url: '/logOut',
					success: function(data){
						window.location = data;
					}
				})

			}
			else
			{
				$.ajax({
					type: 'POST',
					data: {logout: 0},
					url: '/logOut'
				})
			}
		})
})