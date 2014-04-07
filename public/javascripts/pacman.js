function Pacman()
{
	this.x=26;
	this.y=17;
	this.velocity={vx:0,vy:0};
	this.img="/images/pacman-left.png";
	this.initialize=function()
	{
		var el=document.getElementById("wall_26_17");
		el.setAttribute("src","/images/pacman-left.png");
	};
	this.move=function(direction)
	{
		var id="wall_"+this.x+"_"+this.y;
		var el=document.getElementById(id);
		
		if (direction==40)
		{
			this.velocity.vy=1;
			var temp=this.y+this.velocity.vy;
			var id="wall_"+this.x+"_"+temp;
			if(this.wall_validation(id))
			{
				this.velocity.vx=0;
				this.img="/images/pacman-down.png";
			}else
			{
				this.velocity.vy=0;
			}
		}else if (direction==39) 
		{
			this.velocity.vx=1;
			var temp=this.x+this.velocity.vx;
			var id="wall_"+temp+"_"+this.y;
			if (this.x==51&&this.y==14) 
			{
				this.x=0;
				this.velocity.vy=0;
				this.img="/images/pacman-right.png";				
			}else if(this.wall_validation(id))
			{
				this.velocity.vy=0;
				this.img="/images/pacman-right.png";
			}else
			{
				this.velocity.vx=0;
			};
		}else if (direction==37) 
		{
			this.velocity.vx=-1;
			var temp=this.x+this.velocity.vx;
			var id="wall_"+temp+"_"+this.y;
			if (this.x==0&&this.y==14) 
			{
				this.x=51;
				this.velocity.vy=0;
				this.img="/images/pacman-left.png";				
			}else if(this.wall_validation(id))
			{
				this.velocity.vy=0;
				this.img="/images/pacman-left.png";
			}else
			{
				this.velocity.vx=0;
			}
		}else if (direction==38) 
		{
			this.velocity.vy=-1;
			var temp=this.y+this.velocity.vy;
			var id="wall_"+this.x+"_"+temp;
			if(this.wall_validation(id))
			{
				this.velocity.vx=0;
				this.img="/images/pacman-top.png";
			}else
			{
				this.velocity.vy=0;
			}
		};
		this.x+=this.velocity.vx;
		this.y+=this.velocity.vy;
		var id1="wall_"+this.x+"_"+this.y;
		if (this.wall_validation(id1)) 
		{
			var el1=document.getElementById(id1);
			el.setAttribute("class","black");
			el.setAttribute("src","/images/blacksquare.jpg");
			el1.setAttribute("class","black");
			el1.setAttribute("src",this.img);
		}else
		{
			this.x-=this.velocity.vx;
			this.y-=this.velocity.vy;
			this.velocity.vx=0;
			this.velocity.vy=0;
		};
		
	};
	this.wall_validation=function(id)
	{
		var el=document.getElementById(id);
		if (el.getAttribute("class")=="wall") 
		{
			return false;
		}else
		{
			return true;
		};
	}
}