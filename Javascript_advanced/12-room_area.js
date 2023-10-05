let roomDimensions = {
	width: 50,
	length: 100,
	getArea() {
		return this.width * this.length
	}
}

let room = {
	width: 5,
	length: 10,
}


const boundGetArea = roomDimensions.getArea.bind(roomDimensions)
console.log(boundGetArea())

