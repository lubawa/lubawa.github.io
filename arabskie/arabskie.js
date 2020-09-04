let okienka="";
for(i=1; i<6; i++)
{
    okienka=okienka+'<div id="nr_pytanie'+i+'" class="okienko" style="border: 1px solid teal;">'+i+'</div>'
}
document.getElementById("rzad_okienek1").innerHTML = okienka;
let okienka1="";
for(i=1; i<6; i++)
{
    okienka1=okienka1+'<div id="pytanie'+i+'" class="okienko" ></div>'
}
document.getElementById("rzad_okienek2").innerHTML = okienka1;


let minuta = 1;
let sekunda = 0;
let koniecczasu = 0;
let koniec=0;

function odliczanie()
{
        if(minuta<=0&&sekunda<=0)
            { 
                if(koniec==0) document.getElementById("zegar").innerHTML="koniec czasu";
                koniecczasu = 1; 
                zakoncz();
                              
            }

            
        sekunda=sekunda-1;
        if (sekunda<0) {sekunda=59; minuta=minuta-1;}
	    if (minuta<0) {sekunda=59;}


        if(minuta>=0&&sekunda>=0)
            {
                document.getElementById("zegar").innerHTML= minuta+":"+ sekunda;
                if(sekunda<10) document.getElementById("zegar").innerHTML= minuta+":0"+ sekunda;
                setTimeout("odliczanie()",1000);
            } 
}

odliczanie();


let tresc_diva ="";
	
	for (i=0; i<=9; i++)
	{
		tresc_diva = tresc_diva + `<div Id="klawisz`+i+`" class="klawisz" onclick="pisz('`+i+`')">`+i+`</div>`;
	}
	
    document.getElementById("klawisze").innerHTML = tresc_diva;
 
let los;
    function losuj(a,b) 
{
    los=Math.floor(Math.random()*b+a);
    document.getElementById("losowanie").innerHTML =arab_to_rzym(los);
 
}  
losuj(10,100);

function pisz(p)
{
    document.getElementById("ekran").innerHTML=document.getElementById("ekran").innerText+p;   
}

function usun()
{
    document.getElementById("ekran").innerHTML=document.getElementById("ekran").innerText.slice(0,-1);   
}

function arab_to_rzym(liczba)
{
let arab_rzym={1:'I', 2:'II', 3:'III', 4:'IV', 5:'V', 6:'VI', 7:'VII', 8:'VIII', 9:'IX', 10:'X', 20:'XX', 30:'XXX',
40:'XL', 50:'L', 60:'LX', 70:'LXX', 80:'LXXX', 90:'XC', 100:'C', 200:'CC', 300:'CCC', 400:'CD', 500:'D', 600:'DC',
700:'DCC', 800:'DCCC', 900:'CM', 1000:'M', 2000:'MM', 3000:'MMM'}
let usun_zero=[];
let tysiace=Math.floor(liczba/1000);
if(tysiace>0) usun_zero.push(arab_rzym[tysiace*1000]);
let setki=Math.floor((liczba-tysiace*1000)/100);
if(setki>0) usun_zero.push(arab_rzym[setki*100]);
let dziesiatki=Math.floor((liczba-tysiace*1000-setki*100)/10);
if(dziesiatki>0) usun_zero.push(arab_rzym[dziesiatki*10]);
let jednosci=Math.floor(liczba-tysiace*1000-setki*100-dziesiatki*10);
if(jednosci>0) usun_zero.push(arab_rzym[jednosci]);
liczba_rzymska=usun_zero.join("");
return liczba_rzymska;
}

function zakoncz()
{
    minuta=0;
    sekunda=0;
    koniec=1;
    let procent;
    procent = punkt*20;
    document.getElementById("ekran").innerHTML="";
    document.getElementById("ekran").innerHTML = '<span style= "font-size:20px;">Uzyskano '+procent+'% prawidłowych odpowiedzi.</span>';
    document.getElementById("sprawdz").setAttribute("onclick",";");
    document.getElementById("usun").setAttribute("onclick",";");
    if(punkt<5) document.getElementById("rejestr").innerHTML=`<span onclick="pokaz_bledy()" style="color: wheat; cursor: pointer; font-size: 20px;">Rejestr błędów</span>`;
   
    for (i=0; i<=9; i++)
    {
        element="klawisz"+i;
        document.getElementById(element).setAttribute("onclick",";");
    }
}



let pytanie=1;
let punkt=0;
let bledy=[];


function sprawdz()
{

    if(los==document.getElementById("ekran").innerText)
    {
        document.getElementById("pytanie"+pytanie).style.background = "chartreuse";
        punkt++
    }
    else
    {
        document.getElementById("pytanie"+pytanie).style.background = "red";
        bledy.push([document.getElementById("losowanie").innerText,document.getElementById("ekran").innerText,los]);
    }
    if(pytanie==5) 
    {
    zakoncz();
    }
    else
    {
    pytanie++;
    losuj(pytanie*100,pytanie*400);
    document.getElementById("ekran").innerHTML="";
   
    }    
}

function pokaz_bledy()
{
    let wiersz_tabeli=new String;
    for(i=0; i<bledy.length; i++)
    {
        wiersz_tabeli=wiersz_tabeli+`<tr><td>`+(bledy[i])[0]+`</td><td>`+(bledy[i])[1]+`</td><td>`+(bledy[i])[2]+`</td></tr>`;
    }
    document.getElementById("mistakes").innerHTML='<table><tr><td style="color: black;">Zadanie</td><td style="color: black;">Było</td><td style="color: black;">Powinno być</td></tr>'+wiersz_tabeli+`</table>`
    
}

