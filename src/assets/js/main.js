var template= document.getElementById('index').innerHTML;
		var compilar= Handlebars.compile(template);

		var informacion = {
			paquete_tipo: [
				{
					tipo: "Básic",
					disk: "100MG",
					monthly: "200MB",
					sub: 2,
					email: 5,
					precio: 9,
					color: "white"
				},
				{
					tipo: "Corporate",
					disk: "300MG",
					monthly: "400MB",
					sub: 5,
					email: 10,
					precio:14,
					color: "white",
					siete: "PHP5 Suport"
				},
				{
					tipo: "Bussines",
					disk: "1GB",
					monthly: "1GB",
					sub: 10,
					email: 25,
					precio: 29,
					color: "black",
					siete: "PHP5 Suport",
					ocho: "Piesk Control Panel"
				},
				{
					tipo: "Platinum",
					disk: "5GB",
					monthly: "Unimited",
					sub: "Unimited",
					email: "Unimited",
					precio: 59,
					color: "white",
					siete: "PHP5 Suport",
					ocho: "Piesk Control Panel",
					nueve: "Spam Asasing"
				}
			]
		}

		var compiladoHTML = compilar(informacion);
		document.getElementById("action").innerHTML += compiladoHTML;