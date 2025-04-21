window.getCurrentTop = () => {
	let top = document.documentElement.scrollTop;
	return top;
}

window.setCurrentTop = (top) => {
	document.documentElement.scrollTop = top;
}