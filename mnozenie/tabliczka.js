
let minuta = 1;
let sekunda = 0;
let koniecczasu = 0;
let koniec=0;

function odliczanie()
{
        if(minuta<=0&&sekunda<=0)
            { 
                let ocena;
                if(punkty<7) ocena = 'ndst';
                if([7].includes(punkty)) ocena = 'dop';
                if([8].includes(punkty)) ocena = 'dst';
                if([9].includes(punkty)) ocena = 'db';
                if([10].includes(punkty)) ocena ='bdb';
                console.log(koniec);
                if(koniec==0) document.getElementById("odp").innerHTML="Koniec czasu";
                koniecczasu = 1;
                
            }

            
        sekunda=sekunda-1;
        if (sekunda<0) {sekunda=59; minuta=minuta-1;}
	    if (minuta<0) {sekunda=59;}


        if(minuta>=0&&sekunda>=0)
            {
                document.getElementById("odp").innerHTML= minuta+":"+ sekunda;
                if(sekunda<10) document.getElementById("odp").innerHTML= minuta+":0"+ sekunda;
                setTimeout("odliczanie()",1000);
            } 
}


let punkty = 0;
document.getElementById("nr_punkty").innerHTML = punkty;



let pytanie = 1;
document.getElementById("nr_pytanie").innerHTML = pytanie;

let M2= new Set;
let repet = ["D","D"];


let a = 1;
let b = 1;

function losuj()
{
let licznik = 1;

while(licznik<2)
    {     
        let A = [2,3,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,9];  
        let B = [4,5,6,7,8,9];
        // let A = [0,1,2,3,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,9];  
        // let B = [3,4,5,6,7,8,9,10];
        a = A[Math.floor(Math.random() * A.length)];
        b = B[Math.floor(Math.random() * B.length)];
        
        let powtorka = false;
        
        for(i=0; i<repet.length; i++)
        {
            if((repet[i]==a && repet[i+1]==b)||(repet[i]==b && repet[i+1]==a)) 
            {
               powtorka = true; 
               break; 
            } 
           
        }
        
        if(powtorka) continue;
        
        repet.push(a);
        repet.push(b);
        repet.push("d");
        
        document.getElementById("mnozenie").innerHTML = a+'x'+b;

        let M = new Set;
        for(let i=1; i<4; i++)
        {
            M.add(a*b+i);
            if(a*b-i>=0) M.add(a*b-i);
            
        }
        let M1 = new Set;
        while(M1.size<3)
        {
            let rndm = Math.floor(Math.random() * M.size);
            M1.add(Array.from(M)[rndm]);
        }
        M1.add(a*b)
             
        while(M2.size<4)
        {
            let rndm = Math.floor(Math.random() * 4);
            M2.add(Array.from(M1)[rndm]);
        }

        M2 = Array.from(M2);

        document.getElementById("answ1").innerHTML = M2[0];
        document.getElementById("answ2").innerHTML = M2[1];
        document.getElementById("answ3").innerHTML = M2[2];
        document.getElementById("answ4").innerHTML = M2[3];
        licznik++;
    }
}

function sprawdz(i)
{ 

    if(koniecczasu==0)
    {
        if(M2[i-1] == a*b) 
        {
        punkty ++ ;
        document.getElementById("nr_punkty").innerHTML = punkty;
        }
        
        if(pytanie < 10)
        {
            pytanie ++;
            document.getElementById("nr_pytanie").innerHTML = pytanie;
            M2 = new Set;
            losuj(); 
        }  
        else
        {
            let ocena;
            if(punkty<7) ocena = 'ndst';
            if([7].includes(punkty)) ocena = 'dop';
            if([8].includes(punkty)) ocena = 'dst';
            if([9].includes(punkty)) ocena = 'db';
            if([10].includes(punkty)) ocena ='bdb';

            document.getElementById("answ1").setAttribute("onclick",";");
            document.getElementById("answ2").setAttribute("onclick",";");
            document.getElementById("answ3").setAttribute("onclick",";");
            document.getElementById("answ4").setAttribute("onclick",";");
           
            minuta = 0;
            sekunda = 0;
            koniec=1;
           
         
        }
    }
}

losuj();



