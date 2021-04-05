menu = {
    "main":[{
        "name":"Ciabatta de Frango com Blue Cheese",
        "description":"pão italiano tostado na manteiga • frango grelhado • molho blue cheese • picles de cebola roxa",
        "value":"42,00 "
    },
    {
        "name":"Korean Ribs com house fries",
        "description":"Costelinha glaceada em molho agridoce oriental e gergelim tostado • house fries",
        "value":"49,00 "
    },
    {
        "name":"Filé mignon aligot",
        "description":"Filé grelhado (200g) • demi de carne • aligot • legumes • farofa de pão",
        "value":"67,00 "
    },
    {
        "name":"Lemon cogu pasta",
        "description":"Fettuccine • molho de vinho branco e limão siciliano • cogumelos • salsinha • queijo derretido",
        "value":"53,00 "
    },
],
    "drinks":[{
        "name":"AMOR Y AMARGO",
        "description":"jägermeister • vodka • limão • maracujá • água Tônica",
        "value":"32,00 "
    },
    {
        "name":"FIZZ GIN TONIC",
        "description":"london dry gin • licor de flor de sabugueiro• vermute seco • limão • pepino • água Tônica",
        "value":"42,00 "
    },
    {
        "name":"Limonada suíça",
        "description":"Limonadinea suíça feita na hora, bem freshhhh",
        "value":"9,00 "
    }
],
    "desserts":[{
        "name":"Torta de chocolate",
        "description":"Torta de chocolate • caramelo salgado • chantilly com limão",
        "value":"30,00 "
    },
    {
        "name":"Cheesecake",
        "description":"Cheesecake • calda de frutas vermelhas",
        "value":"29,00 "
    },
]
}
selecteds = {
    "main":false,
    "drinks":false,
    "desserts":false
}


function createItems(){
    for (category in menu){
        for(index in menu[category]){
            item =(menu[category][index])
            console.log(item.name)
            item_li = document.createElement('li');
            item_li.setAttribute("id",category+"-"+index)
            item_img = document.createElement('img');
            item_img.src="/media/"+category+"/"+index+".webp"
            item_li.appendChild(item_img);
            item_info = document.createElement("p");
            item_info.innerHTML ="<strong>"+item['name']+"</strong><br>"+item['description']
            item_li.appendChild(item_info);
            document.querySelector("#"+category).appendChild(item_li)
        }
    }
}

//Seleciona e verifica se os 3 itens foram selecionados. Mudar nome da função? Chamar outra de check dentro dela?
function selectItem(id,category){

    selecteds[category]=id

    all_selected = false;
    for (var category in selecteds) {
        all_selected = (selecteds[category]!=false)?true:false
    }
    
    return (all_selected==false)? true: allowCheckout();

}

function allowCheckout(){

    document.querySelector("footer button").classList.add("ready");
}


document.addEventListener("DOMContentLoaded", createItems());