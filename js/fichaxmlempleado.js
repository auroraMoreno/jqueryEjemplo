$(document).ready(function () {
    //var option = $("<option>");
    $.get("xml/ClientesXML.xml", function (data) {
        var clientes = $(data).find("CLIENTE");
        //var select = $("#listaEmpleados");
        clientes.each(function () {
            var id = $(this).attr("IDCLIENTE");
            var nombre = $(this).find("NOMBRE");
            var option = $("<option>", {
                "text": nombre.text(),
                "value": id
            });
            $("#listaEmpleados").append(option);
            $("#listaEmpleados").change(function () {
                var value = $(this).val();
                var filtro = "CLIENTE[IDCLIENTE=" + value + "]";
                console.log(filtro);
                var empleados = $(data).find(filtro);
                if (empleados.length == 0) {
                    $("#datosEmpleados").html("<h1> " + "Sin resultados" + "</h1>");
                } else {
                    var html = "";
                    empleados.each(function () {
                        var nombre = $(this).find("NOMBRE").text();
                        var direccion = $(this).find("DIRECCION").text();
                        var email = $(this).find("EMAIL").text();
                        var codigoPostal = $(this).find("CODIGOPOSTAL").text();
                        var paginaweb = $(this).find("PAGINAWEB").text();
                        var img = $(this).find("IMAGENCLIENTE").text();
                        html += "<h2>" + nombre + "</h2>" + "<img src='" + img + "'class='img-thumbnail'/>" + "<p>" + direccion + "</p>"
                            + "<p>" + email + "</p>" + "<p>" + codigoPostal + "</p>" + "<p>" + "<a href='" + paginaweb + "'>" + paginaweb + "</a></p>";
                    });
                    $("#datosEmpleados").html(html);
                }

            });
        });
    });
});
