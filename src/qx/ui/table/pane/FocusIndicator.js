/**
 * The focus indicator widget
 */
//>public
vjo.ctype('qx.ui.table.pane.FocusIndicator')
.inherits('qx.ui.container.Composite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Keypress handler. Suppress all key events but &#8220;Enter&#8221; and &#8220;Escape&#8221;
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property column.
	 * 
	 * For further details take a look at the property definition: {@link #column}.
	 * 
	 */
	getColumn : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property row.
	 * 
	 * For further details take a look at the property definition: {@link #row}.
	 * 
	 */
	getRow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property column
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #column}.
	 * 
	 */
	initColumn : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property row
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #row}.
	 * 
	 */
	initRow : vjo.NEEDS_IMPL,


	/**
	 * Move the focus indicator to the given table cell.
	 * 
	 */
	moveToCell : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property column.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #column}.
	 * 
	 */
	resetColumn : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property row.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #row}.
	 * 
	 */
	resetRow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property column.
	 * 
	 * For further details take a look at the property definition: {@link #column}.
	 * 
	 */
	setColumn : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property row.
	 * 
	 * For further details take a look at the property definition: {@link #row}.
	 * 
	 */
	setRow : vjo.NEEDS_IMPL
})
.endType();