/* INPUTS */

// string search = departamento
// number pages = 40

let url = `https://www.portalinmobiliario.com/venta/departamento`;
let contador = 0;
for (let i = 1; i <= input.pages; i++) {
    if (i == 1) {
        console.log('vuelta :', i, 'contador :', contador, url);
        //next_stage({url, country: input.country, search: input.search});
    }
    if (i == 2) {
        let url = `https://www.portalinmobiliario.com/venta/departamento/_Desde_`;
        contador += 51;
        url += `${contador}`;
        console.log('vuelta :', i, 'contador :', contador, url);
        //next_stage({url, country: input.country, search: input.search});
    }
    else {
        let url = `https://www.portalinmobiliario.com/venta/departamento/_Desde_`;ﬁ
        contador += 50;
        url += `${contador}`;
        console.log('vuelta :', i, 'contador :', contador, url);
        //next_stage({url, country: input.country, search: input.search});
    }
}