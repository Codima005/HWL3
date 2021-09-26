result = 0;

q1 = prompt(`Enter result of 2+2`);
if(q1==4){
    result+=10;
}

q2 = confirm(`Does the sun rise in the east?`);
if(q2){
    result+=10;
}

q3 = prompt (`Enter result of 5/0`);
if(q3==0){
    result +=10;
}

q4 = prompt (`Enter color of the sky`);
q4 = q4.replaceAll(' ','').toLowerCase();
if(q4==`blue`){
    result+=10;
}


q5 = prompt (`what a correct answer to the main 
question of life, the universe and all that`);
if(q5==42){
    result+=10;
}

alert(`Final result: ${result}`);