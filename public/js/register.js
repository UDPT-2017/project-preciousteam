const FileReader = require('filereader');
$(document).ready(function(){
        $("#image").click(function(){
        alert('huchuc');
        //other uploading proccess [server side by ajax and form-data ]
    });

    $("#image").change(function(){
        alert('huchuc');
        readURL(this);
        //other uploading proccess [server side by ajax and form-data ]
    });

    $('#smit').click(function(){
    alert('huchuc');
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
}

