var template= document.getElementById('index').innerHTML;
		var compilar= Handlebars.compile(template);

		var informacion = {
			paquete_tipo: [
				{
					tipo: "Básic",
					precio: 9,
					disk_space: "100MG",
					monthly_traffic: "200MB",
					subdomains: 2,
					email_accounts: 5,
					webmail_support: "white",
					mySQL_support:"grey",
					espacio_blanco:"white",
					espacio_gris:"gris"
				},
				{
					tipo: "Corporate",
					precio:14,
					disk_space: "300MG",
					monthly_traffic: "400MB",
					subdomains: 5,
					email_accounts: 10,
					color: "white",
					siete: "PHP5 Suport"
				},
				{
					tipo: "Bussines",
					precio: 29,
					disk_space: "1GB",
					monthly_traffic: "1GB",
					subdomains: 10,
					email_accounts: 25,
					color: "black",
					siete: "PHP5 Suport",
					ocho: "Piesk Control Panel"
				},
				{
					tipo: "Platinum",
					precio: 59,
					disk_space: "5GB",
					monthly_traffic: "Unimited",
					subdomains: "Unimited",
					email_accounts: "Unimited",
					color: "white",
					siete: "PHP5 Suport",
					ocho: "Piesk Control Panel",
					nueve: "Spam Asasing"
				}
			]
		}

		var compiladoHTML = compilar(informacion);
		document.getElementById("action").innerHTML += compiladoHTML;