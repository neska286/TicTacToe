const title  = document.querySelector('.title')
let turn = 'x'

let squares = []

function game(id){
    let element = document.getElementById(id)
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'X'
        turn = 'o'
        title.innerHTML = 'O'
    }else if(turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O'
        turn = 'x' 
        title.innerHTML = 'X'
    }
    winner()
}
function checkWinner(num1,num2,num3){
    title.innerHTML = `${squares[num1]} winner`
    document.getElementById(`item${num1}`).style.background = 'rgb(139, 169, 204)'
    document.getElementById(`item${num2}`).style.background = 'rgb(139, 169, 204)'
    document.getElementById(`item${num3}`).style.background = 'rgb(139, 169, 204)'
    setInterval(()=>{
        title.innerHTML += '.'
    },1000)
    setTimeout(()=>{
        location.reload()
    },4000)
}
function winner(){
 for(let i= 1 ; i<10 ;i++){
     squares[i] = document.getElementById(`item${i}`).innerHTML
 }
 //horizontal
 if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
    checkWinner(1,2,3)
 }
 else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){
    checkWinner(4,5,6)
}
else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ''){
    checkWinner(7,8,9)
}
//vertical
else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
    checkWinner(1,4,7)
}
else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
    checkWinner(2,5,8)
}
else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
    checkWinner(3,6,9)
}
//cross
else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
    checkWinner(1,5,9)
}
else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
    checkWinner(3,5,7)
}

}