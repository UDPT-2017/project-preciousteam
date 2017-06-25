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
      if (jqXHR.status == 404) {
        window.location.href = "/404/1";
        window.load();
      } else{
          window.location.href = "/404/2";
          window.load();
      }
    }
  })
  });
});
