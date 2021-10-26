proxy_location({country: 'cl'});
country('cl');
let negocio = ["Venta", "Arriendo"];
let url = `https://www.toctoc.com`;
navigate(url, {timeout: 60000});

if (el_is_visible('#onesignal-slidedown-dialog')) {
    click('#onesignal-slidedown-cancel-button');
} else {

    for (let i = 0; i < 2; i++) {
        var urlNg = url;
        urlNg += `/${negocio[i]}`;
        console.log(urlNg);
        //   let tipo_propiedad = ["departamento", "casa", "oficina", "local-comercial", "bodega",
        //     "estacionamiento", "terreno-industrial", "campo-agricola", "lugar-vacacional", "terreno",
        //     "parcela"];

        let regiones = ["tarapaca", "antofagasta", "atacama", "coquimbo", "valparaiso",
            "bernardo-ohiggins", "maule", "biobio", "araucania",
            "los-lagos", "aysen", "metropolitana", "los-rios",
            "arica-y-parinacota", "nuble", "magallanes-y-antart"];

        //for (let i = 0; i <= (1); i++) {
        for (let i = 0; i <= (regiones.length - 1); i++) {
            var urlPg = urlNg;
            urlPg += `/${regiones[i]}/${regiones[i]}`;
            navigate(urlPg, {timeout: 60000});
            if (el_is_visible('#onesignal-slidedown-dialog')) {
                click('#onesignal-slidedown-cancel-button');
            } else {
                while (el_is_visible('button#btnCargarMas.btn.btn-outline-primary.px-5')) {
                    let data = parse();
                    let resultados = parseInt(data.cantidad_resultados);
                    let result_1 = data.texto_resultados.replace('Estas viendo ', '');
                    let resultados_de = parseInt(result_1.replace(' de 733 proyectos', ''));
                    console.log(resultados_de);
                    console.log(resultados);
                    if (resultados_de < resultados) {
                        click('button#btnCargarMas.btn.btn-outline-primary.px-5');
                        collect(parse().items1);
                        collect(parse().items2);
                        collect(parse().items3);
                        collect(parse().items4);
                        collect(parse().items5);
                        if (el_is_visible('#onesignal-slidedown-dialog')) {
                            click('#onesignal-slidedown-cancel-button');
                        } else {
                            //nothing
                        }
                    } else {
                        break;
                    }
                }
            }
        }
    }
}