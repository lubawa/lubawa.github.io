let tresc_diva1 ="";
	
	for (i=2; i<=15; i++)
	{
		tresc_diva1 = tresc_diva1 + `<div class="podstawa" onclick="pisz1(`+i+`)">`+i+`</div>`;
	}
	
    document.getElementById("podstawa").innerHTML = tresc_diva1;

let tresc_diva2 ="";
	
	for (i=2; i<=5; i++)
	{
		tresc_diva2 = tresc_diva2 + `<div class="podstawa" onclick="pisz2(`+i+`)">`+i+`</div>`;
	}
	
	document.getElementById("wykladnik").innerHTML = tresc_diva2;

let minuta = 1;
let sekunda = 0;
let koniecczasu = 0;
let koniec=0;

function odliczanie()
{
        if(minuta<=0&&sekunda<=0)
            { 
                if(koniec==0) document.getElementById("czas").innerHTML="koniec czasu";
                koniecczasu = 1; 
                zakoncz();               
            }

            
        sekunda=sekunda-1;
        if (sekunda<0) {sekunda=59; minuta=minuta-1;}
	    if (minuta<0) {sekunda=59;}


        if(minuta>=0&&sekunda>=0)
            {
                document.getElementById("czas").innerHTML= minuta+":"+ sekunda;
                if(sekunda<10) document.getElementById("czas").innerHTML= minuta+":0"+ sekunda;
                setTimeout("odliczanie()",1000);
            } 
}

odliczanie();

let punkt=0;
let pytanie=1;
document.getElementById("punkty").innerHTML="punktów: "+ punkt;
document.getElementById("pytanie").innerHTML="pytanie: "+pytanie;

let wynik=[4,8,9,16,25,27,32,36,49,64,81,100,121,125,144,169,196,225];
let los;
let duble=["D"]

function losuj()
{
    let licznik=1;
    while(licznik<2)
    {
    los=wynik[Math.floor(Math.random() * wynik.length)];
    
    let dubel = false;
    for(i=0; i<duble.length; i++)
    {
        if(duble[i]==los) 
        {
            dubel=true;
            break;
        }
    }
    if(dubel) continue;

    duble.push(los);
    document.getElementById("wynik").innerHTML=los; 
    licznik++;  
   
    }
}

losuj();

let pdst="";
let wykl;
let wartosc;

function pisz1(p)
{
   
    document.getElementById("potega").innerHTML=p;
    pdst=p;
}



function pisz2(w)
{

    document.getElementById("potega").innerHTML=pdst+"<sup>"+w+"</sup>";
    wykl=w;
    wartosc=pdst**wykl;

}


function sprawdz()
{if(koniecczasu==0)
    {
    if(wartosc==los)
    {
    punkt++;
    document.getElementById("punkty").innerHTML="punktów: "+ punkt;
    }
    if(pytanie<10)
    {
    pytanie++;
    document.getElementById("pytanie").innerHTML="pytanie: "+pytanie;
    czysc();
    losuj();
    pdst="";
    }
    else
    {
        minuta =0;
        sekunda=0;
        koniec=1;  
        zakoncz();
    }
    }
}

function czysc()
{
    tresc="";
    document.getElementById("potega").innerHTML=tresc;
}



function zakoncz()
{
                let ocena;
                console.log(punkt);
                if(punkt<7) ocena = 'ndst';
                if([7].includes(punkt)) ocena = 'dop';
                if([8].includes(punkt)) ocena = 'dst';
                if([9].includes(punkt)) ocena = 'db';
                if([10].includes(punkt)) ocena ='bdb';
     
    if(ocena==="bdb") 
    {document.getElementById("srodek").innerHTML=`<span style="font-size:30px;">Ocena: `+ ocena+`</span><br><span style="font-family: 'Caveat', cursive; font-size:200px; color: rgb(18, 59, 18);">Gratulacje!</span>`;}
    else
    {document.getElementById("srodek").innerHTML=`<br><br><span style="font-size:30px;">Ocena: `+ ocena+`</span>`;}


    tresc_diva1 ="";
	
	for (i=2; i<=15; i++)
	{
		tresc_diva1 = tresc_diva1 + `<div class="podstawa">`+i+`</div>`;
	}
	
    document.getElementById("podstawa").innerHTML = tresc_diva1;

    tresc_diva2 ="";
	
	for (i=2; i<=5; i++)
	{
		tresc_diva2 = tresc_diva2 + `<div class="podstawa" >`+i+`</div>`;
	}
	
	document.getElementById("wykladnik").innerHTML = tresc_diva2;
}

