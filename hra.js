let currentPlayer = 'circle';

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    return (currentPlayer = 'cross');
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross');
    return (currentPlayer = 'circle');
  }
};

document.querySelector('.button1').addEventListener('click', addClass);
document.querySelector('.button2').addEventListener('click', addClass);
document.querySelector('.button3').addEventListener('click', addClass);
document.querySelector('.button4').addEventListener('click', addClass);
document.querySelector('.button5').addEventListener('click', addClass);
document.querySelector('.button6').addEventListener('click', addClass);
document.querySelector('.button7').addEventListener('click', addClass);
document.querySelector('.button8').addEventListener('click', addClass);
document.querySelector('.button9').addEventListener('click', addClass);
document.querySelector('.button10').addEventListener('click', addClass);
