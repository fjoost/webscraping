/* INPUTS */

// string search = departamento

var url1 = `https://www.portalinmobiliario.com/venta/departamento`;
navigate(url1);
let contador = 0;
let page_data = parse();
var paginas = (parseInt(page_data.Paginass.replace('de ', '')));
for (let i = 1; i <= paginas; i++) {
    if (i == 1) {
        console.log('paginas :', paginas);
//         console.log(parseInt(page_data.Paginass.replace('de ', '')));
        console.log('vuelta :', i, 'contador :', contador, url);
        next_stage({url: url1});
    }
    if (i == 2) {
        let url = `https://www.portalinmobiliario.com/venta/departamento/_Desde_`;
        contador += 51;
        url += `${contador}`;
        console.log('vuelta :', i, 'contador :', contador, url);
        //next_stage({url, country: input.country, search: input.search});
    }
    else {
        let url = `https://www.portalinmobiliario.com/venta/departamento/_Desde_`;
        contador += 50;
        url += `${contador}`;
        console.log('vuelta :', i, 'contador :', contador, url);
        //next_stage({url, country: input.country, search: input.search});
    }
}

/*
*
*var url = `https://www.portalinmobiliario.com/venta`;
navigate(url);
let data = parse();
var paginas = (parseInt(data.Paginass.replace('de ','')));
console.log("paginas: "+paginas);
for (let i = 1; i<=paginas; i++)
{
  var urlPg = url;
  if (i>1){
    urlPg += `/_Desde_${51*(i-1)}`;
  }
  console.log(urlPg);
  //collect(parse().items);
}
*
* */