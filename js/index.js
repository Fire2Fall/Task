var table = document.getElementById('table');
var row = document.getElementsByClassName('row');
var del_row = document.getElementById('del-row');
var del_col = document.getElementById('del-col');


function addCol() {
  for (let i = 0; i < row.length; i++) {
    let element = row[i];
    element.insertAdjacentHTML('beforeend', '<div class="col" onmouseover="showDel(this)"></div>');
  }
  if (row[0].children.length !== 1)
    del_col.style.display = "block";
}

function addRow() {
  let rows = document.querySelector('.row');
  let clone = rows.cloneNode(true);
  table.appendChild(clone);
  if (row.length !== 1)
    del_row.style.display = "block";
}

function deleteCol(e) {
  let position_left = e.getBoundingClientRect().left - 104 + "px";
  for (let i = 0; i < row.length; i++) {
    for (let el = 0; el < row[i].children.length; el++) {
      let element = row[i].children[el].getBoundingClientRect().left - 104 + "px";
      if (element === position_left) {
        row[i].children[el].remove();
        del_col.style.display = "none";
      }
    }
  }  
}

function deleteRow(e) {
  let position_top = e.getBoundingClientRect().top - 104 + "px";
  for (let i = 0; i < row.length; i++) {
    let element = row[i].getBoundingClientRect().top - 104 + "px";
    if (element === position_top) {
      row[i].remove();
      del_row.style.display = "none";
    }
  }
}

function showDel(e) {
  let left = e.getBoundingClientRect().left - 104 + "px";
  let top = e.getBoundingClientRect().top - 104 + "px";
  del_col.style.cssText = `left: ${left}; visibility: visible`;
  del_row.style.cssText = `top: ${top}; visibility: visible`;
  if (row.length == 1)
    del_row.style.display = "none";

  if (row[0].children.length == 1)
    del_col.style.display = "none";
}

function hide() {
  del_row.style.display = "none";
  del_col.style.display = "none";
}

function show() {
  del_col.style.cssText = `display: block; visibility: hidden`;
  del_row.style.cssText = `display: block; visibility: hidden`;
  if (row.length == 1)
    del_row.style.display = "none";

  if (row[0].children.length == 1)
    del_col.style.display = "none";
}

function hideDel() {
  del_row.style.visibility = "hidden";
  del_col.style.visibility = "hidden";
}