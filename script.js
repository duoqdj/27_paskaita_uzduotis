// 1 uzduotis

function Spausti() {
    var kubass = document.getElementById("kubass");
    if (kubass.style.display === "none") {
        kubass.style.display = "block";
    } else {
        kubass.style.display = "none";
    }
  }


// 2uzduotis


function Plotis() {
    var kubas = document.getElementById("kubas");
    if (kubas.style.width === "400px") {
        kubas.style.width = "200px";
    } else {
        kubas.style.width = "400px";
    }
  }

  function Aukstis() {
    var kubas = document.getElementById("kubas");
    if (kubas.style.height === "150px") {
        kubas.style.height = "75px";
    } else {
        kubas.style.height = "150px";
    }
  }

  function Centravimas() {
    var kubas = document.getElementById("kubas");
    if (kubas.style.marginLeft === "0px") {
        kubas.style.marginLeft = "30px";
       
    } else {
        kubas.style.marginLeft = "0px";
        
    }
  }

  function Pozicija() {
    var kubas = document.getElementById("kubas");
    if (kubas.style.marginTop === "30px") {
        kubas.style.marginTop = "0px";
       
    } else {
        kubas.style.marginTop = "30px";
        
    }
  }

// 3 uzduotis

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.left = "0";
}

function hideMenu(){
    navLinks.style.left = "-800px";
}






// 4 uzduotis

function addColor()
{
    let  r, g, b, color1;
    let sp1 = document.querySelector('#sp1');
    let colSm1 = document.getElementById('colSm1')

    r = Math.floor(Math.random() * 256).toString();
    g = Math.floor(Math.random() * 256).toString();
    b = Math.floor(Math.random() * 256).toString();
    color1 = `rgb(${r},${g},${b})`;
    sp1.textContent = color1;
    colSm1.style.backgroundColor = color1;

    let  r1, g1, b1, color2;
    let sp2 = document.querySelector('#sp2');
    let colSm = document.getElementById('colSm2')

    r1 = Math.floor(Math.random() * 256).toString();
    g1 = Math.floor(Math.random() * 256).toString();
    b1 = Math.floor(Math.random() * 256).toString();
    color2 = `rgb(${r1},${g1},${b1})`;
    sp2.textContent = color2;
    colSm2.style.backgroundColor = color2;

    let  r2, g2, b2, color3;
    let sp3 = document.querySelector('#sp3');
    let colSm3 = document.getElementById('colSm3')

    r2 = Math.floor(Math.random() * 256).toString();
    g2 = Math.floor(Math.random() * 256).toString();
    b2 = Math.floor(Math.random() * 256).toString();
    color3 = `rgb(${r2},${g2},${b2})`;
    sp3.textContent = color3;
    colSm3.style.backgroundColor = color3;
}










// 5 uzduotis

function addRow()
{
    var fname = document.getElementById('fname').value;
    var flastname = document.getElementById('flastname').value;
    var fage = document.getElementById('fage').value;
    var rownumbers = document.getElementById('Mytable');
    var rownumber = rownumbers.rows.length;

    console.log(rownumber);
    var table = document.getElementsByTagName('table')[0];
    

    var newRow = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    cel1.innerHTML = rownumber;
    cel2.innerHTML = fname;
    cel3.innerHTML = flastname;
    cel4.innerHTML = fage;
}