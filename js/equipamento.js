$(window).ready(function(){
    const params = new URLSearchParams(document.location.search);
    lerXML(params.get("ep"));
});


function lerXML(parametro){

    $.ajax({
        type: "GET",
        url: "../view/source/equip-" + parametro + ".xml",
        dataType: "xml",

        error: function (e) {
            alert("Selecione um equipamento válido para ver detalhes.");
            //console.log("XML reading Failed: ", e);
        },

        success: function (response) {

            // Adicionar nome
            $("#equipamento").append( '<h3 class="ep-title">' + $(response).find('titulo').text() + '</h3>');

            // Adiciona imagem
            $("#equipamento").append(    '<div style="text-align:center"> <img class="ep-img" src="../img/' +
                                    $(response).find('imagem').text() + '"></div>');
            
            $(response).find("sec").each(function () {
                // Adicionar subtítulo
                $("#equipamento").append( '<h4 class="ep-subtitle">' +
                        $(this).find('subtitulo').text() + '</h4>');

                // Adicionar descrição
                $("#equipamento").append( '<p class="ep-descricao">' +
                    $(this).find('descricao').text() + '</p>');
            });

            // Adiciona subtítulo
            $("#equipamento").append(   '<h4 class="ep-subtitle center">' +
                                        $(response).find("vid").find("subtitulo").text() + '</h4>');
            
            // Adiciona vídeo
            $("#equipamento").append(   '<div class="ep-video">' +
                                        '<iframe width="385" height="217" src="https://www.youtube.com/embed/' +
                                        $(response).find("vid").find("codigovideo").text() +
                                        '" frameborder="0"' +
                                        'allow="accelerometer; autoplay; clipboard-write; encrypted-media;' +
                                        ' gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
            
        }
    });
};

/*
function lerXML2(){


    //Sample XML    
    var xml = "<?xml version='1.0' ?><doc><person><name>Pedro</name><age>21</age></person><person><name>João</name><age>18</age></person></doc>";
    
    r = requests.get("../view/equip-capacete.xml");    

    //Parse the givn XML
    var xmlDoc = $.parseXML( r ); 
        
    var $xml = $( xmlDoc );
    
      // Find Person Tag
    var $person = $xml.find("person");
    
    $person.each(function(){
        
        var name = $(this).find('name').text(),
            age = $(this).find('age').text();
        
        $("#ProfileList" ).append('<li>' +name+ ' - ' +age+ '</li>');
        
    });
        
        
};
*/