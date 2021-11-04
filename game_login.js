function adduser() {
    var pl1 = document.getElementById("player1_name_input").value;
    var pl2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", pl1);
    localStorage.setItem("player2_name", pl2);
    window.location = "game_page.html";
}