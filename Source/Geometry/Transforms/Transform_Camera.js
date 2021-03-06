
function Transform_Camera(camera)
{
	this.camera = camera;

	this.transformTranslateInvert = new Transform_TranslateInvert
	(
		this.camera.loc.pos
	);
	this.transformOrientForCamera = new Transform_OrientForCamera
	(
		this.camera.loc.orientation
	);
	this.transformPerspective = new Transform_Perspective
	(
		this.camera.focalLength
	);
	this.transformViewCenter = new Transform_Translate
	(
		this.camera.viewSizeHalf
	);
}

{
	Transform_Camera.prototype.transformCoords = function(coordsToTransform)
	{
		this.transformTranslateInvert.transformCoords(coordsToTransform);
		this.transformOrientForCamera.transformCoords(coordsToTransform);
		this.transformPerspective.transformCoords(coordsToTransform);
		this.transformViewCenter.transformCoords(coordsToTransform);
		return coordsToTransform;
	};
}
