window.getCurrentTop = () => {
	return document.documentElement.scrollTop;
}

window.setCurrentTop = (top) => {
	document.documentElement.scrollTop = top;
}