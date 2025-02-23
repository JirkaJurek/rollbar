const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  var x = JSON.parse(this.responseText);
  let bar_text = "";
  //'Meta Data', 'Time Series (Daily)'
  var ts = x['Time Series (Daily)'];
  for (t in ts) {
    bar_text += t + ": ";
    var tsi = ts[t];
    for ( l in tsi ) {
      bar_text += "<a href='https://www.google.com'>" + l + ": " + tsi[l];
    }  
  }
  document.getElementById('sdata').innerHTML = bar_text + ' ' + bar_text;
};
//xhttp.open("GET", "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=YOUR_API_KEY");
xhttp.open("GET", "https://jirkajurek.github.io/rollbar/testdata.js");
xhttp.send();
