plr1 = localStorage.getItem("player1_name");
plr2 = localStorage.getItem("player2_name");
plr1_s = 0;
plr2_s = 0;
document.getElementById("player1_name").innerHTML = plr1 + ":";
document.getElementById("player2_name").innerHTML = plr2 + ":";

document.getElementById("player1_score").innerHTML = plr1_s;
document.getElementById("player2_score").innerHTML = plr2_s;

document.getElementById("player_question").innerHTML = "question turn-" + plr1;
document.getElementById("player_answer").innerHTML = "answer turn-" + plr2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    div2 = Math.floor(word.length / 2);

    charAt2 = word.charAt(div2);

    length1 = word.length - 1;

    charAt3 = word.charAt(length1);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
var question_turn = "player1";
var answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);
    if (answer == word) {
        if (question_turn == "player1") {
            plr1_s = plr1_s + 1;
            document.getElementById("player1_score").innerHTML = plr1_s;
        } else {
            plr2_s = plr2_s + 1;
            document.getElementById("player2_score").innerHTML = plr2_s;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn-" + plr2;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn-" + plr1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn-" + plr2;
    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn-" + plr1;
    }
    document.getElementById("output").innerHTML = "";
}