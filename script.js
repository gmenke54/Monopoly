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

let diceStatus = 'on';
const notBox = document.getElementById('noticeBox');
const notMsg = document.getElementById('noticeMessage');

const token1 = document.getElementById('token1');
const token2 = document.getElementById('token2');

class player {
  constructor(tokenNum, persName) {
    this.persName = persName;
    this.token = tokenNum;
    this.curPos = 0;
    this.bankAcc = 1500;
    this.propsOwned = [];
    this.totPropsVal = 0;
    this.totVal = this.bankAcc + this.totPropsVal;
    this.jailCount = 0;
  }
  // buyProp(prop) {
  //  add logic here
  // }
}
let p1 = new player(token1, 'Allegra');
let p2 = new player(token2, 'Grant');

class colProperty {
  constructor(name, cost, spaceNum) {
    this.name = name;
    this.cost = cost;
    this.rent = Math.ceil(this.cost / 13);
    this.spc = spacesArr[spaceNum];
    this.ownStatus = 'available';
    this.houseCost = 100;
    this.curHouses = 0;
  }
}
let medit = new colProperty('Mediteranean Avenue', 60, 1);
let baltic = new colProperty('Baltic Avenue', 60, 3);
let oriental = new colProperty('Oriental Avenue', 100, 6);
let vermont = new colProperty('Vermont Avenue', 100, 8);
let connet = new colProperty('Conneticut Avenue', 120, 9);
//////////////////////

//Functions Here:

createNot = (message) => {
  notMsg.innerText = message;
  notBox.style.opacity = 1;
};

pauseJumpPos = (ply, newPos) => {
  setTimeout(
    (jumpPos = () => {
      notBox.style.opacity = 0;
      spacesArr[newPos].appendChild(ply.token);
      ply.curPos = newPos;
      checkSpc(ply);
    }),
    3000
  );
};

buyProp = (ply, prop) => {
  ply.bankAcc -= prop.cost;
  ply.propsOwned.push(prop);
  prop.ownStatus = 'owned';
};

// ASK michael why this function sends the object class instead of the object name into the array
buyProp(p1, baltic);
buyProp(p1, medit);
buyProp(p1, oriental);
console.log(p1.propsOwned);
console.log(p1.bankAcc);

checkSpc = (ply) => {
  if (ply.curPos === 0) {
    createNot('You landed on go, collect an extra $200.');
    ply.bankAcc += 200;
  }
  if (ply.curPos === 30) {
    createNot('Go directly to jail. Do not pass go. Do not collect $200.');
    // add settimeout here
    pauseJumpPos(ply, 10);
  }
  if (ply.curPos === 4) {
    createNot('You must pay income taxes. Pay $200.');
    ply.bankAcc -= 200;
  }
  if (ply.curPos === 10) {
    createNot('You are just visiting jail.');
    //  FIX JAIL LOGIC HERE:
    //  if (ply.curPos !== 10) {
    //   checkSpc(ply);
    // } else {
    //   ply.jailCount += 1;
  }
  if (ply.curPos === 38) {
    createNot('You must pay luxury taxes. Pay $100.');
    ply.bankAcc -= 100;
  }
  if (ply.curPos === 7 || ply.curPos === 22 || ply.curPos === 36) {
    createNot(
      'You landed on a chance space. You will now be move forward to a random space on the board. Good luck!'
    );
    let randomSpc = Math.floor(Math.random() * 39);
    console.log(randomSpc);
    pauseJumpPos(ply, randomSpc);
  }
  if (ply.cur === 20) {
    createNot('Relax! Nothing happens.');
  }
};

rollDice = (ply) => {
  notBox.style.opacity = 0;
  let dice1 = Math.ceil(Math.random() * 6);
  let dice2 = Math.ceil(Math.random() * 6);
  let roll = dice1 + dice2;
  alert(`You rolled a ${dice1} and a ${dice2} for a total of ${roll}`);
  // let roll = 30;
  ply.curPos += roll;
  if (ply.curPos >= spacesArr.length) {
    ply.curPos -= 40;
    spacesArr[ply.curPos].appendChild(ply.token);
  } else {
    spacesArr[ply.curPos].appendChild(ply.token);
  }
  checkSpc(ply);
};

//////////////////////

// Click Events Here:
rollBtn1.addEventListener('click', () => {
  if (diceStatus === 'on') {
    rollDice(p1);
  }
});
rollBtn2.addEventListener('click', () => {
  if (diceStatus === 'on') {
    rollDice(p2);
  }
});
clearCardBtn.addEventListener('click', () => {
  notBox.style.opacity = 0;
  // add clearTimeout(timeoutID) here referencing the id of the pauseJumpPos ID
});

//////////////////////
