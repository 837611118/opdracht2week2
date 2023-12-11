function genereerTafel(getal) {
    document.write("<h2>Tafel van " + getal + "</h2>");
    document.write("<ul>");

    for (var i = 1; i <= 10; i++) {
      var resultaat = getal * i;
      document.write("<li>" + getal + " x " + i + " = " + resultaat + "</li>");
    }

    document.write("</ul>");
  }






genereerTafel(1);
genereerTafel(2);
genereerTafel(3);
genereerTafel(4);
genereerTafel(5);
genereerTafel(6);
genereerTafel(7);
genereerTafel(8);
genereerTafel(9);
genereerTafel(10);
