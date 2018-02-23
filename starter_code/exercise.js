var exercise = {};


exercise.roman = function(time){

    var currentDate = new Date();
        console.log(currentDate);
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
        console.log('h:m:s = ' + hours + ':' + minutes + ':' + seconds);
    
        outputHours = [];
        outputMinutes = [];
        outputSeconds = [];
        var stringHours=hours.toString();
        var stringMinutes=minutes.toString();
        var stringSeconds=seconds.toString();
    
        for(i=0, lenHours=stringHours.length; i<lenHours; i+=1){
            outputHours.push(+stringHours.charAt(i));
        }
    
        for(i=0, lenMinutes=stringMinutes.length; i<lenMinutes; i+=1){
            outputMinutes.push(+stringMinutes.charAt(i));
        }
    
        for(i=0, lenSeconds=stringSeconds.length; i<lenSeconds; i+=1){
            outputSeconds.push(+stringSeconds.charAt(i));
        }
    
        console.log(outputHours);
        console.log(outputMinutes);
        console.log(outputSeconds);
        console.log(outputSeconds[0]);
    
     
        if (hours< 10){
            outputHours[1]=outputHours[0];
            outputHours[0]=0;
        
    
        if (minutes< 10)
            outputMinutes[1]=outputMinutes[0];
            outputMinutes[0]=0;
        
    
        if (seconds< 10)
            outputSeconds[1]=outputSeconds[0];
            outputSeconds[0]=0;
        }
    
        setClock('H1',outputHours[0]);
        setClock('H2',outputHours[1]);
        setClock('M1',outputMinutes[0]);
        setClock('M2',outputMinutes[1]);
        setClock('S1',outputSeconds[0]);
        setClock('S2',outputSeconds[1]);
    
    
        setTimeout(timer, 1000);
    };



exercise.binary = function(time, col){
console.log("col = " + col + " num = " + num);
        if (num >=8){
            if (document.getElementById(col + '_8') !== null){
                document.getElementById(col + '_8').style.background='green';
            num -= 8;
            }
        }
        else{3
            if (document.getElementById(col + '_8') !== null){
                document.getElementById(col + '_8').style.background='silver';
        }
        }
        if(num >=4){
            if (document.getElementById(col + '_4') !== null){
                document.getElementById(col + '_4').style.background='green';
                num -= 4;
            }
        }
        else{
            if (document.getElementById(col + '_4') !== null){
                document.getElementById(col + '_4').style.background='silver';
            }
        }
    
        if(num >=2){
            if (document.getElementById(col + '_2') !== null){
                document.getElementById(col + '_2').style.background='green';
                num -= 2;
            }
        }
        else{
            if (document.getElementById(col + '_2') !== null){
                document.getElementById(col + '_2').style.background='silver';
            }
        }
    
        if(num >=1){
            if (document.getElementById(col + '_1') !== null){
                document.getElementById(col + '_1').style.background='green';
                num -= 1;
            }
        }
        else{
            if (document.getElementById(col + '_4') !== null){
                document.getElementById(col + '_1').style.background='silver';
            }
        }
    };



