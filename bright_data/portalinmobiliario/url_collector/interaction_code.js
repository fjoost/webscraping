//iteracion app arriendo -> i = 219 si paginas < a 40 entonces pagina, si no iteracion aprox
//iteracion app venta -> i = 1113
let negocio = ["venta", "arriendo"];
let url = `https://www.portalinmobiliario.com`;
for (let i = 0; i < 2; i++) {
    var urlNg = url;
    urlNg += `/${negocio[i]}`;
    navigate(urlNg);
    let regiones = ["antofagasta", "arica-y-parinacota", "atacama", "aysen", "biobio",
        "coquimbo", "la-araucania", "bernardo-ohiggins", "los-lagos", "de-los-rios",
        "magallanes-y-antartica-chilena", "maule", "metropolitana", "tarapaca", "valparaiso",
        "nuble"];
    for (let i = 0; i <= (regiones.length - 1); i++) {
        var urlPg = urlNg;
        urlPg += `/${regiones[i]}`;
        navigate(urlPg);
        let data = parse();
        let paginas = (parseInt(data.Paginass.replace('de ', '')));
        let contador = 0;
        console.log("paginas: " + paginas);
        for (let i = 1; i <= 1; i++) {
            let urlPg2 = urlPg;
            if (i == 1) {
                collect(parse().items);
            } else if (i == 2) {
                contador += 51;
                urlPg2 += `/_Desde_${contador}`;
                navigate(urlPg2);
                collect(parse().items);
            } else {
                contador += 50;
                urlPg2 += `/_Desde_${contador}`;
                navigate(urlPg2);
                collect(parse().items);
            }
        }
    }
}
