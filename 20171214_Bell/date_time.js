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
    
    
    
    date = new Date;
    var h = date.getHours();
    var watch = (h)/4;
    watch = parseInt(watch);
    var double=0;
    var single=0;
    
    
   
    
    for(var i = (watch*4); i<h ;i++)
    {
        double =+1;
        setTimeout(function () {
        doubleBell.play(); 
    }, 3000);
       
    };
    
    if((watch*4) == h)
    {
        double=+4;
        
       
 function play(
  var playlist = [doubleBell, doubleBell,doubleBell,doubleBell];

  var current = null;
  var idx = 0;

  function playSound(playlist) {
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

  }

  setInterval(playSound, 1000);
    };
    
     if(parseInt(date.getMinutes>30))
     {
         single =+1;
        if(function isPlaying(doubleBell) { return doubleBell.paused; }){
       singleBell.play(); 
        }
    };
    
    alert("DoubleBells = "+ double +"\n Single Bells = "+single);
       
    
    switch (double | single) 
    {
                           
    }
        
   
   
    
    
    
}