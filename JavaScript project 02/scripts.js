var lista = document.querySelectorAll('td');
var caption = document.querySelector('caption');
var player = 1;
var count = 0
var partida = false;

function restart(){
    mesa = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]

    for(item in lista){
        lista[item].innerHTML = '';
        caption.innerText = 'Player: X'
        player = 1;
    }
    
    count = 0 
    partida = true;   
}
restart();

function inserirXO(index,posY,posX){
    lista[index].addEventListener('click', function(){
        if(partida){
            if(this.innerHTML === ''){
                if(player === 1){
                    this.innerHTML = '<span>X<span/>';
                    mesa[posY][posX] = 1;
                    player++;
                    caption.innerText = 'Player: O'
                    count++;
                    checkVitoria();
                }
                else{
                    this.innerHTML = '<span>O<span/>';
                    mesa[posY][posX] = 2;
                    caption.innerText = 'Player: X'
                    player = 1;
                    count++;
                    checkVitoria();
                }    
            }
        }
    })
}

inserirXO(0,0,0);
inserirXO(1,0,1);
inserirXO(2,0,2);
inserirXO(3,1,0);
inserirXO(4,1,1);
inserirXO(5,1,2);
inserirXO(6,2,0);
inserirXO(7,2,1);
inserirXO(8,2,2);


function checkVitoria(){
    partida = true;
    if( (mesa[0][0] === 1 && mesa[0][1] === 1 && mesa[0][2]  === 1) ||
    (mesa[1][0] === 1 && mesa[1][1] === 1 && mesa[1][2]  === 1) ||
    (mesa[2][0] === 1 && mesa[2][1] === 1 && mesa[2][2]  === 1) ||
    (mesa[0][0] === 1 && mesa[1][0] === 1 && mesa[2][0]  === 1) ||
    (mesa[0][1] === 1 && mesa[1][1] === 1 && mesa[2][1]  === 1) ||
    (mesa[0][2] === 1 && mesa[1][2] === 1 && mesa[2][2]  === 1) ||
    (mesa[0][0] === 1 && mesa[1][1] === 1 && mesa[2][2]  === 1) ||
    (mesa[0][2] === 1 && mesa[1][1] === 1 && mesa[2][0]  === 1)){
        caption.innerText = 'VITÓRIA X!'
        partida = false;
    }
    else if( (mesa[0][0] === 2 && mesa[0][1] === 2 && mesa[0][2]  === 2) ||
    (mesa[1][0] === 2 && mesa[1][1] === 2 && mesa[1][2]  === 2) ||
    (mesa[2][0] === 2 && mesa[2][1] === 2 && mesa[2][2]  === 2) ||
    (mesa[0][0] === 2 && mesa[1][0] === 2 && mesa[2][0]  === 2) ||
    (mesa[0][1] === 2 && mesa[1][1] === 2 && mesa[2][1]  === 2) ||
    (mesa[0][2] === 2 && mesa[1][2] === 2 && mesa[2][2]  === 2) ||
    (mesa[0][0] === 2 && mesa[1][1] === 2 && mesa[2][2]  === 2) ||
    (mesa[0][2] === 2 && mesa[1][1] === 2 && mesa[2][0]  === 2)){
        caption.innerText = 'VITÓRIA O!'
        partida = false;
    }
    else if(count >= 9){
        caption.innerText = 'EMPATE!'
        partida = false;
    }
}

