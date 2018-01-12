function date_time(id)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}

function bell()
{
    var singleBell = new Audio('353233__sojan__ship-bell-single-ring(1).wav');    
    var doubleBell = new Audio('353232__sojan__ship-bell-two-chimes.wav');
    
    date = new Date
    var h = date.getHours();
    var m = date.getMinutes();
    m = parseInt(m);
    var watch = (h)/4;
    watch = parseInt(watch);
    var double=0;
    var single=0;
    
    
   
    
    for(var i = (watch*4); i<h ;i++)
    {
        double = double+1;   
    };
    
    if((watch*4) == h)
    {
        double=double+4;
    }
    
     console.log(m);
    
     if(m>30)
     {
         single = 1;
    };
    
     if((double==4)&&(single==1))
         {
             alert("ok");
             double =0;
         };
    
    
    alert("DoubleBells = "+ double +"\n Single Bells = "+single);
    console.log(double, single);
    if (double == 0 && single == 1){
        var playlist = [singleBell];
        play(playlist);
    }
    if (double == 1 && single == 0){
        var playlist = [doubleBell];
        play(playlist);
    }
    if (double == 1 && single == 1){
        var playlist = [doubleBell,singleBell];
        play(playlist);
    }
    if (double == 2 && single == 0){
     var playlist = [doubleBell,doubleBell];
    play(playlist);   
    }
    if (double == 2 && single == 1){
          var playlist = [doubleBell,doubleBell,singleBell];
        play(playlist);
    }
    if (double == 3 && single == 0){
     var playlist = [doubleBell,doubleBell,doubleBell];
                play(playlist);   
    }
    if (double == 3 && single == 1){
        var playlist = [doubleBell,doubleBell,doubleBell,singleBell];
                play(playlist);
    }
    if (double == 4 && single == 0){
        var playlist = [doubleBell,doubleBell,doubleBell,doubleBell];
        play(playlist);
    }
   
}

    function play(playlist){
          
      
          var current = null;
          var idx = 0;

          function playSound() 
        {
              if (current === null || current.ended) {
                  // go to next
                  current = playlist[idx++];

                  // check if is the last of playlist and return to first
                  if (idx >= playlist.length+1){
                      current = null;
                      return;
                  }

                   // return to begin
                   current.currentTime=0;

                   // play
                   current.play();
              }

          }setInterval(playSound, 1000);
        };



