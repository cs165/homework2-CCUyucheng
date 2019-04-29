// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
function choice1(event){
  for(let tmp of arrayBox1){
    i = tmp.querySelector('.checkbox');
    i.src = 'images/unchecked.png';
    tmp.style = "opacity:0.6;";
  }
  const image = event.currentTarget.querySelector('.checkbox');
  image.src = 'images/checked.png';
  event.currentTarget.style = "opacity:1;background-color:#cfe3ff;";
  goal=event.currentTarget.dataset.choiceId;
}

function choice2(event){
  for(let tmp of arrayBox2){
    i = tmp.querySelector('.checkbox');
    i.src = 'images/unchecked.png';
    tmp.style = "opacity:0.6;";
  }
  const image = event.currentTarget.querySelector('.checkbox');
  image.src = 'images/checked.png';
  event.currentTarget.style = "opacity:1;background-color:#cfe3ff;";
}

function choice3(event){
  for(let tmp of arrayBox3){
    i = tmp.querySelector('.checkbox');
    i.src = 'images/unchecked.png';
    tmp.style = "opacity:0.6;";
  }
  const image = event.currentTarget.querySelector('.checkbox');
  image.src = 'images/checked.png';
  event.currentTarget.style = "opacity:1;background-color:#cfe3ff;";

  /*    delete  listeners     */

  for(const del1 of boxes1){
    del1.removeEventListener('click',choice1);
  }

  for(const del2 of boxes2){
    del2.removeEventListener('click',choice2);
  }

  for(const del3 of boxes3){
    del3.removeEventListener('click',choice3);
  }


  /*   show   result    */
  show.style="display:contents;"
  rst.addEventListener('click',restart);
  document.getElementById("hh").innerHTML=RESULTS_MAP[goal].title;
  document.getElementById("pp").innerHTML=RESULTS_MAP[goal].contents;
}

function restart(event){
  show.style="display:none;";

  /*   reset pictures   */
  for(let tmp of arrayBox1){
    i = tmp.querySelector('.checkbox');
    i.src = 'images/unchecked.png';
    tmp.style = "opacity:1;";
  }
  for(let tmp of arrayBox2){
    i = tmp.querySelector('.checkbox');
    i.src = 'images/unchecked.png';
    tmp.style = "opacity:1;";
  }
  for(let tmp of arrayBox3){
    i = tmp.querySelector('.checkbox');
    i.src = 'images/unchecked.png';
    tmp.style = "opacity:1;";
  }

  /*   re-listening   */
  for(const box1 of boxes1){
    box1.addEventListener('click',choice1);
  }

  for(const box2 of boxes2){
    box2.addEventListener('click',choice2);
  }

  for(const box3 of boxes3){
    box3.addEventListener('click',choice3);
  }
  rst.removeEventListener('click',restart);
}

/*--------*/
/*  main  */
/*--------*/

const boxes1 = document.querySelectorAll('div[data-question-id=one]');
const boxes2 = document.querySelectorAll('div[data-question-id=two]');
const boxes3 = document.querySelectorAll('div[data-question-id=three]');
const show=document.querySelector('#result');
const rst=document.querySelector('#rst');
var goal;
const arrayBox1=[],arrayBox2=[],arrayBox3=[];

for(const box1 of boxes1){
  box1.addEventListener('click',choice1);
  arrayBox1.push(box1);
}

for(const box2 of boxes2){
  box2.addEventListener('click',choice2);
  arrayBox2.push(box2);
}

for(const box3 of boxes3){
  box3.addEventListener('click',choice3);
  arrayBox3.push(box3);
}
