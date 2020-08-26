function loadBigFoot(){
  document.getElementById('bigFoot').src = 'bigfoot.png'
}

function moveBigFoot(){
  alert('Nice going! You found big-foot!');
  var picture = document.getElementById('bigFoot')

  var x = Math.random() * 300
  var y = Math.random() * 300

  picture.style.top = x + 'px'
  picture.style.left = y + 'px'
}
