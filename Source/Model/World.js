// This class, as implemented, is only a demonstration.
// Its code is expected to be modified heavily in actual applications,
// including the constructor, the draw() and update() methods,
// and the World.new() method.

function World(name, dateCreated, defns, place)
{
	this.name = name;
	this.dateCreated = dateCreated;

	this.timerTicksSoFar = 0;

	this.defns = defns;

	this.place = place;
}

{
	// static methods

	World.new = function(universe)
	{
		var now = DateTime.now();
		var nowAsString = now.toStringMMDD_HHMM_SS();

		var place = new PlaceDemo
		(
			universe.display.sizeInPixels.clone().double(), // size
			5 // numberOfItems
		);
		place.entitiesSpawn(universe, null);

		var constraintDefns =
		[
			ConstraintDefn.Instances().Friction,
			ConstraintDefn.Instances().SpeedMax,
		];

		var defns = new Defns(constraintDefns);

		var returnValue = new World
		(
			"World-" + nowAsString,
			now, // dateCreated
			defns,
			place
		);
		return returnValue;
	};

	// instance methods

	World.prototype.draw = function(universe)
	{
		this.place.draw(universe, this);
	};

	World.prototype.initialize = function(universe)
	{
		this.place.initialize(universe, this);
	};

	World.prototype.updateForTimerTick = function(universe)
	{
		this.place.updateForTimerTick(universe, this);
		this.timerTicksSoFar++;
	};
}
