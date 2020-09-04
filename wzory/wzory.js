

let okno="";
for(i=0; i<5; i++)
{
    okno=okno+`<div id="okno`+i+`" class="okno" onclick="wez_figura(`+i+`)"></div>`
}
okno=okno+`<div id="bledy"></div>`;
okno=okno+`<div id="okno5" class="okno" onclick="wez_figura(5)"></div>`



document.getElementById("gorny").innerHTML=okno;


let okno1="";
for(i=6; i<11; i++)
{
    okno1=okno1+`<div id="okno`+i+`" class="okno" onclick="wez_wzor(`+i+`)"></div>`
}
okno1=okno1+`<div id="reload" class="okno" style="padding-left:20px; width:210px;><span class="reset" onclick="location.reload()" style="float:left; font-size: 30px; font-style: italic;">OD NOWA</span></div><div id="zegar" class="okno" ></div>`;
okno1=okno1+`<div id="okno11" class="okno" onclick="wez_wzor(11)"></div>`
document.getElementById("dolny").innerHTML=okno1;


let minuta = 0;
let sekunda = 30;
let koniecczasu = 0;
let koniec=0;

function odliczanie()
{
        if(minuta<=0&&sekunda<=0)
            { 
                if(koniec==0) document.getElementById("zegar").innerHTML="koniec czasu";
                koniecczasu = 1; 
                for(i=0; i<12; i++){
                  document.getElementById("okno"+i).setAttribute("onclick",";");  
                  document.getElementById("okno"+i).style.cursor = "default";
                  document.getElementById("okno"+i).style.filter = "none";
                } 
                
                              
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


let nr_figury=[]; 
let nr_wzory=[];

function losuj() 
{
   
while(nr_figury.length<6)
{
    
    let nr_wzory=[];
    let powtorka =false;

    let f=Math.floor(Math.random()*6);
    for(i=0; i<nr_figury.length; i++)
    {
        if(nr_figury[i]==f) {powtorka= true; break;}
    }
    if(powtorka) continue;
    nr_figury.push(f);
   
}

for(i=0; i<6; i++)
{
    document.getElementById("okno"+i).innerHTML=`<img src="./wzory/w`+nr_figury[i]+`.PNG">`;
}

while(nr_wzory.length<6)
{
    
    let powtorka =false;

    let w=Math.floor(Math.random()*6+6);
    for(i=0; i<nr_wzory.length; i++)
    {
        if(nr_wzory[i]==w) {powtorka= true; break;}
    }
    if(powtorka) continue;
    nr_wzory.push(w);
    
}

for(i=6; i<12; i++)
    {
        document.getElementById("okno"+i).innerHTML=`<img src="./wzory/w`+nr_wzory[i-6]+`.PNG">`;
    }
    document.getElementById("bledy").innerHTML ="Połącz figurę z odpowiednim wzorem.";
}

losuj();


let nr_obrazkow=[];
let nr_okien =[];
function wez_figura(i)
{
    if(nr_obrazkow.length<2) {nr_obrazkow.push(nr_figury[i]); nr_okien.push(i); document.getElementById("okno"+i).style.background = "red";}
    console.log(nr_obrazkow);
    console.log(nr_okien);
    if(nr_obrazkow.length==2) sprawdz();
}

function wez_wzor(i)
{
    if(nr_obrazkow.length<2) {nr_obrazkow.push(nr_wzory[i-6]); nr_okien.push(i);document.getElementById("okno"+i).style.background = "red";}
    console.log(nr_obrazkow);
    console.log(nr_okien);
    if(nr_obrazkow.length==2) sprawdz();
}
let bledy=0;
let brawo=0;
function sprawdz()
{
   if((nr_obrazkow[0]-nr_obrazkow[1]==6)||(nr_obrazkow[1]-nr_obrazkow[0]==6)) 
   {
       brawo++;
        document.getElementById("okno"+nr_okien[0]).innerHTML=`<img src="./wzory/blank.png">`;
       document.getElementById("okno"+nr_okien[1]).innerHTML=`<img src="./wzory/blank.png">`;
       document.getElementById("okno"+nr_okien[0]).style.background = "none";
        document.getElementById("okno"+nr_okien[1]).style.background = "none";
        document.getElementById("okno"+nr_okien[0]).style.cursor = "default";
        document.getElementById("okno"+nr_okien[1]).style.cursor = "default";
        document.getElementById("okno"+nr_okien[0]).style.filter = "none";
        document.getElementById("okno"+nr_okien[1]).style.filter = "none";
        document.getElementById("okno"+nr_okien[0]).setAttribute("onclick",";");
        document.getElementById("okno"+nr_okien[1]).setAttribute("onclick",";");
       if(brawo==6)
       {
        for(i=0; i<12; i++) document.getElementById("okno"+i).setAttribute("onclick",";");
       if(bledy==0) document.getElementById("bledy").innerHTML ="Zadanie ukończone bez błędów.";
       minuta=0;
       sekunda=0;
       koniec=1;
        }
       
    }
    
       
   
   else 
   {bledy++; 
    document.getElementById("bledy").innerHTML ="Ilość błędów = "+bledy; 
   document.getElementById("okno"+nr_okien[0]).style.background = "none";
   document.getElementById("okno"+nr_okien[1]).style.background = "none";}
   nr_obrazkow=[];
   nr_okien =[];
   
}
