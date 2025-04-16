var url = "https://mysql-api-postres.onrender.com/api/postres";

function postPostre() {

    console.log(url);

    var myNombre = $('#nombre').val();
    var myDescripcion = $('#descripcion').val();
    var myCategoria = $('#categoria').val();
    var myPrecio = $('#precio').val();
    var myStock = $('#stock').val();

    var mypostre = {
        nombre: myNombre,
        descripcion: myDescripcion,
        categoria: myCategoria,
        precio: myPrecio,
	stock: myStock
    };
    console.log(mypostre);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.postre));
        },
        data: JSON.stringify(mypostre)
    });
}
function getPostre() {
    console.log(url);

    $.getJSON(url, function(json) {
        console.log(json);

        var arrPostres = json.postre;

        var htmlTablePostres = '<table border="1">';

        arrPostres.forEach(function(item) {
            console.log(item);
            htmlTablePostres += '<tr>' +
                                '<td>' + item.id + '</td>' +
                                '<td>' + item.nombre + '</td>' +
                                '<td>' + item.descripcion + '</td>' +
                                '<td>' + item.categoria + '</td>' +
                                '<td>' + item.precio + '</td>' +
			        '<td>' + item.stock + '</td>' +
                              '</tr>';
        });

        htmlTablePostres += '</table>';

        $('#resultado').html(htmlTablePostres);
    });
}

