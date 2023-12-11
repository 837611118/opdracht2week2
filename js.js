function genereerTafel(getal) {
    document.write("<h2>Tafel van " + getal + "</h2>");
    document.write("<ul>");

    for (var i = 1; i <= 10; i++) {
      var resultaat = getal * i;
      document.write("<li>" + getal + " x " + i + " = " + resultaat + "</li>");
    }

    document.write("</ul>");
  }






genereerTafel(5);
genereerTafel(8);