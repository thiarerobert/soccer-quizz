let btn = document.querySelector('.start');


let commencer = () => {


    let name = document.querySelector('.nom');

    let text = document.querySelector('#vi');

    if (text.value !== '') {

        name.innerText = text.value;
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.question').style.display = 'block';
        document.querySelector('header').style.display = 'flex';
        document.querySelector('footer').style.display = 'block';
        document.querySelector('body').style.backgroundColor = 'rgb(0, 162, 255)';

    } else {
        console.log('Vide');
    }


}

btn.addEventListener('click', commencer);


let cloudScore = (sc) => {
    let point = document.querySelector('.emp');
    let score = parseInt(point.innerText);
    score += sc;

    point.innerText = score;


}



//REPONSE 1



let select = (e) => {

    let goodAnswer = 'D';
    let reponseUser = e.srcElement.getAttribute('id');


    if (reponseUser !== 'ii') {
        let list = document.querySelectorAll('.q1 ul li');
        let listB = document.querySelectorAll('.q1 ul li span');


        let couleur = null;
        let colorText = null;
        let qual = null;

        if (reponseUser === goodAnswer) {

            cloudScore(1);
            couleur = "#66ff99";
            qual = 'Bonne Reponse';
            colorText = 'green';


        } else {
            cloudScore(0);
            couleur = "#ffc2c2";
            qual = 'Mauvaise Reponse !';
            colorText = 'red';
        }

        e.srcElement.style.backgroundColor = couleur;
        e.srcElement.style.color = colorText;

        document.querySelector('.q1 .evaluate').innerText = qual;
        document.querySelector('.q1 .evaluate').style.color = colorText;
        document.querySelector('.q1 .ctn-note').style.display = 'block';

        for (i = 0; i < list.length; i++) {


            list[i].setAttribute('id', 'ii');
            listB[i].setAttribute('id', 'ii');
        }

    }

}


document.querySelector('.q1 #A').addEventListener('click', select);
document.querySelector('.q1 #B').addEventListener('click', select);
document.querySelector('.q1 #C').addEventListener('click', select);
document.querySelector('.q1 #D').addEventListener('click', select);

const boutonSuivant1 = document.querySelector('.btn_next_1');

let suivant = () => {
    let question = document.querySelector('.q1');
    let questionSuivant = document.querySelector('.q2');
    question.setAttribute('id', 'close');
    questionSuivant.setAttribute('id', 'open');

}

boutonSuivant1.addEventListener('click', suivant);









//REPONSE 2



let select2 = (e) => {

    let goodAnswer = 'C';
    let reponseUser = e.srcElement.getAttribute('id');


    if (reponseUser !== 'ii') {
        let list = document.querySelectorAll('.q2 ul li');
        let listB = document.querySelectorAll('.q2 ul li span');


        let couleur = null;
        let colorText = null;
        let qual = null;

        if (reponseUser === goodAnswer) {

            cloudScore(1);
            couleur = "#66ff99";
            qual = 'Bonne Reponse';
            colorText = 'green';


        } else {
            cloudScore(0);
            couleur = "#ffc2c2";
            qual = 'Mauvaise Reponse !';
            colorText = 'red';
        }

        e.srcElement.style.backgroundColor = couleur;
        e.srcElement.style.color = colorText;

        document.querySelector('.q2 .evaluate').innerText = qual;
        document.querySelector('.q2 .evaluate').style.color = colorText;
        document.querySelector('.q2 .ctn-note').style.display = 'block';

        for (i = 0; i < list.length; i++) {


            list[i].setAttribute('id', 'ii');
            listB[i].setAttribute('id', 'ii');
        }

    }

}


document.querySelector('.q2 #A').addEventListener('click', select2);
document.querySelector('.q2 #B').addEventListener('click', select2);
document.querySelector('.q2 #C').addEventListener('click', select2);
document.querySelector('.q2 #D').addEventListener('click', select2);

const boutonSuivant2 = document.querySelector('.btn_next_2');

let suivant2 = () => {
    let question = document.querySelector('.q2');
    let questionSuivant = document.querySelector('.q3');
    question.setAttribute('id', 'close');
    questionSuivant.setAttribute('id', 'open');

}

boutonSuivant2.addEventListener('click', suivant2);













//REPONSE 3



let select3 = (e) => {

    let goodAnswer = 'B';
    let reponseUser = e.srcElement.getAttribute('id');


    if (reponseUser !== 'ii') {
        let list = document.querySelectorAll('.q3 ul li');
        let listB = document.querySelectorAll('.q3 ul li span');


        let couleur = null;
        let colorText = null;
        let qual = null;

        if (reponseUser === goodAnswer) {

            cloudScore(1);
            couleur = "#66ff99";
            qual = 'Bonne Reponse';
            colorText = 'green';


        } else {
            cloudScore(0);
            couleur = "#ffc2c2";
            qual = 'Mauvaise Reponse !';
            colorText = 'red';
        }

        e.srcElement.style.backgroundColor = couleur;
        e.srcElement.style.color = colorText;

        document.querySelector('.q3 .evaluate').innerText = qual;
        document.querySelector('.q3 .evaluate').style.color = colorText;
        document.querySelector('.q3 .ctn-note').style.display = 'block';

        for (i = 0; i < list.length; i++) {


            list[i].setAttribute('id', 'ii');
            listB[i].setAttribute('id', 'ii');
        }

    }

}


document.querySelector('.q3 #A').addEventListener('click', select3);
document.querySelector('.q3 #B').addEventListener('click', select3);
document.querySelector('.q3 #C').addEventListener('click', select3);
document.querySelector('.q3 #D').addEventListener('click', select3);

const boutonSuivant3 = document.querySelector('.btn_next_3');

let suivant3 = () => {
    let question = document.querySelector('.q3');
    let questionSuivant = document.querySelector('.q4');
    question.setAttribute('id', 'close');
    questionSuivant.setAttribute('id', 'open');

}

boutonSuivant3.addEventListener('click', suivant3);









//REPONSE 4



let select4 = (e) => {

    let goodAnswer = 'C';
    let reponseUser = e.srcElement.getAttribute('id');


    if (reponseUser !== 'ii') {
        let list = document.querySelectorAll('.q4 ul li');
        let listB = document.querySelectorAll('.q4 ul li span');


        let couleur = null;
        let colorText = null;
        let qual = null;

        if (reponseUser === goodAnswer) {
            cloudScore(1);

            couleur = "#66ff99";
            qual = 'Bonne Reponse';
            colorText = 'green';


        } else {
            cloudScore(0);
            couleur = "#ffc2c2";
            qual = 'Mauvaise Reponse !';
            colorText = 'red';
        }

        e.srcElement.style.backgroundColor = couleur;
        e.srcElement.style.color = colorText;

        document.querySelector('.q4 .evaluate').innerText = qual;
        document.querySelector('.q4 .evaluate').style.color = colorText;
        document.querySelector('.q4 .ctn-note').style.display = 'block';

        for (i = 0; i < list.length; i++) {


            list[i].setAttribute('id', 'ii');
            listB[i].setAttribute('id', 'ii');
        }

    }

}


document.querySelector('.q4 #A').addEventListener('click', select4);
document.querySelector('.q4 #B').addEventListener('click', select4);
document.querySelector('.q4 #C').addEventListener('click', select4);
document.querySelector('.q4 #D').addEventListener('click', select4);

const boutonSuivant4 = document.querySelector('.btn_next_4');

let suivant4 = () => {


    let question = document.querySelector('.q4');
    let questionSuivant = document.querySelector('.q5');
    question.setAttribute('id', 'close');
    questionSuivant.setAttribute('id', 'open');

}

boutonSuivant4.addEventListener('click', suivant4);















//REPONSE 5



let select5 = (e) => {

    let goodAnswer = 'A';
    let reponseUser = e.srcElement.getAttribute('id');


    if (reponseUser !== 'ii') {
        let list = document.querySelectorAll('.q5 ul li');
        let listB = document.querySelectorAll('.q5 ul li span');


        let couleur = null;
        let colorText = null;
        let qual = null;

        if (reponseUser === goodAnswer) {

            cloudScore(1);
            couleur = "#66ff99";
            qual = 'Bonne Reponse';
            colorText = 'green';


        } else {
            cloudScore(0);
            couleur = "#ffc2c2";
            qual = 'Mauvaise Reponse !';
            colorText = 'red';
        }

        e.srcElement.style.backgroundColor = couleur;
        e.srcElement.style.color = colorText;

        document.querySelector('.q5 .evaluate').innerText = qual;
        document.querySelector('.q5 .evaluate').style.color = colorText;
        document.querySelector('.q5 .ctn-note').style.display = 'block';

        for (i = 0; i < list.length; i++) {


            list[i].setAttribute('id', 'ii');
            listB[i].setAttribute('id', 'ii');
        }

    }

}


document.querySelector('.q5 #A').addEventListener('click', select5);
document.querySelector('.q5 #B').addEventListener('click', select5);
document.querySelector('.q5 #C').addEventListener('click', select5);
document.querySelector('.q5 #D').addEventListener('click', select5);

const boutonSuivant5 = document.querySelector('.btn_next_5');

let suivant5 = () => {
    let question = document.querySelector('.q5');
    let questionSuivant = document.querySelector('.res');
    question.setAttribute('id', 'close');
    questionSuivant.setAttribute('id', 'open');
    document.querySelector('.userN').innerText = document.querySelector('.nom').innerText;
    let sc = document.querySelector('.emp').innerText;
    document.querySelector('.final').innerText = sc;

    let progress = document.querySelector('.emb');

    let scInInt = parseInt(sc);

    console.log(typeof scInInt);

    let pourcent = scInInt * 100 / 5;
    let str = pourcent + '';

    progress.style.width = str + '%';

    if (scInInt === 0) {
        progress.style.backgroundColor = 'red';
        document.querySelector('.point').style.color = 'red';

    } else if (scInInt === 1) {
        progress.style.backgroundColor = 'red';
        document.querySelector('.point').style.color = 'red';

    } else if (scInInt === 2) {
        progress.style.backgroundColor = 'rgb(255,111,0)';
        document.querySelector('.point').style.color = 'rgb(255,111,0)';

    } else if (scInInt === 3) {

        progress.style.backgroundColor = 'orange';
        document.querySelector('.point').style.color = 'orange';

    } else if (scInInt === 4) {

        progress.style.backgroundColor = 'rgb(49,196,0)';
        document.querySelector('.point').style.color = 'rgb(49,196,0)';

    } else if (scInInt === 5) {
        progress.style.backgroundColor = 'green';
        document.querySelector('.point').style.color = 'green';
    }



}

boutonSuivant5.addEventListener('click', suivant5);