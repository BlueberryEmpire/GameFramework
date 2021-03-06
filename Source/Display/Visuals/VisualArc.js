
function VisualArc(arc, colorFill, colorBorder)
{
	this.arc = arc;
	this.colorFill = colorFill;
	this.colorBorder = colorBorder;

	// helper variables
	this.drawPos = new Coords();
}
{
	VisualArc.prototype.draw = function(universe, world, display, drawable, entity)
	{
		var arc = this.arc;
		var shell = arc.shell;
		var wedge = arc.wedge;
		var wedgeAngleMin = wedge.angleInTurnsMin();
		var wedgeAngleMax = wedge.angleInTurnsMax();

		var drawPos = this.drawPos.overwriteWith
		(
			drawable.loc.pos
		);

		display.drawArc
		(
			drawPos, // center
			shell.sphereInner.radius, shell.sphereOuter.radius,
			wedgeAngleMin, wedgeAngleMax,
			this.colorFill, this.colorBorder
		);
	};
}
