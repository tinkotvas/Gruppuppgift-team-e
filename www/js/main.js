$(document).on('click', 'rect', function(){
  const targetCircle = $(this).siblings('circle');
  if (game.isClickable(targetCircle)) {
    const color = game.getCurrentTurn();
    game.putDisc(targetCircle, color);
    game.changeTurn();
    game.checkWinner(color);
  }
});

$('#mystartbutton').on('click', function(){
  $('#myformhide').addClass('d-none').removeClass('d-block');
  $('#mygamehide').addClass('d-block').removeClass('d-none');
})

$('#myquitbutton').on('click', function(){
  $('#myformhide').addClass('d-block').removeClass('d-none');
  $('#mygamehide').addClass('d-none').removeClass('d-block');
})

function footerFix(){
  let height = $('footer').height() + 40;
  $('body').css({marginBottom: height});
}

footerFix();

$(window).on('resize',function(){
  footerFix();
});
