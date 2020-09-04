let tresc_diva1 ="";
	
	for (i=0; i<=9; i++)
	{
		tresc_diva1 = tresc_diva1 + `<div class="podstawa" onclick="pisz(`+i+`)">`+i+`</div>`;
	}
	
    document.getElementById("podstawa").innerHTML = tresc_diva1;



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



let podstawa;
let wykladnik;
let wartosc;
let zero = false;
let jedynka =false;
let duble=[20,20]


function losuj()
{
    let licznik = 1;
    console.log(jedynka);
    console.log(zero);

while(licznik<2)
    {  
    if(zero&!jedynka)podstawa = Math.floor(Math.random()*15+1);
    else if(jedynka & zero)podstawa = Math.floor(Math.random()*14+2);
    else podstawa = Math.floor(Math.random()*16);
    if(podstawa==0)
    {
      wykladnik=Math.floor(Math.random()*15+1);
      zero=true;  
    } 
    if(podstawa>4) wykladnik=2;
    if(podstawa==1)
    {
        wykladnik=Math.floor(Math.random()*15+1);
        jedynka=true;
    } 
    if(podstawa==2) wykladnik=Math.floor(Math.random()*6);
    if(podstawa==3) wykladnik=Math.floor(Math.random()*3+2);  
    if(podstawa==4) wykladnik=Math.floor(Math.random()*4); 

    let powtorka = false;
        
        for(i=0; i<duble.length; i++)
        {
            if((duble[i]==podstawa && duble[i+1]==wykladnik)) 
            {
               powtorka = true; 
               break; 
            } 
           
        }
      
        if(powtorka) continue;
        
        duble.push(podstawa);
        duble.push(wykladnik);
        duble.push(20);


    wartosc=podstawa**wykladnik;
    
    document.getElementById("wynik").innerHTML=podstawa+"<sup>"+wykladnik+"</sup>";  
    licznik++; 

    
    }

}


losuj();


function pisz(p)
{
    document.getElementById("potega").innerHTML=document.getElementById("potega").innerText+p;   
}

function usun()
{
    document.getElementById("potega").innerHTML=document.getElementById("potega").innerText.slice(0,-1);   
}


function sprawdz()

{if(koniecczasu==0)
    {
    if(wartosc==document.getElementById("potega").innerText)
    {
    punkt++;
    document.getElementById("punkty").innerHTML="punktów: "+ punkt;
    
    }
    if(pytanie<10)
    {
    pytanie++;
    document.getElementById("pytanie").innerHTML="pytanie: "+pytanie;

    document.getElementById("potega").innerHTML="";
    losuj();
    
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




function zakoncz()
{
                let ocena;
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
	
	for (i=0; i<=9; i++)
	{
		tresc_diva1 = tresc_diva1 + `<div class="podstawa">`+i+`</div>`;
	}
	
    document.getElementById("podstawa").innerHTML = tresc_diva1;


}

