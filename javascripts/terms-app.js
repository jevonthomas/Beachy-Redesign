"use strict";

$(document).ready(function(){
  console.log("Welcome to Beachy App's Website");

// copyright note in the footer; will always reflect current year
let d = new Date();
let yyyy = d.getFullYear();
$(".copyright").append(`<p>Copyright &copy; ${yyyy} | Beachy | Website Designed and Developed by <a href="https://www.jevonthomas.com">Jevon Thomas</a></p>`);
});