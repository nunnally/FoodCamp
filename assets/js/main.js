menu = {
    "main":[{
        "name":"Ciabatta de Frango",
        "description":"pão italiano na manteiga frango grelhado ",
        "value":"42,00 "
    },
    {
        "name":"Korean Ribs",
        "description":"Costelinha glaceada em molho agridoce oriental • house fries",
        "value":"49,00 "
    },
    {
        "name":"Filé mignon aligot",
        "description":"Filé grelhado (200g) • demi de carne • aligot • legumes ",
        "value":"67,00 "
    },
    {
        "name":"Lemon cogu pasta",
        "description":"Fettuccine • molho de vinho e limão siciliano • cogumelos",
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
        "description":"london dry gin • licor de flor de sabugueiro• vermute seco",
        "value":"42,00 "
    },
    {
        "name":"Limonada suíça",
        "description":"Limonadinha suíça feita na hora, com manjericão, bem freshhhh",
        "value":"9,00 "
    }
],
    "desserts":[{
        "name":"Torta de chocolate",
        "description":"Torta de chocolate • caramelo salgado ",
        "value":"30,00 "
    },
    {
        "name":"Cheesecake",
        "description":"Cheesecake • calda de frutas vermelhas",
        "value":"29,00 "
    },
]
}

dataCheckout = {
    "name":"",
    "cep":"",
    "total":0
}

//AHHHHHHHHHHH 0 == FALSE meu deus
selecteds = {
    "main":-1,
    "drinks":-1,
    "desserts":-1
}


function createItems(){
    for (category in menu){
        for(index in menu[category]){
            item =(menu[category][index])
            console.log(item.name)
            item_li = document.createElement('li');
            item_li.setAttribute("id",category+"-"+index)
            item_li.setAttribute("onclick","selectItem("+index+",'"+category+"')")
            item_img = document.createElement('img');
            item_img.src="/media/"+category+"/"+index+".webp"
            item_li.appendChild(item_img);
            item_info = document.createElement("p");
            item_info.innerHTML ="<strong>"+item['name']+"</strong><br>"+item['description']+"<p>R$"+item['value']+"</p>"
            item_li.appendChild(item_info);
            document.querySelector("#"+category).appendChild(item_li)
        }
    }
}

//Seleciona e verifica se os 3 itens foram selecionados. Mudar nome da função? Chamar outra de check dentro dela?
function selectItem(id,category){

    selecteds[category]=id

    items = document.querySelector("#"+category).getElementsByTagName('li');

    
    //items.classList.remove("checked");
    for (const item of items){
        item.classList.remove("checked");
    }
    items[id].classList.add("checked");
    checkItems()
    

}


function checkItems(){

    all_selected = false;
    count = 0;

    for (var category in selecteds) {
        
        (selecteds[category]==-1)?count:count++;
    }


    return (count<3)? true: allowCheckout();
    
}

function allowCheckout(){

    button = document.querySelector("footer button")
    button.classList.add("ready");
    button.disabled = false;
    button.innerHTML="Fechar pedido";

    //Calcular o valor final do pedido
    for (var category in selecteds){
        dataCheckout.total+=parseFloat(menu[category][selecteds[category]].value);
        
    }
    
}

function loadcheckoutWall() {
    checkoutScreen = document.querySelector("#checkout-screen")
    ths = checkoutScreen.getElementsByTagName('td');
    ths[0].innerHTML=menu['main'][selecteds['main']].name;
    ths[1].innerHTML=menu['main'][selecteds['main']].value;
    ths[2].innerHTML=menu['drinks'][selecteds['drinks']].name;
    ths[3].innerHTML=menu['drinks'][selecteds['drinks']].value;
    ths[4].innerHTML=menu['desserts'][selecteds['desserts']].name;
    ths[5].innerHTML=menu['desserts'][selecteds['desserts']].value;
    ths[7].innerHTML="R$"+dataCheckout.total;

    checkoutScreen.classList.add("show")
}
function checkOut(){
    dataCheckout.name=prompt("Olá! Informa o seu nome.");
    dataCheckout.cep=prompt("Estamos quase lá! Agora informe seu endereço.");

    final_message = ("Olá, gostaria de fazer o pedido:\n - Prato: " + menu['main'][selecteds['main']].name +"\n - Bebida: " + menu['drinks'][selecteds['drinks']].name +"\n - Sobremesa: " + menu['desserts'][selecteds['desserts']].name+ "\n Total: R$" + dataCheckout.total.toFixed(2)+"\n \nNome: "+ dataCheckout.name+"\nEndereço:"+dataCheckout.cep);
    final_message = encodeURIComponent(final_message);
    url = `https://wa.me/61991277623/?text=${final_message}`;
    window.location.href = url;

}


//Call createItems after load
document.addEventListener("DOMContentLoaded", createItems());

