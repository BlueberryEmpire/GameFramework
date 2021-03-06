
function Sphere(center, radius)
{
	this.center = center;
	this.radius = radius;

	// Helper variables.
	this._displacement = new Coords();
}
{
	Sphere.prototype.containsOther = function(other)
	{
		var displacementOfOther =
			this._displacement.overwriteWith(other.center).subtract(this.center);
		var distanceOfOther = displacementOfOther.magnitude();
		var returnValue = (distanceOfOther + other.radius <= this.radius);
		return returnValue;
	};

	Sphere.prototype.pointRandom = function()
	{
		return new Polar(0, this.radius).random().toCoords(new Coords()).add(this.center);
	};
}
