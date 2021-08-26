var url = `https://www.portalinmobiliario.com/venta/departamento`;
navigate(url);
let data = parse();
var paginas = (parseInt(data.Paginass.replace('de ','')));
let contador = 0;
console.log("paginas: "+paginas);
for (let i = 1; i<=paginas; i++)
{
    var urlPg = url;
    if (i == 1) {
        //navigate(urlPg);
        collect(parse().items);
    }
    else if (i == 2) {
        contador += 51;
        urlPg += `/_Desde_${contador}`;
        navigate(urlPg);
        collect(parse().items);
    }
    else {
        contador += 50;
        urlPg += `/_Desde_${contador}`;
        navigate(urlPg);
        collect(parse().items);
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
  navigate(urlPg);
  collect(parse().items);
}
*
* */