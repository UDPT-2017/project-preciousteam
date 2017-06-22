var errror = false;
 $(document).ready(function() {

     $('#signUpForm').submit(function() {
                $(this).ajaxSubmit({
                    type: 'POST',
                    data: {
                        "name": $('#name').val(),
                        "tel": $('#tel').val(),
                        "email": $('#email').val(),
                        "pass": $('#pass').val()
                    },
                    error: function(xhr) {
                            status('Error: ' + xhr.status);
                    },
                    success: function(data) {
                        //console.log(response)
                        //$("#status").empty().text(response);
                        if (data.localeCompare('1') === 0)
                        {
                            
                        }
                        else if (data.localeCompare('0') === 0)
                        {
                            //show 500 error   
                        }
                    }
                });
}) 
 });

function readURL(input) {
    alert('hehe');
        if (input.files && input.files[0]) {
             alert('hoho');
            var reader = new FileReader();
            
            reader.addEventListener('load', function (ev) {
              alert(ev.target.result);
                $('#profile').attr('src', ev.target.result);
            });
            /*reader.onload = function (e) {
                alert(e.target.result);
                $('#profile').attr('src', e.target.result);
            };*/
            
            reader.readAsDataURL(input.files[0]);
        }
    }

