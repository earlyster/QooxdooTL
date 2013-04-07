/**
 * Date cell renderer.
 * 
 * Renders a date according to the configured date formatter.
 * 
 * EXPERIMENTAL!
 */
//>public
vjo.ctype('qx.ui.virtual.cell.Date')
.inherits('qx.ui.virtual.cell.Cell')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	getContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property dateFormat.
	 * 
	 * For further details take a look at the property definition: {@link #dateFormat}.
	 * 
	 */
	getDateFormat : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property dateFormat
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #dateFormat}.
	 * 
	 */
	initDateFormat : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property dateFormat.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #dateFormat}.
	 * 
	 */
	resetDateFormat : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property dateFormat.
	 * 
	 * For further details take a look at the property definition: {@link #dateFormat}.
	 * 
	 */
	setDateFormat : vjo.NEEDS_IMPL
})
.endType();