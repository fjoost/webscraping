country('cl');
navigate(input.url, {timeout: 60000}); // the number of milliseconds to wait for. Default is 30000 ms
wait_visible('#partialTabsUbicacion');
scroll_to('#partialTabsUbicacion');
wait_visible('.pie');
scroll_to('.pie');
let data = parse();
collect(parse());