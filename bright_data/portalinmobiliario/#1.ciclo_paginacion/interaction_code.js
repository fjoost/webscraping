let regiones = ["antofagasta", "arica-y-parinacota", "atacama", "aysen", "biobio",
    "coquimbo", "la-araucania", "bernardo-ohiggins", "los-lagos", "de-los-rios",
    "magallanes-y-antartica-chilena", "maule", "metropolitana", "tarapaca", "valparaiso",
    "nuble"];
let url = `https://www.portalinmobiliario.com/venta`;
for (let i = 0; i <= (regiones.length - 1); i++) {
    let urlPg = url;
    urlPg += `/${regiones[i]}`;
    navigate(urlPg);
    let data = parse();
    let paginas = (parseInt(data.Paginass.replace('de ', '')));
    let tipo_propiedad;
    let contador = 0;
    console.log("paginas: " + paginas);
    for (let i = 1; i <= 3; i++) {
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
