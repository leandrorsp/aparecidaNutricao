var buscarPacientes = document.querySelector("#buscar-paciente");

buscarPacientes.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        
        if (xhr.status == 200) {
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });    
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        };
        
    });

    xhr.send();
});