
let minuta = 0;
let sekunda = 0;
let koniecczasu = 0;
let koniec=0;

function odliczanie()
{
 
        if(minuta<=0&&sekunda<=0)
            { 
                if(koniec==0) document.getElementById("dzialanie").innerHTML+=`<p style="font-size:20px;">Koniec czasu</p>`;
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


let klawisze="";
for(i=1; i<10; i++){
    klawisze=klawisze+ `<button id="klawisz`+i+`" onclick="pisz(`+i+`)">`+i+`</button>`;
}
klawisze=klawisze+`<button id="cofnij" onclick="usun()">usuń</button><button id="klawisz0" onclick="pisz(0)">0</button><button id="check" onclick=";">sprawdź</button>`;
document.getElementById("klawiatura").innerHTML=klawisze;

function pisz(p)
{
    document.getElementById("wynik").innerHTML=document.getElementById("wynik").innerText+p;   
}

function usun()
{
    document.getElementById("wynik").innerHTML=document.getElementById("wynik").innerText.slice(0,-1);   
}

let skladnik1;
let skladnik2;


function losuj()
{
skladnik1=Math.floor(Math.random()*90+10);
skladnik2=Math.floor(Math.random()*90+10);
}

function send_plus(){
document.getElementById("dzialanie").innerHTML=skladnik1+"+"+skladnik2+" =";
}

function send_minus(){
    
    if(skladnik1<skladnik2){
        let skladnik=skladnik1;
        skladnik1=skladnik2;
        skladnik2=skladnik;
    }
document.getElementById("dzialanie").innerHTML=skladnik1+"-"+skladnik2+" =";
}

let il_pytan=0;

function start(){
    il_pytan = document.getElementById("pytania").value;
    sekunda = document.getElementById("czas").value;
    if(sekunda>59){
        minuta=Math.floor(sekunda/60);
        sekunda=sekunda%60;
    }
    odliczanie();
    losuj();
    send_plus();
    document.getElementById("check").setAttribute("onclick","sprawdz()");
}


let pytanie=1;
let brawo=0;
let pudlo=0;


function sprawdz()
{
document.getElementById("container_lewy").innerHTML+="<br>"+document.getElementById("dzialanie").innerText+" "+document.getElementById("wynik").innerText+" ";

    let znaczek1=`<span style="font-size:30px; color: green;">&#10004</span>`;
    let znaczek2=`<span style="font-size:30px; color: red;">&#10006</span>`;

if(pytanie%2==1){
if (document.getElementById("wynik").innerText==skladnik1+skladnik2) {
    document.getElementById("znaczki").innerHTML += znaczek1; // .appendChild(znaczek1);
    document.getElementById("container_lewy").innerHTML += znaczek1;
    brawo++
}
else {
    document.getElementById("znaczki").innerHTML += znaczek2; // .appendChild(znaczek2);
    document.getElementById("container_lewy").innerHTML += znaczek2;
    document.getElementById("container_lewy").innerHTML += skladnik1+skladnik2;
    pudlo++;

}
}

if(pytanie%2==0){
    if (document.getElementById("wynik").innerText==skladnik1-skladnik2) {
        document.getElementById("znaczki").innerHTML += znaczek1; // .appendChild(znaczek1);
        document.getElementById("container_lewy").innerHTML += znaczek1;
        brawo++
    }
    else {
        document.getElementById("znaczki").innerHTML += znaczek2; // .appendChild(znaczek2);
        document.getElementById("container_lewy").innerHTML += znaczek2;
        document.getElementById("container_lewy").innerHTML += skladnik1-skladnik2;
        pudlo++;
    
    }
    }


    if(pytanie==il_pytan) zakoncz();
    else{
    document.getElementById("wynik").innerHTML="";
    pytanie++;
    if(koniecczasu==0) 
    {losuj();
        if(pytanie%2==0)send_minus();
        else send_plus();}
    else zakoncz();
    }
    
}

function zakoncz(){
    document.getElementById("wynik").innerHTML="";
    for(i=0;i<10;i++) document.getElementById("klawisz"+i).setAttribute("onclick",";");
    document.getElementById("cofnij").setAttribute("onclick",";");
    document.getElementById("check").setAttribute("onclick",";");
    document.getElementById("dzialanie").innerHTML =`<p style="font-size: 20px;">Uzyskano `+Math.floor(brawo*100/il_pytan)+`%<br> prawidłowych odpowiedzi</p>`;
    minuta=0;
    sekunda=0;
    koniec=1;
    
}
