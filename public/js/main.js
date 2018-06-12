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