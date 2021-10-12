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
        "los-lagos", "aysen", "magallanes-y-antart.", "metropolitana", "los-rios",
        "arica-y-parinacota", "nuble"];
// 	for (let i = 0; i <= (1); i++) {
    for (let i = 0; i <= (regiones.length - 1); i++) {
        var urlPg = urlNg;
        urlPg += `/${regiones[i]}/${regiones[i]}`;
        navigate(urlPg, {timeout: 45000});
        wait('BUTTON#btnCargarMas');
        scroll_to('BUTTON#btnCargarMas');
        collect(parse().items);
        click('BUTTON#btnCargarMas');
    }
}
