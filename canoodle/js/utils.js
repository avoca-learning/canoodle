var Canoodle;
(function(c){(function(d){function c(b){var a=new XMLHttpRequest;a.open("GET",b,!1);a.send();return 200!==a.status?(console.error("HTTP status "+a.status+" returned for file: "+b),""):null!==a.responseXML?a.responseXML.toString():a.responseText}d.read=c;d.execute=function(b){b=c(b);return(window.execScript||function(a){return window.eval.call(window,a)})(b)};d.guid=function(b){function a(){return(65536*(1+Math.random())|0).toString(16).substring(1)}"undefined"===typeof b&&(b="CANOODLE");return b+
"-"+(a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a())}})(c.Utils||(c.Utils={}))})(Canoodle||(Canoodle={}));
