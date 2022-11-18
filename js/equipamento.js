$(window).ready(function(){
    const params = new URLSearchParams(document.location.search);
    lerXML(params.get("ep"));
});


function lerXML(ep){

    $.ajax({
        type: "GET",
        url: "../view/ep/ep-" + ep + ".xml",
        dataType: "xml",

        error: function (e) {
            alert("Selecione um equipamento válido para ver detalhes.");
            //console.log("XML reading Failed: ", e);
        },

        success: function (response) {
            
            // Adicionar nome
            var tipo = $(response).find('tipo').text();
            var titulo = $(response).find('titulo').text();
            $("#equipamento").append( '<h3 class="ep-title">' + tipo + ": " + titulo + '</h3>');

            // Adiciona imagem
            var imagem = $(response).find('imagem').text();
            $("#equipamento").append(    '<div style="text-align:center"> <img class="ep-img" src="../img/' +
                                    imagem + '"></div>');
            
            $(response).find("sec").each(function () {
                // Adicionar subtítulo
                $("#equipamento").append( '<h4 class="ep-subtitle">' +
                        $(this).find('subtitulo').text() + '</h4>');

                // Adicionar descrição
                $("#equipamento").append( '<p class="ep-descricao">' +
                    $(this).find('descricao').text() + '</p>');
            });

            // Teste se tem vídeo adicionado para poder mostrar na página
            if($(response).find("video").find("codigovideo").text()){

                // Adiciona subtítulo
                $("#equipamento").append(  
                    '<h4 class="ep-subtitle center">' +
                    $(response).find("video").find("subtitulo").text() + '</h4>'
                );
                
                // Adiciona vídeo
                $("#equipamento").append( 
                    '<div class="ep-video">' +
                        '<iframe width="385" height="217" src="https://www.youtube.com/embed/' +
                        $(response).find("video").find("codigovideo").text() +
                        '" frameborder="0"' +
                        'allow="accelerometer; autoplay; clipboard-write; encrypted-media;' +
                        ' gyroscope; picture-in-picture" allowfullscreen></iframe>' + 
                    '</div>'
                );
            };

            // Adiciona links relacionados
            $(response).find("links").each(function(){
                if( $(this).find("interno").text() || $(this).find("externo").text() )
                    {
                        $('#equipamento').append('<h5 class="ep-subtitle">Links relacionados</h5><ol></ol>');

                        $(this).find("interno").each(function(){
                            var link = $(this).text();
                            $('ol').append('<li><a href="ep.html?ep=' + link + '">' + link + '</a></li>');
                        });
                        $(this).find("externo").each(function(){
                            var link = $(this).text();
                            $('ol').append('<li><a href="' + link + '" target="_blank">' + link + '</a></li>');
                        });
                    };
            });
            
        }
    });
};
