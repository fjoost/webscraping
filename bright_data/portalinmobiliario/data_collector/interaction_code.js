country('cl');
navigate(input.url, {timeout: 60000}); // the number of milliseconds to wait for. Default is 30000 ms
wait('.andes-tabs__scroll-tool');
scroll_to('.andes-tab__link');
let data = parse();
let elementos =  data.TABS_ELEMENTOS;
//let elementosSeparados = elementos.split(/(?=[A-Z])/).join(" ");
console.log(elementos);
//collect(parse());