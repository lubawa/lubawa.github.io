let minuta = 1;
let sekunda = 30;
let koniecczasu = 0;
let koniec=0;

function odliczanie()
{
        if(minuta<=0&&sekunda<=0)
            { 
                if(koniec==0) document.getElementById("srodek").innerHTML="Niestety, <br> koniec czasu!";
                koniecczasu = 1; 
                for(i=0; i<12; i++)document.getElementById("ulamek"+i).setAttribute("onclick",";");
                for(i=12; i<24; i++)document.getElementById("procent"+i).setAttribute("onclick",";");    
                              
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




let okno="";
for(i=0; i<12; i++)
{
    okno=okno+`<div id="ulamek`+i+`" class="pion" onclick="wyslij_ulamek(`+i+`)" ></div>`
}
document.getElementById("ulamki").innerHTML=okno;


let okno1="";
for(i=12; i<24; i++)
{
    okno1=okno1+`<div id="procent`+i+`" class="poziom" onclick="wyslij_procent(`+i+`)"></div>`
}
document.getElementById("procenty").innerHTML=okno1;

document.getElementById("rowne").innerHTML=`<img src="procenty/rowne.png">`;
let nr_ulamka=[]; 
let nr_procenta=[];

function losuj() 
{
   
while(nr_ulamka.length<12)
{
    
    let nr_procenta=[];
    let powtorka =false;

    let f=Math.floor(Math.random()*12);
    for(i=0; i<nr_ulamka.length; i++)
    {
        if(nr_ulamka[i]==f) {powtorka= true; break;}
    }
    if(powtorka) continue;
    nr_ulamka.push(f);
   
}

for(i=0; i<12; i++)
{
    document.getElementById("ulamek"+i).innerHTML=`<img src="procenty/`+nr_ulamka[i]+`.png" >`;
}

while(nr_procenta.length<12)
{
    
    let powtorka =false;

    let w=Math.floor(Math.random()*12+12);
    for(i=0; i<nr_procenta.length; i++)
    {
        if(nr_procenta[i]==w) {powtorka= true; break;}
    }
    if(powtorka) continue;
    nr_procenta.push(w);
    
}

for(i=12; i<24; i++)
    {
        document.getElementById("procent"+i).innerHTML=`<img src="procenty/`+nr_procenta[i-12]+`.png">`;
    }
    
}

losuj();

let sprawdz_ulamek=[];
let sprawdz_procent=[];

let klik=false;
let klik1=false;

function wyslij_ulamek(n)
{
if(klik)document.getElementById("ulamek"+sprawdz_ulamek[0]).innerHTML=`<img src="procenty/`+sprawdz_ulamek[1]+`.png" >`
document.getElementById("ulamek"+n).innerHTML='';
document.getElementById("ulamek").innerHTML=`<img src="procenty/`+nr_ulamka[n]+`.png" >`
sprawdz_ulamek=[];
sprawdz_ulamek.push(n);
sprawdz_ulamek.push(nr_ulamka[n]);
klik=true;

}

function wyslij_procent(n)
{
if(klik1) document.getElementById("procent"+(sprawdz_procent[0]+12)).innerHTML=`<img src="procenty/`+sprawdz_procent[1]+`.png" >`
document.getElementById("procent"+n).innerHTML='';
document.getElementById("procent").innerHTML=`<img src="procenty/`+nr_procenta[n-12]+`.png" >`
sprawdz_procent=[];
sprawdz_procent.push(n-12);
sprawdz_procent.push(nr_procenta[n-12]);
klik1=true;
}

let brawo=0;
let pudlo=0;

function sprawdz()
{
if(klik&&klik1)
{
if(sprawdz_procent[1]-sprawdz_ulamek[1]==12)
    {
    brawo++;
    document.getElementById("ulamek").innerHTML='';
    document.getElementById("procent").innerHTML='';
    document.getElementById("ulamek"+sprawdz_ulamek[0]).setAttribute("onclick",";");
    document.getElementById("procent"+(sprawdz_procent[0]+12)).setAttribute("onclick",";");
    document.getElementById("brawo").innerHTML="<span>&#128512  </span>"+brawo;
    
    klik=false;
    klik1=false;
    if(brawo==12)
    {document.getElementById("srodek").innerHTML="";
    document.getElementById("srodek").innerHTML="Zadanie zakończone"
    if(pudlo==0)document.getElementById("srodek").innerHTML="<b>Bezbłędnie! Gratulacje!</b>"
    minuta=0;
    sekunda=0;
    koniec=1;
    }

 
    
}
else
{
    pudlo++;
    document.getElementById("pudlo").innerHTML= "<span>&#128577  </span>"+pudlo;
    document.getElementById("ulamek").innerHTML='';
    document.getElementById("procent").innerHTML='';
    document.getElementById("ulamek"+sprawdz_ulamek[0]).innerHTML=`<img src="procenty/`+sprawdz_ulamek[1]+`.png" >`
    document.getElementById("procent"+(sprawdz_procent[0]+12)).innerHTML=`<img src="procenty/`+sprawdz_procent[1]+`.png" >`
    klik=false;
    klik1=false;

}

}

}