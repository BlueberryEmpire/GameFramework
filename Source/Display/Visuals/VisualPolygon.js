
function VisualPolygon(verticesAsPath, colorFill, colorBorder)
{
	this.verticesAsPath = verticesAsPath;
	this.colorFill = colorFill;
	this.colorBorder = colorBorder;

	this.verticesAsPathTransformed = this.verticesAsPath.clone();
	this.transformTranslate = new Transform_Translate(new Coords());
}

{
	VisualPolygon.prototype.draw = function(universe, world, display, drawable, entity)
	{
		var pos = drawable.loc.pos;
		this.transformTranslate.displacement.overwriteWith(drawable.loc.pos);

		this.verticesAsPathTransformed.overwriteWith
		(
			this.verticesAsPath
		);

		Transform.applyTransformToCoordsMany
		(
			this.transformTranslate,
			this.verticesAsPathTransformed.points
		);

		display.drawPolygon
		(
			this.verticesAsPathTransformed.points, this.colorFill, this.colorBorder
		);
	};
}
