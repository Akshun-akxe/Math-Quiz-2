player1_name = localStorage.getItem("p1_name_input");
player2_name = localStorage.getItem("p2_name_input");

player1_score = 0;
player2_score = 0;

document.getElementById("p1_name").innerHTML = player1_name + " : ";
document.getElementById("p2_name").innerHTML = player2_name + " : ";

document.getElementById("p1_score").innerHTML = player1_score;
document.getElementById("p2_score").innerHTML = player2_score;

document.getElementById("p_ques").innerHTML = "Question Turn - " + player1_name;
document.getElementById("p_ans").innerHTML = "Answer Turn - " + player2_name;

function send() {}

question_turn = "player1"
answer_turn = "player2"

function check() {}