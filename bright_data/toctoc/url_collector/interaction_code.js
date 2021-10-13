let negocio = ["Venta", "Arriendo"];
let url = `https://www.toctoc.com`;
for (let i = 0; i < 2; i++) {
    var urlNg = url;
    urlNg += `/${negocio[i]}`;
    console.log(urlNg);
    //navigate(urlNg);
//   let tipo_propiedad = ["departamento", "casa", "oficina", "local-comercial", "bodega",
//     "estacionamiento", "terreno-industrial", "campo-agricola", "lugar-vacacional", "terreno",
//     "parcela"];

    let regiones = ["tarapaca", "antofagasta", "atacama", "coquimbo", "valparaiso",
        "coquimbo", "bernardo-ohiggins", "maule", "biobio", "araucania",
        "los-lagos", "aysen", "metropolitana", "los-rios",
        "arica-y-parinacota", "nuble", "magallanes-y-antart."];
// 	for (let i = 0; i <= (1); i++) {
    for (let i = 0; i <= (regiones.length - 1); i++) {
        var urlPg = urlNg;
        urlPg += `/${regiones[i]}/${regiones[i]}`;
        navigate(urlPg, {timeout: 60000});
        wait('BUTTON#btnCargarMas', {timeout: 60000});
        //scroll_to('BUTTON#btnCargarMas');
        collect(parse().items1);
        collect(parse().items2);
        collect(parse().items3);
        collect(parse().items4);
        collect(parse().items5);
        //click('BUTTON#btnCargarMas');
    }
}
