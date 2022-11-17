$(window).ready(function(){
    
    // obtem o caminho na barra de navegação
    // talvez possa ser usado para obter um GET "epi.html?id=001"
    const params = new URLSearchParams(document.location.search);
    console.log("Capturado da URL do site: \"" + params.get("ep") +"\".");

    // use XML as data
    // https://api.jquery.com/jquery.parsexml/

    // try this links
    // https://developer.mozilla.org/en-US/docs/Web/API/Location/search
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams#examples

});