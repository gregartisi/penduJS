var mot="";
var mots=new Array("bonjour","salut", "merci","papa","maman","soleil","nuit");

$(document).ready(function (){

    console.log("load");
    //load json
    //loadJson();

    //setmot
    setMot(mots);
    console.log(mot);
    setTraitsMot();

    $(".touche").click(function(){
        var letter=$(this).attr('id');
        //check letter
        if(checkLetter(letter)){
            console.log("la lettre est dans le mot");
            showLetter(letter);
        }else{
            console.log("la lettre n'est pas dans le mot");
        }
        
    });

});

//function that checks if letter is in word
function checkLetter(letter){

    if((mot.toUpperCase()).includes(letter)){
        //le mot contient la lettre
         return true;
    }else{
        //le mot ne contient pas la lettre
        return false;
    }
}

//function that set mot aléatoire, 
function setMot(items){
    console.log(items);
    var item = items[Math.floor(Math.random()*items.length)];
    mot=item;

}

//dessine les traitsdu mot
function setTraitsMot(){
    var letters = Array.from(mot);
    var lettres_content="";
    var traits_content="";
    for(var i in letters){
        var l = letters[i].toUpperCase(); console.log(l);
        lettres_content+='<td class="lettre '+l+'" id="lettre'+i+'">'+letters[i]+'</td>';
        traits_content+='<td class="trait"></td>';
    }
    $('#lettres').html(lettres_content);
    $('#traits').html(traits_content);
}

//fait apparaitre la lettre à l'ecran
function showLetter(letter){
    $("."+letter).css('display', 'block');

}
//function qui load le json dans un tableau, le top est un ajax qui renvoie un seul mot .
function loadJson(){
    //lire le fichier
    var json_data= $.getJSON("../bd/mots.json");
    var data = eval("(" +json_data.responseText + ")");
    //mettre chaque mot dans un tableau
    for(var i in json_data)mots.push([i, json_data [i]]);

    console.log(mots);
}