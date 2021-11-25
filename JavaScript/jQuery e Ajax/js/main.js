function consultacep(){
    var cep = document.getElementById("cep").value;
    console.log(cep);
    $.ajax({
        url: "https://viacep.com.br/ws/14800390/json/",
        type: "GET",
        success: function(response){
            console.log(response);
        }
    })
}