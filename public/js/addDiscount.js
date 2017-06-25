$(document).ready(function(){
  document.getElementById("fd").value = new Date().toJSON().slice(0,10);
  document.getElementById("ld").value = new Date().toJSON().slice(0,10);
  $('#fd').on('change', function(){
    let first = $("#fd").val();
    $("#ld").attr({
      "min" : first          // values (or variables) here
   });
  });

  $('#done').on('click', function(){
    let productID = $("#pr").find("option:selected").val();
    let percent = $("#pe").val();
    let first = $("#fd").val();
    let last = $("#ld").val();
    $.ajax({
    type: 'POST',
    data: { productID: productID, percent:percent, first:first, last:last},
    url: '/addDiscount',
    success: function(data){
      if (data.localeCompare('1') === 0)
      {
        // alert("Thành công rồi kià");
        swal({
                 title: "Success!",
                 text: "Add discount successfully!",
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
    }
  })
  });
});
