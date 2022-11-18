function card_ep(ep){
    //alert("é um "+ ep);
    $.ajax({
        type: "GET",
        url: "../view/ep/ep-" + ep + ".xml",
        dataType: "xml",

        error: function (e) {
            alert("ERRO#(" + ep +").\nAlgum conteúdo pode não estar sendo exibido.");
            //console.log("XML reading Failed: ", e);
        },

        success: function (response) {

            $('#card-ep').append(
                '<div class="col s12 m12 l6">' +
                    '<a class="grey-text text-darken-4" href="ep.html?ep=' + ep + '">'+
                        '<div class="card horizontal valign-wrapper">' +
                            '<div class="card-image">' +
                                '<img src="../img/' + $(response).find("imagem").text() + '">' +
                            '</div>' +
                            '<div class="card-content dark-grey-text">' +
                                '<div class="card-title">' + $(response).find("titulo").text() + '</div>' +
                                '<p>' + $(response).find("resumo").text() + '</p>' +
                            '</div>' +
                        '</div>' +
                    '</a>' +
                '</div>'

            );
            
        }
    });
};