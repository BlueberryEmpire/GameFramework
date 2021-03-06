
function ControlLabel(name, pos, size, isTextCentered, text, fontHeightInPixels)
{
	this.name = name;
	this.pos = pos;
	this.size = size;
	this.isTextCentered = isTextCentered;
	this._text = text;
	this.fontHeightInPixels = fontHeightInPixels;

	// Helper variables.

	this._drawPos = new Coords();
}

{
	ControlLabel.prototype.style = function(universe)
	{
		return universe.controlBuilder.styles[this.styleName == null ? "Default" : this.styleName];
	};

	ControlLabel.prototype.text = function()
	{
		return (this._text.get == null ? this._text : this._text.get() );
	};

	// drawable

	ControlLabel.prototype.draw = function(universe, display, drawLoc)
	{
		var drawPos = this._drawPos.overwriteWith(drawLoc.pos).add(this.pos);
		var style = this.style(universe);
		var text = this.text();

		if (text != null)
		{
			var textAsLines = ("" + text).split("\n");
			for (var i = 0; i < textAsLines.length; i++)
			{
				var textLine = textAsLines[i];
				display.drawText
				(
					textLine,
					this.fontHeightInPixels,
					drawPos,
					style.colorBorder,
					style.colorFill, // colorOutline
					null, // areColorsReversed
					this.isTextCentered,
					this.size.x // widthMaxInPixels
				);

				drawPos.y += this.fontHeightInPixels;
			}
		}
	};
}
