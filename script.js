function myFonction() {
   
    /*===================================POUR LA PARTIE ENTRER VOTRE NON==========================================================*/



    /*_______________________Premiérement J'ai déclaré une variable avec let et pour nom (name),puis j'ai fait appelle à l'élément de Input qui a pour ID= (name) ______________________*/
    let name = document.getElementById('name');

    /*_______________________Secondo J'ai déclaré une variable avec let pour nom(nom) , ensuite j'ai fait appelle à l'élément dans laquelle vas s'afficher la saisie d'un utilisateur et qui a pour ID= (nom)____________________*/
    let nom = document.getElementById('nom');

    /*_______________________Pour finir j'ai demandé à l'élément d'ID (name) d'afficher l'information saisie par l'utilisateur dans la partie d'ID(nom) selon le HTML_______________________________________________________________________________________________________________*/
    nom.innerHTML = name.value;





    /*===============================J'AI FAIT DE MÊME POUR LES AUTRES==============================================================*/
    let Email = document.getElementById('Email');
    let Mail = document.getElementById('Mail');
    Mail.innerHTML = Email.value;


    let num = document.getElementById('num');
    let Num = document.getElementById('Num');
    Num.innerHTML = num.value;



    let select = document.getElementById('select');
    let Select = document.getElementById('Select');
    Select.innerHTML = select.value;



    let text = document.getElementById('text');
    let Text = document.getElementById('Text');
    Text.innerHTML = text.value;
}