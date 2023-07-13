const config = require('../../dbconfig');

class DatabaseActions {
    execute_query(query) {
        var mysql = require('mysql');
        var connection = mysql.createConnection(config);

        connection.connect();

        connection.query(query, function (error, results) {
            if (error) throw error;
            console.log(results);
        });

        connection.end();
    }

    insert_to_table(table, datatable) {
        var data = datatable.raw()
        var aux = '';
        var aux_2 = '';
        alert(data)

        // Get columns
        for (var i = 0; i < data[0].length; i++) {
            var pivot = data[0].length - i
            if (pivot === 1) {
                aux = aux + data[0][i];
            }
            else {
                aux = aux + data[0][i] + ', ';
            }
        }

        // Get values
        for (var j = 0; j < data.lenght; j++) {
            alert("for")
            for (var n = 0; n < data[0].length; n++) {

                alert(n);
                aux_2 = aux_2 + data[j + 1][n];
            }
        }

        var query = 'INSERT INTO ' + table + ' (' + aux + ') ' + 'VALUES ('
        alert(query)

    }
}

export default DatabaseActions;