(function(){
    document.getElementById('boton-hamburguesa')
        .addEventListener('click', function(){
            toggleEvents(document.getElementById('barra-lateral'), document.getElementById('boton-hamburguesa'));
        });

 //funciones reutilizables
 let toggleEvents = function(node, button){
     if (node.classList.contains('showed')){
         node.classList.remove('showed');
         button.classList.remove('active');
     } else{
         node.classList.add('showed');
        button.classList.add('active');
     }
 }

}())