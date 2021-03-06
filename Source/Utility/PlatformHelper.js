function PlatformHelper()
{
	// do nothing
}
{
	PlatformHelper.prototype.domElementAdd = function(domElement)
	{
		this.divMain.appendChild(domElement);
	};

	PlatformHelper.prototype.domElementRemove = function(domElement)
	{
		this.divMain.removeChild(domElement);
	};

	PlatformHelper.prototype.initialize = function(universe)
	{
		var divMain = this.divMain;
		if (divMain == null)
		{
			var divMain = document.createElement("div");
			divMain.id = "divMain";
			divMain.style.position = "absolute";
			divMain.style.left = "50%";
			divMain.style.top = "50%";
			document.body.appendChild(divMain);
			this.divMain = divMain;
		}
		var display = universe.display;
		divMain.style.marginLeft = 0 - display.sizeInPixels.x / 2;
		divMain.style.marginTop = 0 - display.sizeInPixels.y / 2;
	};
}
