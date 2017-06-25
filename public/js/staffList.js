$(document).ready(function(){
  $('#staffTable').DataTable({
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
    "paging": true,
    "pagingType": "full_numbers"
  });
});


$(document).ready(function() {
    var table = $('#staffTable').DataTable();
    $('#staffTable tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        window.location.href = "/userDetail/" + data[0];
        window.load();
    } );
} );
