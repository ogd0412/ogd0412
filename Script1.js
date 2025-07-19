// JavaScript source code

const start_x = 30; //시작과 끝좌표, 웹 에서
const final_x = 625;

const start_y = 90;
const final_y = 685;

const union_type =
{
    none: 'none',
    type1: 'type1',
    type2: 'type2',
    type3: 'type3',
    type4: 'type4',
    type5: 'type5',
    type6: 'type6',
    type7: 'type7',
    type8: 'type8',

}

const data_base =    //길드,이름,x좌표,y좌표,문서 링크, 길드 간부인가 
    [
        [union_type.none, 'ndes', 123, 322, 'http', false],
        [union_type.type1, 'nder', 321, 1, 'http', false],
        [union_type.type2, 'ewq', 211, 4, 'http', false],
        [union_type.type3, 'zxe', 257, 90, 'http', false],
        [union_type.type4, '한국말', 399, 24, 'http', false],
        [union_type.type5, 'dse', 588, 200, 'http', false],
        [union_type.type6, 'rqq', 203, 307, 'http', false],


    ]

 
function search(player) {
    const position_text_el= document.querySelectorAll('.position_text'); //귀찮으니까 클래스 전체 삭제로 만듬
    position_text_el.forEach(el => el.remove());
    const player_name_text_el = document.querySelectorAll('.player_name_text');
    player_name_text_el.forEach(el => el.remove());


    for (i = 0; i < data_base.length; i++) {
        if (data_base[i][1] == player) {
            const nikename = document.createElement("h1"); //플레이어 이름 띄어주는 코드
            nikename.textContent = player;
            nikename.classList.add('player_name_text'); //css
            document.body.appendChild(nikename);

            const position = document.createElement("p"); //좌표 띄어주는 코드
            position.textContent = '[' + data_base[i][2] + ',' + data_base[i][3] + ']';
            position.classList.add('position_text'); //css
            document.body.appendChild(position);

        }

    }
}





function createbutton(union, name, position_x, position_y, document_link, high_player)
 
{
     
    const container = document.getElementById('button-container');
    const button = document.createElement('button');

    button.classList.add('position_button'); //css

    x = start_x + (final_x - start_x) / 600 * position_x; //x와y좌표 웹과 구만에이커 비율 맞추기
    y = start_y + (final_y - start_y) / 600 * position_y;
    button.style.left = x + 'px';
    button.style.top = y + 'px';

    //------------------------------------------------------------------------------
    //클랜 별로 색깔 맞추기
    switch (union) {
        case union_type.none: button.classList.add('none'); break;
        case union_type.type1: button.classList.add('type1'); break;
        case union_type.type2: button.classList.add('type2'); break;
        case union_type.type3: button.classList.add('type3');break;
        case union_type.type4: button.classList.add('type4');break;
        case union_type.type5: button.classList.add('type5'); break;
        case union_type.type6: button.classList.add('type6'); break;
        case union_type.type7: button.classList.add('type7'); break;
        case union_type.type8: button.classList.add('type8'); break;
    }
    //---------------------------------------------------------------------------------


    button.addEventListener('click', () => { search(name); });



    document.body.appendChild(button);
}
 


function union_search(uni)
{
     
    for (i = 0; i < data_base.length ; i++)
    {
         
         
        if (data_base[i][0] == uni)
       {
            
            createbutton(data_base[i][0], data_base[i][1], data_base[i][2], data_base[i][3], data_base[i][4], data_base[i][5]);
       }
    }
    over_click(uni);
}


none_up = false;
union1_up = false;
union2_up = false;
union3_up = false;
union4_up = false;
union5_up = false;
union6_up = false;
union7_up = false;
union8_up = false;

function over_click(uni) //이미 클릭된 거 였으면, 사라지게 만들기
{
    switch (uni)  
    {
        case union_type.none: if (none_up) { document.querySelectorAll('.none').forEach(el => el.remove()); }
            none_up = !none_up; break;
        case union_type.type1: if (union1_up) { document.querySelectorAll('.type1').forEach(el => el.remove()); }  
            union1_up = !union1_up; break;
        case union_type.type2: if (union2_up) { document.querySelectorAll('.type2').forEach(el => el.remove()); }
            union2_up = !union2_up;  break;
        case union_type.type3: if (union3_up) { document.querySelectorAll('.type3').forEach(el => el.remove()); }  
            union3_up = !union3_up; break;
        case union_type.type4: if (union4_up) { document.querySelectorAll('.type4').forEach(el => el.remove()); }
            union4_up = !union4_up; break; 
        case union_type.type5: if (union5_up) { document.querySelectorAll('.type5').forEach(el => el.remove()); }
            union5_up = !union5_up; break; 
        case union_type.type6: if (union6_up) { document.querySelectorAll('.type6').forEach(el => el.remove()); }
            union6_up = !union6_up; break;
        case union_type.type7: if (union7_up) { document.querySelectorAll('.type7').forEach(el => el.remove()); }
            union7_up = !union7_up; break;
        case union_type.type8: if (union8_up) { document.querySelectorAll('.type8').forEach(el => el.remove()); }
            union8_up = !union8_up; break;
    }
     

}

function search_name( )
{
    player_nike_name = document.getElementById("player_name_text").value;
    search(player_nike_name);
}
  
