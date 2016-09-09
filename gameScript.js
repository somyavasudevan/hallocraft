//(function() {
     var stage = new Kinetic.Stage({
        container: 'container',
        width: 640,
        height: 512
      });
      var screen1,screen2,screen3,screen4;
	  var galf=0;
	  var keycount=0;
	  var stop=false;
	  var hitcount=0;
	  var setrun=false;
	  var immunadd= new Image(); 
	  var fireadd= new Image();
	  var exclamat= new Image();
	  var warning=false;
	  var leftrunning=false;
	  var jumprunning=false;
	  var rightrunning=false;
	  var hitanim=false;
	  	  var icheck=0;
	  	  var wcheck=0;
		var pit=new Image();
		var rocky=new Image();
      var scenelayer = new Kinetic.Layer();
      var bcklayer = new Kinetic.Layer();
      var charlayer = new Kinetic.Layer();
	  var evillayer = new Kinetic.Layer();
	  var displaylayer = new Kinetic.Layer();
	  var platformlayer = new Kinetic.Layer();
	  var bat = new Image();
	  var spider1= new Image();
	  var ghost= new Image();
	  var badguy=new Image();
	  var platforms=new Array();
	  var pits=new Array();
	  var drop1= new Array(); 
	  var drop2= new Array();
      var idlefall=false;
	  var ghostfall=false;
var page1=new Image();
var page2=new Image();
var page3=new Image();
var page4=new Image();

	  var bats=new Array();
	  var ghosts=new Array();
	  var animcheck=new Array();
	  var candies= new Array();
	  var ghostfall=false;
	  var hit=false;
	  var speed=5;
	  var bcklength=8700;
	  var guybreadth=55;
	  var scenery=new Image();
	  var brick=new Image();
	  var backdrop = new Image();
	  var ourguy = new Image();
	  var ourbullet = new Image();
	  var candyimg= new Array();
	  var snd = new Audio("file.mp3"); 
	  var candysnd = new Audio("Eat.mp3"); 
	  var boing= new Audio("boing.mp3");
	  for(var i=0; i<5; i++)
	    { candyimg[i]= new Image(); }
	  var candy= new Image();
	  var candy2=new Image();
	  var spider=new Array();
	  var health= new Image();
	  var bulletadd= new Image(); var guyanimations= {
	  idle:[{x:928,y:263,width:54,height:117},
			{x:672,y:263,width:54,height:117}],
		
		left:[{x:552,y:3,width:46,height:121},
			{x:672,y:5,width:54,height:120},
			{x:808,y:3,width:46,height:121},
			{x:928,y:7,width:54,height:116}],
		
		right:[{x:545,y:131,width:46,height:121},
			{x:673,y:133,width:54,height:120},
			{x:801,y:131,width:46,height:121},
			{x:926,y:135,width:54,height:116}],
	   
	    immidle:[
		{x:420,y:262,width:54,height:117}],
		
		netidle: [{x:164,y:262,width:54,height:117}],
		
		immleft:[{x:44,y:2,width:46,height:121},
		{x:164,y:4,width:54,height:120},
		{x:300,y:2,width:46,height:121},
		{x:420,y:6,width:54,height:116}],
		
		immright:[{x:38,y:130,width:45,height:121},
		{x:165,y:132,width:54,height:120},
		{x:293,y:130,width:46,height:121},
		{x:421,y:134,width:55,height:116}],
		
		hitidle:[{x:671,y:799,width:54,height:117},
		{x:672,y:263,width:54,height:117}],
		
		hitleft:[{x:551,y:539,width:46,height:121},
		{x:671,y:541,width:54,height:120},
		{x:807,y:539,width:46,height:121},
		{x:927,y:543,width:54,height:116}
		],
		
		hitright:[{x:544,y:667,width:46,height:121},
		{x:672,y:669,width:54,height:120},
		{x:800,y:667,width:46,height:121},
		{x:928,y:671,width:55,height:116}],
		
		fireidle:[{x:158,y:788,width:54,height:117},
		{x:158,y:788,width:54,height:117}],
		
		fireleft:[{x:38,y:528,width:46,height:121},
		{x:158,y:530,width:54,height:120},
		{x:294,y:528,width:46,height:121},
		{x:414,y:532,width:54,height:116}
		],
		
		fireright:[{x:31,y:656,width:46,height:121},
		{x:159,y:658,width:54,height:120},
		{x:287,y:656,width:46,height:121},
		{x:415,y:660,width:55,height:116}]
		
		};

		var batanimations= {
	  idle:[{x:4,y:4,width:90,height:46},
			{x:97,y:5,width:72,height:45},
			{x:178,y:9,width:56,height:41},
			{x:81,y:56,width:38,height:42},
			{x:131,y:59,width:32,height:37},
			{x:174,y:59,width:18,height:39},
			{x:131,y:59,width:32,height:37},
			{x:81,y:56,width:38,height:42},
			{x:178,y:9,width:56,height:41},
			{x:97,y:5,width:72,height:45}
			]};
			

			
			var bad= {
	  idle:[
	  {x:239,y:217,width:234,height:201},
	  {x:945,y:206,width:261,height:223},
	  {x:1647,y:191,width:296,height:253},
	  {x:2354,y:179,width:333,height:286},
	  {x:3049,y:167,width:372,height:318},
	{x:2354,y:179,width:333,height:286},
	{x:1647,y:191,width:296,height:253},
	{x:945,y:206,width:261,height:223}
			]};
		var spideranimations= {left: [{x:12,y:109,width:72,height:68},
	                               {x:101,y:119,width:89,height:60},
								   {x:210,y:108,width:74, height:71},
								   {x:306,y:103,width:76,height:67}] , 
						    right:[{x:12,y:205,width:72,height:68},
	                               {x:98,y:215,width:89,height:60},
								   {x:196,y:204,width:74, height:71}]}
								   
		var ghostanimations= { move: [ {x:11,y:13,width:153,height:110},
	                                 {x:186,y:13,width:152,height:114}, 
									 {x:361,y:32,width:152,height:100}, 
									 {x:537,y:32,width:150,height:113}, 
									 {x:13,y:228,width:147,height:113}, 
									 {x:181,y:240,width:161,height:102}, 
									 {x:353,y:255,width:166,height:89}, 
									 {x:537,y:240,width:146,height:102},
									  {x:22,y:403,width:124,height:116}, 
									  {x:189,y:383,width:143,height:115}, 
									  {x:362,y:382,width:150,height:100}, 
									  {x:536,y:363,width:152,height:112}] }; 

scenery.onload=function()
{	

$.ajax({
	url : '../home.php',
	type: 'POST',
	data: {'game_id': 4},
	
	success: function(data){
           //console.log(data);
           if(data!="Success")
             window.location.href = data;
	}
	});


 var start=false;
	var candyscore=0;
		var bulletno=8; 	
  var immtime=10;
  var bullettime=12;
var immunity=false;
var infinitebullet=false;
	var life=15;
	var bosshit=0;
		
		var initialtime = 0;	 
		var minionscore=0;
	var   bck = new Kinetic.Image({
          image: backdrop,
          x: 1,
          y: -95,
		width: 640,
        height: 512,
		 crop: {
        x: 1,
        y: 150,
        width: 1279,
        height: 874
    }    });
var   bck2 = new Kinetic.Image({
          image: backdrop,
          x: bck.getX()+bck.getWidth(),
          y: -95,
		width: 640,
        height: 512,
		 crop: {
        x: 1,
        y: 150,
        width: 1279,
        height: 874
    }    });

	var scene = new Kinetic.Image({
          image: scenery,
          x: 1,
          y: 1,
		width: 640,
        height: 512  });
		
		var exclam = new Kinetic.Image({
          image: exclamat,
          x: bck.getWidth()/2,
          y: -100,
		width: 100,
        height: 100  });
        
        
        screen1= new Kinetic.Image({
			image: page1,
			x:1,
			y:1,
			width:640,
			height:512
			});
        
          screen2= new Kinetic.Image({
			image: page2,
			x:1,
			y:1,
			width:640,
			height:512
			});
          screen3= new Kinetic.Image({
			image: page3,
			x:1,
			y:1,
			width:640,
			height:512
			});
          screen4= new Kinetic.Image({
			image: page4,
			x:1,
			y:1,
			width:640,
			height:512
			});
        
		
		var scoredisplay = new Kinetic.Text({
        x: 2,
        y: 2,
        text: 'REVENGE OF PUMPKIN\nLife: '+life+'\nCandy Points: '+candyscore+'\nMonster Points: '+minionscore+'\nTime Left: 00:00',
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: '#400000',
        width: 250,
        padding: 20,
        align: 'left'
      });
	  var rect = new Kinetic.Rect({
        x:scoredisplay.getX(),
        y: scoredisplay.getX(),
        stroke: '#555',
        strokeWidth: 5,
        fill: '#ddd',
        width: 250,
		opacity:0.5,
        height: scoredisplay.getHeight(),
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: [10, 10],
        shadowOpacity: 0.2,
        cornerRadius: 10
      });

		for(var g=0;g<8;g++)
		{
		  
		  if(i%2==0)
		  ghosts[g]= new Kinetic.Sprite({
		  x:bck.getWidth()/2+Math.random()+(650*(g+1)),
          y: bck.getHeight()-350,
		  width: 150,
		  height: 110,
          image: ghost,
          animation: 'move',
          animations: ghostanimations,
          frameRate: 10,
          index: 0,
		  id:'ghosty'+g,
		  name:'evil'
			}); 
			
		 else 
		  ghosts[g]= new Kinetic.Sprite({
		  x:bck.getWidth()/2+Math.random()+(650*(g+1)),
          y: bck.getHeight()-250,
		  width: 150,
		  height: 110,
          image: ghost,
          animation: 'move',
          animations: ghostanimations,
          frameRate: 10,
          index: 0,
		  id:'ghosty'+g,
		  name:'evil'
			}); 
		 	
			
			}	
	
	for(i=0; i<9; i++)
		spider[i]=new Kinetic.Sprite({
          image: spider1,
          x: bck.getWidth()/4+((i+1)*800),
          y: (bck.getHeight()-100),
		width:90,
		 height:90,
		 animations: spideranimations,
		 frameRate:7,
		 index:1,
		 animation:'left',
		 id:'spidy'+i,
		 name:'evil'});


	
	
for(var i=0;i<13;i++)
{
	bats[i]=new Kinetic.Sprite({
          image: bat,
          x: bck.getWidth()/4+ Math.random()+(500*(i+1)),
          y:  (bck.getHeight()-100)-(Math.random()*bck.getHeight()/4),
		width: 100,
        height: 100,
		animation: 'idle',
          animations: batanimations,
          frameRate: 18,
          index: 1,
		  id:'bat'+i,
		name:'evil'});
	
	
	};


	
	
	
	  
	var i;
	
	for(i=0; i<20; i++)	
	 {  var rand= Math.floor(Math.random()*5);
	    candies[i] = new Kinetic.Image({
			image: candyimg[rand],
			x:bck.getWidth()/2 + i*200,
			y:bck.getHeight()-190-80,
			width:40,
			height:40,
			name:'candy'
			});
	 }
			
	var j=0; 	
	for(i=20; i<40; i++)
	  {   var rand= Math.floor(Math.random()*5);
		  candies[i] = new Kinetic.Image({
			image: candyimg[rand],
			x:bck.getWidth()/2 +100+ j*140,
			y:bck.getHeight()-140-Math.floor(Math.random()*80),
			width:40,
			height:40,
			name:'candy'
			});	 j++;
	  }
	
	j=1;
	for(i=40; i<47; i++)
	{  
	  candies[i]= new Kinetic.Image({
			image: health,
			x:bck.getWidth()/2 + 1200*j,
			y:bck.getHeight()-300-Math.floor(Math.random()*50),
			width:40,
			height:40,
			name:'candy'
			});	 j++;
	  }
	
	j=20;  
	  for( i=47; i<60; i++)
	  {  var rand= Math.floor(Math.random()*5);
		  candies[i] = new Kinetic.Image({
			image: candyimg[rand],
			x:bck.getWidth()/2 +100+ j*200,
			y:bck.getHeight()-140-Math.floor(Math.random()*80),
			width:40,
			height:40,
			name:'candy'
			});	 j++;
	  }
	
	  
	 
	 
	
	// Candy Arrow

j=0;
	  for( i=60; i< 65; i++)
	   {
		    candies[i]= new Kinetic.Image({
			image: candyimg[3],
			x: 5400 + 40*j+10,
			y:bck.getHeight()-250,
			width:40,
			height:40,
			name:'candy'
			});
			j++; 		
		}
		j--; 
		
		candies[65]= new Kinetic.Image({
			image: candyimg[3],
			x: 5400 +10,
			y:bck.getHeight()-250+40,
			width:40,
			height:40,
			name:'candy'
			});

		
		
			candies[66]= new Kinetic.Image({
			image: candyimg[3],
			x: 5400 + 40*j+10,
			y:bck.getHeight()-250-40,
			width:40,
			height:40,
			name:'candy'
			});
			
	       candies[67]=new Kinetic.Image({
			image: candyimg[3],
			x: 5400 + 40*j+10,
			y:bck.getHeight()-250-40-40,
			width:40,
			height:40,
			name:'candy'
			});
						


		j=0;
	  for( i=68; i< 73; i++)
	   {
		    candies[i]= new Kinetic.Image({
			image: candyimg[3],
			x: 5400 + 40*j+10,
			y:bck.getHeight()-250+2*40,
			width:40,
			height:40,
			name:'candy'
			});
			j++; 
		}
		
		
	 j--; 
	 candies[73]= new Kinetic.Image({
			image: candyimg[3],
			x: 5400 + 40*j+10,
			y:bck.getHeight()-250+2*40+40,
			width:40,
			height:40,
			name:'candy'
			});
			
	candies[74]= new Kinetic.Image({
			image: candyimg[3],
			x: 5400 + 40*j+10,
			y:bck.getHeight()-250+2*40+40+40,
			width:40,
			height:40,
			name:'candy'
			});
			
	candies[75]= new Kinetic.Image({
			image: candyimg[3],
			x: 5400 + 40*j+10,
			y:bck.getHeight()-250+2*40+40+40,
			width:40,
			height:40,
			name:'candy'
			});
			
	candies[76]=new Kinetic.Image({
			image: candyimg[3],
			x: 5400 + 40*j+10,
			y:bck.getHeight()-250+2*40+40+40,
			width:40,
			height:40,
			name:'candy'
			});
			
j=1;
	for( i=77; i< 80; i++)
	   {
		    candies[i]= new Kinetic.Image({
			image: candyimg[3],
			y: 422-40*(j),
			x:5400+180+40*j+8,
			width:40,
			height:40,
			name:'candy'
			});
			j++; 		
		}
		j=1;
	for( i=80; i< 83; i++)
	   {
		    candies[i]= new Kinetic.Image({
			image: candyimg[3],
			y: 182+40*(j),
			x:5400+180+40*j+8,
			width:40,
			height:40,
			name:'candy'
			});
			j++; 		
			
		}
	
	j=1;		
	for(i=83; i<86; i++)
	    {	candies[i]=new Kinetic.Image({
			image: candyimg[3],
			x: 5400 + 40*j+10+40*i,
			y:bck.getHeight()-250+2*40+40+40-40*j,
			width:40,
			height:40,
			name:'candy'
			});
         j++; 		
		 }
		
		
 j=0; 
for(i=86; i<96; i++)
	{  
	  candies[i]= new Kinetic.Image({
			image: bulletadd,
			x:bck.getWidth()/2 + 500+ 1000*j,
			y:bck.getHeight()-330-Math.floor(Math.random()*70),
			width:40,
			height:40,
			name:'candy'
			});	 j++;
	  }
 		j=1;
		
		//life powerup
		for(i=96;i<99; i++)
			{  
	  candies[i]= new Kinetic.Image({
			image: immunadd,
			x:1800*j,
			y:bck.getHeight()-330-Math.floor(Math.random()*60),
			width:40,
			height:40,
			name:'candy'
			});	 j++;
	  }

j=1;
		// bullet powerup
		for(i=99;i<102; i++)
			{  
	  candies[i]= new Kinetic.Image({
			image: fireadd,
			x: bcklength-900*j,
			y:bck.getHeight()-330-Math.floor(Math.random()*60),
			width:40,
			height:40,
			name:'candy'
			});	 j++;
	  }

			
			
		var guy = new Kinetic.Sprite({
          x: bck.getWidth()/4,
          y: (bck.getHeight()-150),
		  width: 55,
		  height: 120,
          image: ourguy,
          animation: 'idle',
          animations: guyanimations,
          frameRate: 8,
          index: 0
        });

		 var idlerock= new Kinetic.Image({
		  x:guy.getX()*0.95,
          y: -120,
		  width: 50,
		  height: 50,
          image: rocky,
		  id:'drop'+d});  


for(var i=0;i<6;i++)
{
	pits[i]=new Kinetic.Image({
          image: pit,
          x: (bcklength/6)*(i+1),
          y: (guy.getY()+guy.getHeight()-10),
		width: 100,
        height: 100,
		name:'pits'});
	
	
	}
		
	
		var bullet= new Kinetic.Image({ 
		  image: ourbullet,
		  x: guy.getWidth()+guy.getX(),
		  y: guy.getY()+40,
		  width: 10,
		  height: 10
          
		} );
		

			
			
		var pumpkin= new Kinetic.Image({ 
		  image: ourbullet,
		  x: bcklength-bullet.getWidth()/2,
		  y: guy.getY()+40,
		  width: 10,
		  height: 10,
		  name:'superevil'
          
		} );
		
	
		var badpumpkin = new Kinetic.Sprite({
          x: bcklength-800,
          y: (bck.getHeight()*0.75),
		  width: 400,
		  height: 400,
          image: badguy,
          animation: 'idle',
          animations:bad,
          frameRate:7,
          index: 0,
		  name:'superevil'
        });
	
		
		for(var i=0;i<2;i++)
		{
		platforms[i]=new Kinetic.Image({
	// (bck.getHeight()-100)-(Math.random()*bck.getHeight()/4)		
          image: brick,
          x: bck.getWidth()/2+(Math.random()*(i*bck.getWidth())+(i*bck.getWidth())),
          y: (bck.getHeight()-100)-guy.getHeight(),
		width: 100,
        height: 40

	  });}
		
		
		platforms[2]=new Kinetic.Image({
			
          image: brick,
          x: platforms[1].getX()+platforms[1].getWidth()+10,
          y: platforms[1].getY()-platforms[1].getWidth(),
		width: 100,
        height: 40

	  });
		
		platforms[3]=new Kinetic.Image({
			
          image: brick,
          x: platforms[2].getX()+platforms[2].getWidth()+10,
          y: platforms[1].getY(),
		width: 100,
        height: 40

	  });
		
		
		
		platforms[4]=new Kinetic.Image({
			
          image: brick,
          x: bck.getWidth()/2+(Math.random()*(4*bck.getWidth())+(4*bck.getWidth())),
          y: (bck.getHeight()-100)-guy.getHeight(),
		width: 100,
        height: 40

	  });
	  
	  platforms[5]=new Kinetic.Image({
			
          image: brick,
          x: platforms[4].getX()+platforms[4].getWidth()+10,
          y: platforms[4].getY()-platforms[4].getWidth(),
		width: 100,
        height: 40

	  });
	  
	  platforms[6]=new Kinetic.Image({
			
          image: brick,
          x: platforms[5].getX()+platforms[5].getWidth()+10,
          y: platforms[4].getY(),
		width: 100,
        height: 40

	  });
		
		
		
		platforms[7]=new Kinetic.Image({
			
          image: brick,
          x: bck.getWidth()/2+(Math.random()*(7*bck.getWidth())+(7*bck.getWidth())),
          y: (bck.getHeight()-100)-guy.getHeight(),
		width: 100,
        height: 40

	  });
	  
	  platforms[8]=new Kinetic.Image({
			
          image: brick,
          x: platforms[7].getX()+platforms[7].getWidth()+20,
          y: platforms[7].getY()-platforms[7].getWidth(),
		width: 100,
        height: 40

	  });
	  
	  platforms[9]=new Kinetic.Image({
			
          image: brick,
          x: platforms[8].getX()+platforms[8].getWidth()+20,
          y: platforms[7].getY(),
		width: 100,
        height: 40

	  });
		
		
		platforms[10]=new Kinetic.Image({
			
          image: brick,
          x: bck.getWidth()/2+(Math.random()*(14*bck.getWidth())+(14*bck.getWidth())),
          y:  (bck.getHeight()-100)-guy.getHeight(),
		width: 100,
        height: 40

	  });
	  
	   for(var d=0;d<13;d++)
		{
		  
		  drop1[d]= new Kinetic.Image({
		  x: bck.getWidth()*0.9 + 400+ 90*d,
          y: -120,
		  width: 50,
		  height: 50,
          image: rocky,
		  id:'drop'+d}); 
		}
	 for(var d=0;d<13;d++)
		{
		  
		  drop2[d]= new Kinetic.Image({
		  x: bck.getWidth()*0.9 +400+ 180*d,
          y: -320,
		  width: 50,
		  height: 50,
          image: rocky,
		  id:'drop'+d}); 
		}


		 
		 
		      displaylayer.add(rect);
       displaylayer.add(scoredisplay);
		 
		 
		 
		 var simpleLabel = new Kinetic.Label({
        x: 20,
        y: 150,
        opacity: 0.8
      });
      
      simpleLabel.add(new Kinetic.Tag({
        fill: 'yellow'
      }));
      
      simpleLabel.add(new Kinetic.Text({
        text: 'Welcome to\n\nREVENGE OF PUMPKIN!!\n\nFight the Halloween Monsters \n and \n defeat the Evil Pumpkin.\n Just so you know, the spiders shoot paralysing bullets.\nJump seven times to break free.\n Press X to fire.\n Collect powerups on the go.\n Watch out for the pits and flying rocks!!!\n Good Luck!!',
        fontFamily: 'Calibri',
        fontSize: 25,
        padding: 5,
		align:'center',
        fill: '#500000' 
      }));
	  
	 var finalLabel = new Kinetic.Text({
        x: 2,
        y: 100,
        text: 'GAME OVER!!!',
        fontSize: 80,
        fontFamily: 'Calibri',
        fill: '#ffcc00',      //////////CHANGE THIS COLOR
        width: 630,
        padding: 20,
        align: 'center'
      });
	  var Rect = new Kinetic.Rect({
        x:2,
        y: 2,
        stroke: '#cc0000',
        strokeWidth: 5,
        fill: '#000033',                     //////////////CHANGE THIS COLOR
        width: 630,
		opacity:0.9,
        height: 502,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: [10, 10],
        shadowOpacity: 0.2,
        cornerRadius: 10
      });
	  
		var tooltip = new Kinetic.Label({
        x: bck.getWidth()/4+35,
        y: 150,
        opacity: 0.75
      });

      tooltip.add(new Kinetic.Tag({
        fill: 'black',
        pointerDirection: 'down',
        pointerWidth: 10,
        pointerHeight: 10,
        lineJoin: 'round',
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: 10,
        shadowOpacity: 0.5
      }));
      
      tooltip.add(new Kinetic.Text({
        text: 'Help This Guy Fight Halloween Monsters!!\nSeriously!!',
        fontFamily: 'Calibri',
        fontSize: 18,
        padding: 5,
        fill: 'white',
		align:'center'
      }));
	    displaylayer.add(screen4);

	    displaylayer.add(screen3);
	    displaylayer.add(screen2);
	    displaylayer.add(screen1);	
		var righthit=new Array();
		var lefthit=new Array();
		
		for(p in platforms)
		{righthit[p]=false;
		lefthit[p]=false;}
		
		var ground=guy.getY();
		
			evillayer.add(badpumpkin);
		for(s in spider)
		{evillayer.add(spider[s]);}
		evillayer.add(pumpkin);
		scenelayer.add(scene);
		bcklayer.add(bck);

	 		for(d in drop1)
		{evillayer.add(drop1[d]);}
		
			 		for(d in drop2)
		{evillayer.add(drop2[d]);}

		
		evillayer.add(idlerock);
 for(p in pits)
		{
		charlayer.add(pits[p]);}
		bcklayer.add(bck2);
		charlayer.add(guy);
		for(p in platforms)
		{charlayer.add(platforms[p]); }
		for(bat in bats	)
		{evillayer.add(bats[bat]);}
		
       
	   for(g in ghosts)
		{evillayer.add(ghosts[g]);}
		
		
		charlayer.add(exclam);
		
		
  for(c in candies)
		 { charlayer.add(candies[c]);}
     
        stage.add(scenelayer);
        stage.add(bcklayer);
		stage.add(charlayer);
		stage.add(platformlayer);
		stage.add(evillayer);
		stage.add(displaylayer);
		var sweet= stage.get('.candy');
		
		 var enemy = stage.get('.evil');
		 var boss = stage.get('.superevil');
	
		
		
		guy.start(); badpumpkin.start();
		for(s in spider)
		{spider[s].start();}
		
		
		
		
				var spiderbullet= new Kinetic.Image({ 
		  image: ourbullet,
		  width: 10,
		  height: 10
         } );
	evillayer.add(spiderbullet);
		 var gotshot=false;
		var a=0;
		var sx=0;
		for(bat in bats)
		{bats[bat].start();}
		
		for(g in ghosts)
		{ghosts[g].start();} 
	
		enemy.each(function(minion)
		{animcheck[minion.getId()]=false;
		minion.stop();});
		
		var flag=0,flag1=0;
	var posY=0;
	var Ypos=0;

	var a; var t=0; var h; 
	
	 var B=0;

	 		var bulletmoveright=false; 	
	 		var bulletmoveleft=false; 	
			 var ix=1;
	  

	var count=0; 


				var enable=true;				
		 
		 
		 	   var dy=badpumpkin.getY(); dx=badpumpkin.getX();
	var p=0; var i=0; var k=2;
   


		 pumpkinmove=new Kinetic.Animation(function(frame)
		 {
if(badpumpkin.getX()>1 && badpumpkin.getX()<bck.getWidth()*2)
{
           if(i<=104*4)
		    {  p= 120* Math.abs( Math.cos(i*Math.PI/104) );  
		      badpumpkin.setX(badpumpkin.getX()+k); badpumpkin.setY(bck.getHeight()*0.4-p);
		     i+=k; 
			
			if( i==4*104)
			 { k=k*-1;
		     i+=k; 
			 
			 
			  }
			if( i==0)
			{ k=k*-1; i+=k; 
			
			 
			
			}
			}
		      
			  }});
		 
	  pumpkinmove.start();
	  
	 
	
	 
	 
	var onstand=false; 
	 

		var isfiringleft=false;
		var isfiringright=false;
	  var fire = false;
		

	
	
		var check=false;  			var gx1=4; var gy1=4;	var gx=0; var gy=0; 
						 var dry1=4;  var dropy1=0; var dry2=4; var dropy2=0;

		 var drx=7; var dropx=0;
	          		 var droy=5;  var dropoy=0; 

		coreloop=new Kinetic.Animation(function(frame) 
		{
		
		
		{var lefthit1=false;
		var righthit1=false;
		check=false;
		onstand=false;
         
				
		//PIT FALLS
		for (p in pits)
		{
		if(pits[p].getX()<guy.getX() && pits[p].getX()+pits[p].getWidth()>guy.getX()+guy.getWidth() && guy.getY()+guy.getHeight()>pits[p].getY())
		{
		enable=false;
		
		if(!enable)
		{guy.setY(guy.getY()+2*guy.getY()/100);
		if(guy.getY()>512)
		{enable=true; 
		jumprunning=true;}
		
		}
		
		if(enable)
		{if(bck.getX()<640)
		{bck.setX(bck.getX()+100);}
		else
		{bck.setX(bck2.getX()-bck2.getWidth());}
		
		if(bck2.getX()<640)
		{bck2.setX(bck2.getX()+100);}
		else
		{bck2.setX(bck.getX()-bck.getWidth());}
		
			bcklayer.draw();
		
		for (p in platforms)
		{platforms[p].setX(platforms[p].getX()+400);}
		
		for (p in pits)
		{pits[p].setX(pits[p].getX()+400);}
		
		
		enemy.each(function(minion)
		{minion.setX(minion.getX()+400);});
		
		boss.each(function(jack)
		{jack.setX(jack.getX()+400);});
		
		sweet.each(function(sweets)
		{ sweets.setX(sweets.getX()+400);});
		}}
		}
		//PIT FALLS END
		/////RIGHT RUNNER
		if(rightrunning && enable)
		{
		for(p in platforms)
		{if(righthit[p])
		{righthit1=true;}}
		if(!righthit1 && !gotshot)
		{
		var p=false;
		for(pl in platforms)
		{p+=(platforms[pl].getX()<bck.getWidth() || platforms[pl].getX()>1);}
		


		
		
		if(guy.getX()<(bck.getWidth()/2))
		{guy.setX(guy.getX()+speed);}
		else
		if((pumpkin.getX()+pumpkin.getWidth())>639)
		{
		
		if(bck.getX()+bck.getWidth()>1)
		{bck.setX(bck.getX()-2);}
		else
		{bck.setX(bck2.getX()+bck2.getWidth());}
		
		if(bck2.getX()+bck2.getWidth()>1)
		{bck2.setX(bck2.getX()-2);}
		else
		{bck2.setX(bck.getX()+bck.getWidth());}
			
		bcklayer.draw();
		
		sweet.each(function(sweets)
		{ sweets.setX(sweets.getX()-3);});
		
		
		for (p in platforms)
		{platforms[p].setX(platforms[p].getX()-3);}
		
		for (d in drop1)
		{drop1[d].setX(drop1[d].getX()-3);}
				for (d in drop2)
		{drop2[d].setX(drop2[d].getX()-3);}

		idlerock.setX(idlerock.getX()-3);

		for (p in pits)
		{pits[p].setX(pits[p].getX()-3);}	
		enemy.each(function(minion)
		{minion.setX(minion.getX()-3);});
		
		boss.each(function(jack)
		{jack.setX(jack.getX()-3);});
		
		}
		else
		{if(guy.getX()<(bck.getWidth()-guybreadth))
		{guy.setX(guy.getX()+speed);}
		}
		
		if(guy.getAnimation()=='idle'||guy.getAnimation()=='immidle'||guy.getAnimation()=='fireidle'||guy.getAnimation()=='hitidle' )
		{if(immunity)
		   { guy.setAnimation('immright');}
               else
			  if(infinitebullet)
			    {guy.setAnimation('fireright');}
			    else 
				if(hitanim)
				{guy.setAnimation('hitright');}
				else
			       {guy.setAnimation('right');}
        }
		if(!immunity && !infinitebullet && !hitanim && guy.getAnimation()!='right')
		{guy.setAnimation('right');}
		
		
		if(immunity && guy.getAnimation()=='right')
		{guy.setAnimation('immright');}
		
		
		if(infinitebullet && guy.getAnimation()=='right'&& !immunity)
		{guy.setAnimation('fireright');}		
		
		if(hitanim && (guy.getAnimation()=='right' || guy.getAnimation()=='fireright'))
		{guy.setAnimation('hitright');}		
		
		

		}
		
		
		}
		
		
		
		/////////RIGHT RUNNER END
			
		/////////LEFT RUNNER	
		
		if(leftrunning && enable)
		{	
		for(p in platforms)
		{
		if(lefthit[p])
		{lefthit1=true;}}
		
	
		if(!lefthit1 && !gotshot)
		{
		var p=false;
		for(pl in platforms)
		{p+=(platforms[pl].getX()<bck.getWidth() || platforms[pl].getX()>1);}
		/*if(p==0)
		{jumponplatform.stop();}*/
		
		
		
		if(guy.getX()>(bck.getWidth()/2))
		{guy.setX(guy.getX()-speed);}
		else
		if(pumpkin.getX()<bcklength-guy.getWidth())
		{if(bck.getX()<640)
		{bck.setX(bck.getX()+2);}
		else
		{bck.setX(bck2.getX()-bck2.getWidth());}
		
		if(bck2.getX()<640)
		{bck2.setX(bck2.getX()+2);}
		else
		{bck2.setX(bck.getX()-bck.getWidth());}
		
			bcklayer.draw();
		
		for (p in platforms)
		{platforms[p].setX(platforms[p].getX()+3);}
		
		for (p in pits)
		{pits[p].setX(pits[p].getX()+3);}
		for (d in drop1)
		{drop1[d].setX(drop1[d].getX()+3);}
				for (d in drop2)
		{drop2[d].setX(drop2[d].getX()+3);}

		idlerock.setX(idlerock.getX()+3);

		
		enemy.each(function(minion)
		{minion.setX(minion.getX()+3);});
		
		boss.each(function(jack)
		{jack.setX(jack.getX()+3);});
		
		sweet.each(function(sweets)
		{ sweets.setX(sweets.getX()+3);});
		}
		else
		if(guy.getX()>1)
		{guy.setX(guy.getX()-speed);}
		
		
		if(guy.getAnimation()=='idle'||guy.getAnimation()=='immidle'||guy.getAnimation()=='fireidle'||guy.getAnimation()=='hitidle' )
		{if(immunity)
		   { guy.setAnimation('immleft');}
               else if(infinitebullet)
			    {guy.setAnimation('fireleft');}
			    else
				if(hitanim)
				   {guy.setAnimation('hitleft');}
				   else 
			       {guy.setAnimation('left');}
        }
		if(!immunity && !infinitebullet && !hitanim && guy.getAnimation()!='left')
		{guy.setAnimation('left');}
		
		
		if(immunity && guy.getAnimation()=='left')
		{guy.setAnimation('immleft');}
		
		
		if(infinitebullet && guy.getAnimation()=='left'&& !immunity)
		{guy.setAnimation('fireleft');}		

		if(hitanim && (guy.getAnimation()=='left' || guy.getAnimation()=='fireleft'))
		{guy.setAnimation('hitleft');}		
		
		}}
		/////////////////LEFT RUNNER END
		
		if((!immunity && guy.getAnimation()=='immidle' ) || (!infinitebullet && guy.getAnimation()=='fireidle' ) || (!hitanim && guy.getAnimation()=='hitidle'))
		{guy.setAnimation('idle');}
		
		
		if((guy.getAnimation()=='idle' || guy.getAnimation()=='fireidle') && hitanim)
		{guy.setAnimation('hitidle');}
		
		if((guy.getAnimation()=='idle' || guy.getAnimation()=='hitidle') && immunity)
		{guy.setAnimation('immidle');}
		
		if((guy.getAnimation()=='idle') && infinitebullet)
		{guy.setAnimation('fireidle');}
		
		if(hitanim)
		{hitcount++;
		if(hitcount>40)
		{hitanim=false;
		hitcount=0;}
			
		}
				///MOVE GHOST
				
		      for(g in ghosts)
	          { 
			  
			  
			  if( ghosts[g] %2==0) 
			  {
			   if(ghosts[g].getX()<=bck.getWidth() && ghosts[g].getX()+ghosts[g].getWidth()>0)
			  {if(gx==0 && gy== 0)
			  {gx1*=-1; gy1*=-1; gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1); }
			  else if(gx> -100 && gx<0 && gy> -100 && gy<0)
			  {gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1);}
			  else if( gx== -100 && gy== -100)
			  {gx1*=-1;gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1);  kx=ghosts[g].getX(); ky= ghosts[g].getY();  
              }
			  else if(gx>-100 && gx<0 && gy<-100 &&  gy>-2*100)
			  {gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1);}
			  else if(gx== 0 && gy==-100*2)
			  {gy1=gy1*(-1);gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1);  kx=ghosts[g].getX(); ky= ghosts[g].getY(); 
}
			  else if(gx>0 && gx<100 && gy<-100 && gy> -2*100)
			  {gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1); }
			  else if(gx== +100 && gy== -100)
			  {gx1=gx1*(-1);gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1); kx=ghosts[g].getX(); ky= ghosts[g].getY(); 
}
			  else if(gx< 100 && gx> 0 && gy>-100 && gy<0)
			  {gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1); }
			  }
			  
		}
		
		else 
		  {
			 if(ghosts[g].getX()<=bck.getWidth() && ghosts[g].getX()+ghosts[g].getWidth()>0)
			  {if(gx==0 && gy== 0)
			  {gx1*=-1; gy1*=-1; gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1); }
			  else if(gx> -100 && gx<0 && gy> -100 && gy<0)
			  {gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1);}
			  else if( gx== -100 && gy== -100)
			  {gx1*=-1;gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1);  kx=ghosts[g].getX(); ky= ghosts[g].getY();  
              }
			  else if(gx>-100 && gx<0 && gy<-100 &&  gy>-2*100)
			  {gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1);}
			  else if(gx== 0 && gy==-100*2)
			  {gy1=gy1*(-1);gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1);  kx=ghosts[g].getX(); ky= ghosts[g].getY(); 
}
			  else if(gx>0 && gx<100 && gy<-100 && gy> -2*100)
			  {gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1); }
			  else if(gx== +100 && gy== -100)
			  {gx1=gx1*(-1);gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1); kx=ghosts[g].getX(); ky= ghosts[g].getY(); 
}
			  else if(gx< 100 && gx> 0 && gy>-100 && gy<0)
			  {gx+=gx1; gy+=gy1; ghosts[g].setX(ghosts[g].getX()+gx1); ghosts[g].setY(ghosts[g].getY()+gy1); }
			  }
  
		  }
		 
			  
			  
			  
			  }
			 
				///MOVE GHOST END

				if(drop1[0].getX()+drop1[0].getWidth()<bck.getWidth()+250 && drop1[0].getX()+drop1[0].getWidth()>bck.getWidth() && !setrun)
				{warning=true;}
				else
				{warning=false;}
			
				
				for(d in drop1)
				{ 
			   if(drop1[d].getX()<=bck.getWidth() && drop1[d].getX()+drop1[d].getWidth()>0)
			  {
				  dropy1+=dry1; drop1[d].setY(drop1[d].getY()+2.3*dry1); drop1[d].setX(drop1[d].getX()-dry1);
				  
			   }
				 
				} 
				
				for(d in drop2)
				{ 
			   if(drop2[d].getX()<=bck.getWidth() && drop2[d].getX()+drop2[d].getWidth()>0)
			  {
				  dropy2+=dry2; drop2[d].setY(drop2[d].getY()+2.3*dry2); drop2[d].setX(drop2[d].getX()-dry2);
				  
			   }
				
				} 

				

			
				if(ghostfall==true )
			      { 

				     dropoy+=droy; idlerock.setY(idlerock.getY()+droy);
					  if(dropoy > (bck.getHeight()+20))
					  { 
					  idlerock.setY(-120);
					    idlerock.setX(guy.getX());
					     ghostfall=false;  dropoy=0;} 
				
				  }  
				  


/////////////////////JUMP ANIMATION

if(jumprunning && enable)
{

	 if(!gotshot)
	 {
		         t+=0.15;
				 flag1=1;
			    h= (70*t)-(5.9*t*t); 
				
				guy.setY(Ypos-h);
		    
		
		 if(guy.getY()>posY) {
		 t=0;
		 guy.setY(posY); 
		 
		 if(Ypos>posY)
	 {Ypos=posY;}
		 if(flag==0)
		{flag1=0;
		jumprunning=false;
		}
		 } }
	  }



/////////////////////JUMP ANIMATION END


///////JUMP CHECK
 var onplat=false;

 
		for (p in platforms)
{	if(platforms[p].getX()<bck.getWidth() && platforms[p].getX()+platforms[p].getWidth()>=1)
{
	if(guy.getX()+guy.getWidth()>=platforms[p].getX() && guy.getY()+guy.getHeight()>platforms[p].getY() && guy.getX()+guy.getWidth()<platforms[p].getX()+platforms[p].getWidth()+2 && guy.getY()<platforms[p].getY()+platforms[p].getHeight())
	{righthit[p]=true;}
	else
	{righthit[p]=false;}
	
	if(guy.getX()<=platforms[p].getX()+platforms[p].getWidth() && guy.getY()+guy.getHeight()>platforms[p].getY() && guy.getX()+guy.getWidth()/2>platforms[p].getX() && guy.getY()<platforms[p].getY()+platforms[p].getHeight())
	{lefthit[p]=true;}
	else
	{lefthit[p]=false;}
	
		
	
	
	
	if((platforms[p].getX()<(guy.getX()+ guy.getWidth()/2)) && ((platforms[p].getWidth()+platforms[p].getX())>(guy.getX()+guy.getWidth()/4)) && !onplat && guy.getY()<platforms[p].getY()+platforms[p].getHeight())
	{if(platforms[p].getY()>guy.getY()+guy.getHeight())
	{ if(Math.ceil(guy.getY())<(Math.floor(platforms[p].getY()+platforms[p].getHeight())+6) && Math.ceil(guy.getY())>(Math.floor(platforms[p].getY()+platforms[p].getHeight())-10) && jumprunning)
	{jumprunning=false;
	flag1=0;}
	else
	{posY=platforms[p].getY()-guy.getHeight();flag1=0;onstand=true;}}}
	else
	{
	if( (p>1 && posY!=platforms[p-2].getY()-guy.getHeight()) && (p>0 && posY!=platforms[p-1].getY()-guy.getHeight())&&!onstand || p==0)
	{posY=ground;
	}
	else
	if((p>1 && guy.getX()<platforms[p].getX()+platforms[p].getWidth() && guy.getX()+guy.getWidth()/2>platforms[p].getX() && !onstand) || guy.getX()+guy.getWidth()/2<platforms[1].getX())
	{posY=ground;}
	}
	
	if((platforms[p].getX()<(guy.getX()+ guy.getWidth()/2)) && ((platforms[p].getWidth()+platforms[p].getX())>(guy.getX()+guy.getWidth()/4)) && !onstand  && guy.getY()<platforms[p].getY()+platforms[p].getHeight())
	{if(Math.ceil(guy.getY())<(Math.floor(platforms[p].getY()+platforms[p].getHeight())+6) && Math.ceil(guy.getY())>(Math.floor(platforms[p].getY()+platforms[p].getHeight())-10) && jumprunning)
	{jumprunning=false;
	flag1=0;}
	else
	{posY=platforms[p].getY()-guy.getHeight();flag1=0;onstand=true;onplat=true;}}
	
	if(!onstand)
	{posY=ground;}
	
	

	
	
	
	
	}
	
     
	 }



///////JUMP CHECK END


////////////SPIDER BULLETS

if(bulletmoveright)
		{
	                
					                spiderbullet.setX(4*ix+spiderbullet.getX());                 
	
	if(spiderbullet.getX()>1 && spiderbullet.getX()<bck.getWidth())
	{if(guy.intersects({"x": (spiderbullet.getX()+spiderbullet.getWidth()), "y": (spiderbullet.getY()+spiderbullet.getHeight()/2)}) )
		{ 
		
		gotshot=true;
		guy.setAnimation('netidle');
		spiderbullet.setY(8009);
bulletmoveright=false;		
     	}}
	 
	 if(spiderbullet.getX()>bck.getWidth()+10)
	 {	bulletmoveright=false; 
		spiderbullet.setY(8009);
		
}
		
	}
	
	if(bulletmoveleft)
	{
		spiderbullet.setX(spiderbullet.getX()-4*ix); 
		if(spiderbullet.getX()>1 && spiderbullet.getX()<bck.getWidth())
	{if(guy.intersects({"x": (spiderbullet.getX()+spiderbullet.getWidth()), "y": (spiderbullet.getY()+spiderbullet.getHeight()/2)}) )
		{ 
		gotshot=true;
		guy.setAnimation('netidle');
		spiderbullet.setY(10000);
		bulletmoveleft=false; 
		}}
	 if(spiderbullet.getX()+10<0)
	 {
		spiderbullet.setY(10000);
		bulletmoveleft=false;}	 
		 
		 }

////////////SPIDER BULLETS END 



///////////GUY FIRE

if(fire)
{ 
       if(isfiringright)
	   {galf=0;}


	   
	   if(isfiringleft)
	   {galf=1;}

	   
	if(galf==0 && !isfiringleft)
	{B+=13;
	isfiringright=true;}


		if(galf==1 && !isfiringright)
	{B-=13;
	isfiringleft=true;}

		bullet.setX(guy.getX()+30+B);
		 if(bullet.getX()>bck.getWidth() || bullet.getX()+bullet.getWidth()<1)
		{
		B=0;
		bullet.destroy();
		isfiringleft=false;
		isfiringright=false;
		fire=false;}
		
		
	
			enemy.each(function(minion)
		{
		if(minion.getX()>1 && minion.getX()<bck.getWidth())
		{
		
		if(minion.intersects({"x": (bullet.getX()+bullet.getWidth()), "y": (bullet.getY()+bullet.getHeight()/2)}))
		{
		B=0;
		 bullet.destroy();
		minion.destroy();
		minion.setX(1000000000);
		evillayer.add(minion);
		minionscore+=50;
		isfiringleft=false;
		isfiringright=false;
		fire=false;
        }
		}});
		
		if(badpumpkin.intersects({"x": (bullet.getX()+bullet.getWidth()), "y": (bullet.getY()+bullet.getHeight()/2)}))
		{
		B=0;
		 bullet.destroy();
		 bosshit++;
		 if(bosshit>=10)
		 {var d2 = new Date();
		var finaltime = d2.getTime();
		var fs=5*life+candyscore+minionscore-( (finaltime-initialtime)/60000)+5000 ;	 
		stop=true;
		finalLabel.setText("Congratulations!!! \n\n SCORE IS :"+Math.round(fs));
		
		displaylayer.add(Rect);
		displaylayer.add(finalLabel);
		if(stop)
		{coreloop.stop();
		$.ajax({
	url : '../score_update.php',
	type: 'POST',
	data: {'game_id': 4, 'score': Math.floor(fs)},
	success: function(data){
	console.log(fs);
//        window.open('https://www.facebook.com/dialog/send?app_id=263593520331172&link=https://games.festember.com&redirect_uri=http://festember.com/games/index.php');

	}
	});
		}
		//window.location.assign("gameover.php?sc="+fs);
		/******************************************************************************************************************************************************************** END OF THE GAME ************************************************************** ********************************************/		
		//window.location.assign("gameover.php?sc="+fs);
		}
		
			minionscore+=50;
		isfiringleft=false;
		isfiringright=false;
		fire=false;
		}
		
	
	
		}
//////GUY FIRE END

/////PUMPKIN MOVEMENT

/////PUMPKIN MOVEMENT END



///////////SPIDER FIRE
{ 
	  	            
										for(sp in spider)
					{
					if(spider[sp].getX()<=bck.getWidth() && spider[sp].getX()+spider[sp].getWidth()>=1)
					{
					
					if(sx<=150 && a==0)
					{ sx=sx+2*ix; 
					spider[sp].setX(2*ix+spider[sp].getX());
					
					 
						
					 
					
					if(spider[sp].getX()<=bck.getWidth() && spider[sp].getX()>=1 && (sx==150))
					{spiderbullet.setX(spider[sp].getX()+spider[sp].getWidth()/2); 
					 spiderbullet.setY(spider[sp].getY()+50); 
					bulletmoveright=true;
					bulletmoveleft=false;
					}
					
					 
					}
					else
					if(sx>=-150) 
						{sx=sx-2*ix;
						spider[sp].setX(spider[sp].getX()-2*ix); a=1; 
					
					if(sx==-150)
					{a=0;
					
					 if(spider[sp].getX()<=bck.getWidth() && spider[sp].getX()>=1)
					 {spiderbullet.setX(spider[sp].getX()+spider[sp].getWidth()/2); 
					 spiderbullet.setY(spider[sp].getY()+50);
					bulletmoveright=false;
					bulletmoveleft=true;

					 }
					 }}
					 
				}
					 }}
			
					
///////////SPIDER FIRE END

		//*******************************CANDY COLLECTION*********************
		for (var i=0; i< 102; i++)
		 {  var r1= guy.getHeight()/2; 
		   var r2= candies[i].getHeight()/2;
		   var x1= guy.getX()+ guy.getWidth()/2; 
		   var y1= guy.getY()+guy.getHeight()/2;
		   var x2= candies[i].getX()+candies[i].getWidth()/2;
		   var y2= candies[i].getY()+candies[i].getHeight()/2; 
		   
	   
	   if( Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))< (r1+r2))
	    { 
		candies[i].destroy();
		candies[i].setY(-5000); candies[i].setX(-5000);
		candyscore+=10; 
		//candysnd.play();
		if(i>=40&& i<47)
		  {life++;}
		  
		  else if(i>=86 && i<96)
		    {bulletno+=3; }
		
	
		else if( i>=96 && i<99)
		{   
		
		    immunity= true; 
			var imm= setInterval( function(){ immtime--; if(immtime==0) {immunity = false; immtime=10; clearInterval(imm);}}, 1000);
			
		}

		else if( i>= 99 && i<102)
		  {
			   infinitebullet= true; 
			var ib= setInterval( function(){ bullettime--; if(bullettime==0) {infinitebullet = false; bullettime=12; clearInterval(ib);}  }, 1000);
			
	}

		}
		 }
		if(!jumprunning && enable && guy.getY()!=posY)
		{{t+=0.5;
	h=5.9*t*t;
	guy.setY(Ypos+h); 
	 if(guy.getY()>posY) 
   {
   Ypos=posY;
	t=0;
    guy.setY(posY);
}
	}}
		
		
		
			if(idlerock.getX()+idlerock.getWidth()>1 && idlerock.getX()<bck.getWidth())
			{
		 
			if(!check)
			{
			
			if((idlerock.getY()<guy.getY() && idlerock.getY()+idlerock.getHeight()>guy.getY()) || (idlerock.getY()+idlerock.getHeight()>guy.getY() && idlerock.getY()<guy.getY()+guy.getHeight()))
			{check=true;}
			}
			}
			
		
		if(warning)
		{
		exclam.setY(bck.getHeight()/4);}
		else
		{exclam.setY(-100);}
		
		
			enemy.each(function(minion){
			
			if(minion.getX()<bck.getWidth() && minion.getX()+minion.getWidth()>=1 && !animcheck[minion.getId()])
		{animcheck[minion.getId()]=true;
		minion.start();}
		else
		if((minion.getX()>bck.getWidth() || minion.getX()+minion.getWidth()<1))
		{animcheck[minion.getId()]=false;
		minion.stop();}
		
			
			if(minion.getX()+minion.getWidth()>1 && minion.getX()<bck.getWidth())
			{
			if(!check)
			{if(minion.getX()+minion.getWidth()>guy.getX() && (minion.getX()>guy.getX()) && (minion.getX()<guy.getX()+guy.getWidth()))
			{if((minion.getY()<guy.getY() && minion.getY()+minion.getHeight()>guy.getY()) || (minion.getY()+minion.getHeight()>guy.getY() && minion.getY()<guy.getY()+guy.getHeight()))
			{check=true;}}
			}
			
			}
			});
			
			if(badpumpkin.getX()+badpumpkin.getWidth()>1 && badpumpkin.getX()<bck.getWidth())
			{
			if(!check)
			{if(badpumpkin.getX()+badpumpkin.getWidth()>guy.getX() && (badpumpkin.getX()>guy.getX()) && (badpumpkin.getX()<guy.getX()+guy.getWidth()))
			{if((badpumpkin.getY()<guy.getY() && badpumpkin.getY()+badpumpkin.getHeight()>guy.getY()) || (badpumpkin.getY()+badpumpkin.getHeight()>guy.getY() && badpumpkin.getY()<guy.getY()+guy.getHeight()))
			{check=true;}}
			}
			}
			
			
			/*check=guy.intersects({"x": (min1.getX()+min1.getWidth()/7), "y": (min1.getY()+min1.getHeight()/2)});
			if(!check)
			{}*/
		
		if(check)
		{hit=true;
		hitanim=true;}
		else
		{hit=false;}
		
		if(hit && immunity==false)
		{life-=0.1;}

		
		if(start)
		{var d2 = new Date();
		var finaltime = d2.getTime();
		var fs=candyscore+minionscore-( (finaltime-initialtime)/60000) ; ////////////THIS VARIABLE IS THE FINAL SCORE!!!!!!!!!!!!!!!!!!!!	
		var timecheck=60*4-Math.floor((finaltime-initialtime)/1000);
		if((d2.getTime()-initialtime)/1000>4*60)
		{life=0;
		if(fs<0)
		{fs=0;}
		}
		if(life<=1) 
		{stop=true;
		finalLabel.setText("GAME OVER!!! \n\n SCORE IS :"+Math.round(fs));
		
		displaylayer.add(Rect);
		displaylayer.add(finalLabel);
		if(stop)
		{coreloop.stop();
		$.ajax({
	url : '../score_update.php',
	type: 'POST',
	data: {'game_id': 4, 'score': Math.floor(fs)},
	success: function(data){
	console.log(fs);
//        window.open('https://www.facebook.com/dialog/send?app_id=263593520331172&link=https://games.festember.com&redirect_uri=http://festember.com/games/index.php');

	}
	});
		}
		//window.location.assign("gameover.php?sc="+fs);
		/******************************************************************************************************************************************************************** END OF THE GAME ************************************************************** ********************************************/
		
		} 
		
		scoredisplay.setText('REVENGE OF PUMPKIN\nLife: '+Math.floor(life)+'\nCandy Points: '+candyscore+'\nMonster Points: '+minionscore+'\nTime Left: '+Math.floor(timecheck/60)+':'+Math.floor(timecheck%60)+'\nBullets:'+bulletno);
		displaylayer.draw();}
		
		
		}});

			
	
   coreloop.start();

			

			

		
		
		window.onkeypress=function()
		{keycount++;
		
		if(keycount==1)
		{screen1.destroy();
		}
		
		if(keycount==2)
		{screen2.destroy();}
	
		if(keycount==3)
		{screen3.destroy();}
	
		if(keycount==4)
		{screen4.destroy();
		
		start=true;
			var d = new Date();
			
			initialtime = d.getTime();
			
		}
		
		displaylayer.draw();
		}
		
		
		
		
		
		
		
		
		
		
		
		
		window.addEventListener("keydown",function(e)
		{
										clearInterval(icheck);
										
										idlefall=false;

		if(e.keyCode == 39)
		{
		
		galf=0;
			rightrunning=true;
		/*	if(!start)
			{start=true;
			var d = new Date();
			simpleLabel.destroy();
			initialtime = d.getTime();
			
			}*/

		}
		
		
		
		if(e.keyCode == 37)
		{
		galf=1;
		leftrunning=true;
	/*if(!start)
			{start=true;
			var d = new Date();
			simpleLabel.destroy();
			initialtime = d.getTime();
			
			}*/
		}
			
		

		
		     if(e.keyCode== 38 && flag1==0)
				{  tooltip.destroy();	
				
				flag=1;
				if(!jumprunning)
				{t=0;posY= guy.getY();
				Ypos=posY;}
			jumprunning=true;

				}
     
	 
	 

			if(gotshot && e.keyCode== 38)
			{count++;
			boing.play();	
			if(count==7)
			{gotshot=false;
			guy.setAnimation('idle');
			count=0;}
			}
				
	    bcklayer.draw();
		charlayer.draw();
		evillayer.draw();
		platformlayer.draw();
		},false);
		

		
		
	window.addEventListener("keydown",function(e)
		 {		
		 
		 										clearInterval(icheck);
		 										
												idlefall=false; 

		     if(e.keyCode == 88 && B==0)
				{  
				if(bulletno>0)
				{
					 
				candysnd.play();	
				bullet.destroy();		
		    charlayer.add(bullet); 
			bullet.setY(guy.getY()+guy.getHeight()/2.5);
				fire=true;
			if(infinitebullet==false)
				bulletno=bulletno-1;

				}
				} 
     
	     bcklayer.draw();
		 platformlayer.draw();
		charlayer.draw();
		},false);
		
			
			

		
		
		window.addEventListener("keyup",function(e)
		{
			
							clearInterval(icheck);  
							  
				
				
				wcheck= setInterval( function(){ 
					if(warning)
					{setrun=true;}
					
					warning=false;

					},3000)

				
				
				
					icheck= setInterval( function(){ 
					idlefall=true; ghostfall=true;
				
					
					},2000)

			
			if(e.keyCode == 39)
		{rightrunning=false;
		
		
		guy.afterFrame(3, function() {
			hitanim=false; 
			if(immunity)
			 {guy.setAnimation('immidle');}
			 else 
			 if(infinitebullet)
			 {guy.setAnimation('fireidle');}
              else 
			{guy.setAnimation('idle');}
						
        
		
		 } )};
		
		
		
		if(e.keyCode == 37)
		{leftrunning=false;
		
		
		
		guy.afterFrame(3, function() { 
			hitanim=false;
			if(immunity)
			 {guy.setAnimation('immidle');}
			 else 
			 if(infinitebullet)
			 {guy.setAnimation('fireidle');}
              else 
			{guy.setAnimation('idle');}

		
		})};
		 
		if(e.keyCode == 38)
		{
		flag=0;
		};
		
		
		
		},false);
		}
		
		
		
		rocky.src='images/rock.png';
		pit.src='images/tunnel.png';
		spider1.src='images/spidersprite1.png';
		bat.src='images/batsamp1.gif';
		backdrop.src='images/backgroundo.png';
		ourguy.src='images/sprite4.png';
		ourbullet.src='images/bullet.png';
		scenery.src='images/scene.jpg';
		brick.src='images/brick.png';
		ghost.src= 'images/ghostsprite.png';
		health.src='images/health.png';
		bulletadd.src='images/bulletadd.png';
		badguy.src='images/pumpkinsprite.png';
		immunadd.src='images/immunadd.png';
		fireadd.src='images/fireadd.png';
		exclamat.src='images/exclam.png';
		candyimg[0].src='images/candy0.png';
		candyimg[1].src='images/candy1.png';
        candyimg[2].src='images/candy2.png';
		candyimg[3].src='images/candy3.png';
		candyimg[4].src='images/candy4.png';
		page1.src='images/page1.png';
		page2.src='images/page2.png';
		page3.src='images/page3.png';
		page4.src='images/page4.png';
//			}());