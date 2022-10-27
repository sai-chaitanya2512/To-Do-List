var jack = document.getElementById("input");
var hole = document.querySelector(".cap");
jack.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("btn").click();
  }
});

function add() {

  var a = document.getElementById("input").value;

  document.getElementById("input").value = "  ";

  let q = document.createElement("p");

  q.innerHTML = a;

  hole.appendChild(q);

  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "butt";
  span.appendChild(txt);
  span.style.float = "right";
  q.appendChild(span);

  span.onclick = () => {
    span.parentNode.style.display="none";
  }
  q.onclick = () => {
    q.style.textDecoration = "line-through";
  }

}

