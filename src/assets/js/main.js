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
					webmail_support: " ",
					mySQL_support:" ",
					campo_extra:".",
					campo_extra2:". ",
					campo_extra3:" .",
					precio:9
				},
				{
					tipo: "Corporate",
					precio:14,
					disk_space: "300MG",
					monthly_traffic: "400MB",
					subdomains: 5,
					email_accounts: 10,
					webmail_support: " ",
					mySQL_support:" ",
					campo_extra:"PHP5 Support",
					campo_extra2:".",
					campo_extra3:".",
					precio:14
				},
				{
					tipo: "Bussines",
					color:"black",
					linea:"div-final2",
					color_blanco:"blanco",
					precio: 29,
					disk_space: "1GB",
					monthly_traffic: "1GB",
					subdomains: 10,
					email_accounts: 25,
					webmail_support: " ",
					mySQL_support:" ",
					campo_extra: "PHP5 Suport",
					campo_extra2: "Plesk Control Panel",
					campo_extra3:"."
				},
				{
					tipo: "Platinum",
					precio: 59,
					disk_space: "5GB",
					monthly_traffic: "Unimited",
					subdomains: "Unimited",
					email_accounts: "Unimited",
					webmail_support: " ",
					mySQL_support:" ",
					campo_extra: "PHP5 Suport",
					campo_extra2: "Plesk Control Panel",
					campo_extra3:"Span Assassin"
				}
			]
		}

		var compiladoHTML = compilar(informacion);
		document.getElementById("action").innerHTML += compiladoHTML;