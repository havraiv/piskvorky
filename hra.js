let currentPlayer = 'circle';
const crossSvg = `<span class="whoplays__player">HRAJE: </span>
<svg class="cross" width="20" height="20" viewBox="0 0 20 20" overflow="visible" stroke="white" stroke-width="2.5">
  <line x2="20" y2="20" />
  <line x1="20" y2="20" />
</svg>`;
const circleSvg = `<span class="whoplays__player">HRAJE: </span>
<svg class="circle" width="36" height="36">
  <circle class="circle" cx="18" cy="18" r="10" stroke="white" stroke-width="2.5" fill="transparent"/>
</svg>`;

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    const circleElm = document.querySelector('.circle');
    circleElm.remove();
    const whoPlaysElm = document.querySelector('.whoplays');
    whoPlaysElm.innerHTML = crossSvg;
    return (currentPlayer = 'cross');
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    const crossElm = document.querySelector('.cross');
    crossElm.remove();
    const whoPlaysElm = document.querySelector('.whoplays');
    whoPlaysElm.innerHTML = circleSvg;
    return (currentPlayer = 'circle');
  }
};

const confirmIt = (event) => {
  if (confirm('Opravdu chceš začít znovu?') === false) {
    event.preventDefault();
  }
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', addClass);
});

document.querySelector('.restart').addEventListener('click', confirmIt);
