//Global Variables Here:
const spc1 = document.getElementById('go');
const spc2 = document.querySelector('#botProps').children[8];
const spc3 = document.querySelector('#botProps').children[7];
const spc4 = document.querySelector('#botProps').children[6];
const spc5 = document.querySelector('#botProps').children[5];
const spc6 = document.querySelector('#botProps').children[4];
const spc7 = document.querySelector('#botProps').children[3];
const spc8 = document.querySelector('#botProps').children[2];
const spc9 = document.querySelector('#botProps').children[1];
const spc10 = document.querySelector('#botProps').children[0];
const spc11 = document.getElementById('jail');
const spc12 = document.querySelector('#leftProps').children[8];
const spc13 = document.querySelector('#leftProps').children[7];
const spc14 = document.querySelector('#leftProps').children[6];
const spc15 = document.querySelector('#leftProps').children[5];
const spc16 = document.querySelector('#leftProps').children[4];
const spc17 = document.querySelector('#leftProps').children[3];
const spc18 = document.querySelector('#leftProps').children[2];
const spc19 = document.querySelector('#leftProps').children[1];
const spc20 = document.querySelector('#leftProps').children[0];
const spc21 = document.getElementById('freePark');
const spc22 = document.querySelector('#topProps').children[0];
const spc23 = document.querySelector('#topProps').children[1];
const spc24 = document.querySelector('#topProps').children[2];
const spc25 = document.querySelector('#topProps').children[3];
const spc26 = document.querySelector('#topProps').children[4];
const spc27 = document.querySelector('#topProps').children[5];
const spc28 = document.querySelector('#topProps').children[6];
const spc29 = document.querySelector('#topProps').children[7];
const spc30 = document.querySelector('#topProps').children[8];
const spc31 = document.getElementById('goJail');
const spc32 = document.querySelector('#rightProps').children[0];
const spc33 = document.querySelector('#rightProps').children[1];
const spc34 = document.querySelector('#rightProps').children[2];
const spc35 = document.querySelector('#rightProps').children[3];
const spc36 = document.querySelector('#rightProps').children[4];
const spc37 = document.querySelector('#rightProps').children[5];
const spc38 = document.querySelector('#rightProps').children[6];
const spc39 = document.querySelector('#rightProps').children[7];
const spc40 = document.querySelector('#rightProps').children[8];
let spacesArr = [
  spc1,
  spc2,
  spc3,
  spc4,
  spc5,
  spc6,
  spc7,
  spc8,
  spc9,
  spc10,
  spc11,
  spc12,
  spc13,
  spc14,
  spc15,
  spc16,
  spc17,
  spc18,
  spc19,
  spc20,
  spc21,
  spc22,
  spc23,
  spc24,
  spc25,
  spc26,
  spc27,
  spc28,
  spc29,
  spc30,
  spc31,
  spc32,
  spc33,
  spc34,
  spc35,
  spc36,
  spc37,
  spc38,
  spc39,
  spc40
];

const token1 = document.getElementById('token1');

class player {
  constructor(tokenNum) {
    this.token = tokenNum;
    this.curPos = 0;
    this.bankAcc = 1500;
  }
  // buyProp(prop) {
  //  add logic here
  // }
}
let p1 = new player(token1);

//////////////////////

//Functions Here:

jumpPos = (ply, newPos) => {
  newPos.appendChild(ply.token);
};

rollDice = (ply) => {
  let dice1 = Math.ceil(Math.random() * 6);
  let dice2 = Math.ceil(Math.random() * 6);
  let roll = dice1 + dice2;
  alert(`You rolled a ${dice1} and a ${dice2} for a total of ${roll}`);
  ply.curPos += roll;
  if (ply.curPos >= spacesArr.length) {
    ply.curPos -= 40;
    spacesArr[ply.curPos].appendChild(ply.token);
  } else {
    spacesArr[ply.curPos].appendChild(ply.token);
  }
};

//////////////////////

// Click Events Here:
rollBtn.addEventListener('click', () => {
  rollDice(p1);
});

//////////////////////
