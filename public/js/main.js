$(function () {
    'use strict';

    function resetAll() {
        $('#table-users').hide();
        $('#table-users > tbody tr').empty();
        $('#error-message').hide();
    }

    resetAll();

    $('#populate-users').on('click', function () {
        var $this = $(this);
        $this.hide();

        resetAll();

        $.ajax({
                url: '/api/users'
            })
            .done(function (users) {
                /**
                 * Add the users to the table
                 */
                var num_rows = document.getElementById('table-users-body').value;
				var num_cols = document.getElementById('table-users-body').value; 
				var thead = '<table border="1">\n';
				var tbody = '';
					 
				for( var i=0; i<num_rows;i++){
					tbody += '<tr>';
					for( var j=0; j<	num_cols;j++){
                        
							tbody += '<td>';
							tbody += 'user.username ' + i + '' + j;
							tbody += '</td>'
							tbody += '<td>';
							tbody += 'user.firstname ' + '' + 'user.lastname' ;
							tbody += '</td>'
						}
						tbody += '</tr>\n';
					}
					var tfooter = '</table>';
					document.getElementById('table-users').innerHTML = thead + tbody + tfooter;

                $('#table-users').show();
            })
            .fail(function () {
                $('#error-message').show();
            })
            .always(function () {
                $this.show();
            });

        return false;
    });
});
