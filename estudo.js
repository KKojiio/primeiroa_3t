function moeda(atual) {
  return atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function calcula() {
  let c = document.getElementById("valor").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;

  if (!Number(c)) {
    alert("O valor deve ser um Número");
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    return
  }
  if (!Number(j)) {
    alert("O valor deve ser um Número");
    document.getElementById("juros").value = "";
    document.getElementById("juros").focus();
    return
  }
  if (!Number(t)) {
    alert("A quantidade de meses deve ser numérico");
    document.getElementById("meses").value = "";
    document.getElementById("meses").focus();
    return

    let r = c;
    for (let m = 1; m <= t; m++) {
      r = c * (1 + (j / 100));
      c = r;
      document.write("Mês" + " - valor: " + moeda(r) + "<br>")
    }

    document.write("Resultado:" + moeda(r))
  }
}

  let op = "";
  function operacao(ope) {
    op = ope;
  }
  function calcule() {
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let r = 0;


    if (op == "+") {
      r = Number(v1) + Number(v2);
    }
    if (op == "-") {
      r = Number(v1) - Number(v2);
    }
    if (op == "*") {
      r = Number(v1) * Number(v2);
    }
    if (op == "/") {
      r = Number(v1) / Number(v2);
    }

    document.getElementById("resultado").innerHTML = r;
  }
