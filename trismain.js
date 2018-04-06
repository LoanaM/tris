var xox = true;
count = 0;


$('.block').click(function(){
  if ($(this).text()==""){
    do {
      nameplayer1 = $('#player1').val()
      nameplayer2 = $('#player2').val()
        if (xox) {
          $(this).text('X');
          xox = false;
        }
        else {
          $(this).text('O');
          xox = true;
        }
      xwin();
      owin();
      count++
    } while (count>9);
  }
})


//funzione verifico la vincita di x
function xwin() {
  if (($('.c1').text()=='X') && ($('.c2').text()=='X') && ($('.c3').text()=='X') ||
      ($('.c4').text()=='X') && ($('.c5').text()=='X') && ($('.c6').text()=='X') ||
      ($('.c7').text()=='X') && ($('.c8').text()=='X') && ($('.c9').text()=='X') ||
      ($('.c1').text()=='X') && ($('.c4').text()=='X') && ($('.c7').text()=='X') ||
      ($('.c2').text()=='X') && ($('.c5').text()=='X') && ($('.c8').text()=='X') ||
      ($('.c3').text()=='X') && ($('.c6').text()=='X') && ($('.c9').text()=='X') ||
      ($('.c1').text()=='X') && ($('.c5').text()=='X') && ($('.c9').text()=='X') ||
      ($('.c3').text()=='X') && ($('.c5').text()=='X') && ($('.c7').text()=='X') )
   {
    alert(nameplayer1 + " ha vinto!");
  }
}

//funzione verifico la vincita di O
function owin() {
  if (($('.c1').text()=='O') && ($('.c2').text()=='O') && ($('.c3').text()=='O') ||
      ($('.c4').text()=='O') && ($('.c5').text()=='O') && ($('.c6').text()=='X') ||
      ($('.c7').text()=='O') && ($('.c8').text()=='O') && ($('.c9').text()=='O') ||
      ($('.c1').text()=='O') && ($('.c4').text()=='O') && ($('.c7').text()=='O') ||
      ($('.c2').text()=='O') && ($('.c5').text()=='O') && ($('.c8').text()=='O') ||
      ($('.c3').text()=='O') && ($('.c6').text()=='O') && ($('.c9').text()=='O') ||
      ($('.c1').text()=='O') && ($('.c5').text()=='O') && ($('.c9').text()=='O') ||
      ($('.c3').text()=='O') && ($('.c5').text()=='O') && ($('.c7').text()=='O') )
   {
    alert(nameplayer2 + " ha vinto!");
  }
}
