window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createBtnNode(txt, e, l) {
  let r = document.createElement("button");
  r.appendChild(createTxtNode(txt));
  r.addEventListener(e, l);
  return r;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let c2 = createTDNode(createBtnNode("Edit", "click", () => {
      edit(col1);
    }));
    
    tableNode.appendChild(createTRNode([col1, c2]));
  }
  document.getElementById("root").appendChild(tableNode);
}

function edit(n) {
  let nn = document.createElement("input");
  nn.type = "text";
  nn.placeholder = "Enter Cell(x, y)";
  n.replaceChild(nn, n.childNodes[0]);
}
