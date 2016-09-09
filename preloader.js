    var preload;
    $("#loadingOverlay").fadeIn("fast");


    ///////////////  ADD THE IMAGE ASSETS AS OBJECTS AS SHOWN BELOW  /////////////////////    
   	var manifest = [
           {src:"images/spidersprite1.png", id:"image2"},
           {src:"images/batsamp1.gif", id:"image3"},
           {src:"images/backgroundo.png", id:"image4"},
           {src:"images/sprite4.png", id:"image5"},
           {src:"images/bullet.png", id:"image6"},
           {src:"images/scene.jpg", id:"image7"},
           {src:"images/brick.png", id:"image8"},
           {src:"images/ghostsprite.png", id:"image9"},
           {src:"images/health.png", id:"image10"},
           {src:"images/exclam.png", id:"image11"},
           {src:"images/candy0.png", id:"image12"},
           {src:"images/candy1.png", id:"image13"},
           {src:"images/candy2.png", id:"image14"},
           {src:"images/candy3.png", id:"image15"},
           {src:"images/candy4.png", id:"image16"},
           {src:"images/pumpkinsprite.png", id:"image17"},
           {src:"images/immunadd.png", id:"image18"},
           {src:"images/fireadd.png", id:"image19"},
           {src:"images/bulletadd.png", id:"image20"},
	   {src:"images/tunnel.png", id:"image21"},
           {src:"images/rock.png", id:"image22"},
           {src:"images/page1.png", id:"image23"},
           {src:"images/page2.png", id:"image24"},
	   {src:"images/page3.png", id:"image25"},
           {src:"images/page4.png", id:"image26"},	   
		   ];
           
    function init(){

        /////////////// ADD BASEPATH IN THE SECOND PARAMETER OF THE FOLLOWING LINE  /////////////////////
        preload = new createjs.LoadQueue(true, "http://festember.com/games/revenge/");
        //preload = new createjs.LoadQueue(true, "http://localhost/preloader/game-preloader/");
        
        preload.addEventListener("progress", preloadHandleProgress);
        preload.addEventListener("complete", preloadHandleComplete);
        preload.setMaxConnections(10);
        preload.loadManifest(manifest);

    }

    function stop() {
        if (preload != null) { preload.close(); }
    }

    function preloadHandleProgress(event) {
        if(event)
            $("#loader").text(Math.round((event.loaded*100.0)).toString()+"%") ;
    }

    function preloadHandleComplete(event) { 
        $("#loader").text("Starting Game...");
		var js  = document.createElement("script");
		js.type = "text/javascript";
		js.src  = "gameScript.js";
		document.body.appendChild(js);
		$("#loadingOverlay").fadeOut("fast");
    }

    init();

