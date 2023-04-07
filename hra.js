let currentPlayer = 'circle';

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    const circleElm = document.querySelector('.circle');
    circleElm.remove();
    const whoPlaysElm = document.querySelector('.whoplays');
    whoPlaysElm.innerHTML = `<span class="whoplays__player">HRAJE: </span>
    <svg class="cross"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            overflow="visible"
            stroke="white"
            stroke-width="2.5"
          >
            <line x2="20" y2="20" />
            <line x1="20" y2="20" />
          </svg>

    `;
    return (currentPlayer = 'cross');
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross');
    const crossElm = document.querySelector('.cross');
    crossElm.remove();
    const whoPlaysElm = document.querySelector('.whoplays');
    whoPlaysElm.innerHTML = `<span class="whoplays__player">HRAJE: </span>
    <svg class="circle" width="36" height="36">
      <circle
        class="circle"
        cx="18"
        cy="18"
        r="10"
        stroke="white"
        stroke-width="2.5"
        fill="transparent"
      />
    </svg>`;
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
