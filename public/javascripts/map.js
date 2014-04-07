function Map()
{
	this.map=[];
	this.wall=function(number)
	{
		for (var i = 0; i < number; i++) 
		{
			this.map.push(1);
		};
	}
	this.mapDetail=function(start,length,type,line)
	{
		for (var i = 0+start+(line-1)*52; i < length+start+(line-1)*52; i++) 
		{
			this.map[i]=type;
		};
	};
	this.drawMap=function()
	{	
		for (var i = 0; i < this.map.length; i++) {
			if (this.map[i]==1) 
			{
				$("#playground").append("<img class='wall' id='wall_"+i%52+"_"+Math.floor(i/52)+"' src='/images/bluesquare.jpg' />");
			}else if (this.map[i]==2) 
			{
				$("#playground").append("<img class='sDot' id='wall_"+i%52+"_"+Math.floor(i/52)+"' src='/images/smallDot.png' />");
			}else if (this.map[i]==3) 
			{
				$("#playground").append("<img class='bDot' id='wall_"+i%52+"_"+Math.floor(i/52)+"' src='/images/bigDot.jpeg' />");
			}else if (this.map[i]==0) 
			{
				$("#playground").append("<img class='black' id='wall_"+i%52+"_"+Math.floor(i/52)+"' src='/images/blacksquare.jpg' />");
			}else if (this.map[i]==4) 
			{
				$("#playground").append("<img class='wall' id='wall_"+i%52+"_"+Math.floor(i/52)+"' src='/images/Blue-line.png' />");
			};
		};
		
	};
}