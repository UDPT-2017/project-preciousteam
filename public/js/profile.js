$(document).ready(function() {
	function readURL(input, element) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            element.attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
	}
	let changePic = 0;
	$('#change').click(function(){
		$('#phone').attr('disabled', false);
		$('#pass').attr('disabled', false);
	});
	$("#image").change(function(){
    	readURL(this, $('#profile'));
    	changePic = 1;
	});

	$('#updateForm').submit(function(e) {
                 e.preventDefault();
                 const tel = $('#phone').val();
                 const pass = $('#pass').val();
                $(this).ajaxSubmit({
                    type: 'POST',
                    data: {
                        "tel": tel,
                        "pass": pass,
                        changePic: changePic
                    },
                    url: '/user/updateProfile',
                    error: function(xhr) {
                            status('Error: ' + xhr.status);
                    },
                    success: function(data) {
                        if (data.localeCompare('1') === 0)
                        {
                            swal("Success!", "Your personal information has been updated!!", "success");
                        }
                        else if (data.localeCompare('0') === 0)
                        {
                            //show 500 error  
                            window.location = '/404/2'; 
                        }
                    }
                });
                return false;
}) 
})