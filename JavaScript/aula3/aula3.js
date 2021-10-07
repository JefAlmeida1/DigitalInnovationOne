function clique(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar! </b>";
}
function redirecionar(){
   // para abrir em outra aba:
    window.open("https://www.google.com/");
  // para abrir na mesma aba: window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "passe o meuse aqui";
}

function load(){
    alert("página carregada");
}
function funcaoChanger(elemento){
    console.log(elemento.value)
}