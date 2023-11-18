function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let leftBeforeMove = parseInt(dodger.style.left.replace('px', ''), 10);
  
    if (isNaN(leftBeforeMove)) {
      leftBeforeMove = 0;
    }
  
    const gameWidth = document.getElementById('game').offsetWidth;
    const dodgerWidth = 40;
  
    const newLeft = Math.max(leftBeforeMove + 1, 0); // Ensure the new position is never negative
  
    dodger.style.left = `${newLeft}px`;
  }
  