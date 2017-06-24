$(document).ready(function(){
  $('#inboxTable').DataTable({
    "lengthMenu": [[10, 12, 15, -1], [10, 12, 15, "All"]],
    "paging": true,
    "pagingType": "full_numbers"
  });
});

$(document).ready(function() {
    var table = $('#inboxTable').DataTable();
    $('#inboxTable tbody').on('click', 'tr', function () {
        var datas = table.row( this ).data();
        // alert( 'You clicked on '+data[0]+'\'s row' );
        // Get the modal
        var modal = document.getElementById('myModal');

        // // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
            window.location.reload();
        }

        document.getElementById('messageid').innerHTML = "Message ID: " + datas[0];
        document.getElementById('sender').innerHTML = datas[1];
        document.getElementById('subject').innerHTML = datas[2];
        document.getElementById('message').innerHTML = datas[3];
        document.getElementById('time').innerHTML = datas[4];

        modal.style.display = "block";

        $.ajax({
        type: 'POST',
        data: { messageid: datas[0]},
        url: '/mailbox',
        success: function(data){

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
        }
      });
    });
} );
