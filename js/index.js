var table = document.getElementById('table');
var row = document.getElementsByClassName('row');
var delRows = document.getElementsByClassName('del-row');
var delCols = document.getElementsByClassName('del-col');


function addCol() {

  for (var i = 0; i < row.length; i++) {
    var element = row[i];
    element.insertAdjacentHTML('beforeend', '<div class="col" onmouseover="showDel(this)"></div>');
  }

  document.getElementById('del-col').insertAdjacentHTML('beforeend', '<div class="del-col" onclick="deleteCol(this)">-</div>');
}

function addRow() {
  var rows = document.querySelector('.row');
  let clone = rows.cloneNode(true);
  table.appendChild(clone);
  document.getElementById('del-row').insertAdjacentHTML('beforeend', '<div class="del-row" onclick="deleteRow(this)">-</div>');
}

function deleteCol(e) {
  for (i = 0; i < delCols.length; i++){
    if (delCols[i] == e){
      for (var el = 0; el < row.length; el++) {
        row[el].children[i].remove();
        }
      delCols[i].remove();
      }
    }
}

function deleteRow(e) {
  for (i = 0; i < delRows.length; i++){
    if (delRows[i] == e){
    row[i].remove();
    delRows[i].remove();
    }
  }
}

function showDel(e) {
  for (i = 0; i < row.length; i++){
    for (var el = 0; el < row[i].children.length; el++) {
      if (row[i].children[el] == e){

        for (var del = 0; del < delRows.length; del++) {
          if (del == i) {
            delRows[i].setAttribute('style', 'visibility: visible;');
          } else {
            delRows[del].setAttribute('style', 'visibility: hidden;');
          }
          if (delRows.length == 1) {
            delRows[0].setAttribute('style', 'visibility: hidden;');
          }
        }


        for (var elem = 0; elem < delCols.length; elem++) {
          if (elem == el) {
            delCols[el].setAttribute('style', 'visibility: visible;');
          } else {
            delCols[elem].setAttribute('style', 'visibility: hidden;');
          }
          if (delCols.length == 1) {
            delCols[0].setAttribute('style', 'visibility: hidden;');
          }
        }
      }
    }
  }
}

function hideAll() {
  for (var i = 0; i < delRows.length; i++) {
    delRows[i].setAttribute('style', 'visibility: hidden;');
  }
  for (var el = 0; el < delCols.length; el++) {
    delCols[el].setAttribute('style', 'visibility: hidden;');
  }
}

function hide() {
  document.getElementById('del-row').setAttribute('style', 'display: none');
  document.getElementById('del-col').setAttribute('style', 'display: none');
}

function show() {
  document.getElementById('del-row').setAttribute('style', 'display: inline-block');
  document.getElementById('del-col').setAttribute('style', 'display: inline-flex');
}
