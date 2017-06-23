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
        var data = table.row( this ).data();
        // alert( 'You clicked on '+data[0]+'\'s row' );
        // Get the modal
        var modal = document.getElementById('myModal');

        // // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        document.getElementById('sender').innerHTML = data[0];
        document.getElementById('subject').innerHTML = data[1];
        document.getElementById('message').innerHTML = data[2];
        document.getElementById('time').innerHTML = data[3];

        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it
        // $(window).onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        // }
    } );
} );
