const express = require('express')
const app = express()
const port = 1507
const attendance = [];

app.get('/', (req, res) => {
	let query = req.query;
	attendance.push(query.name)
	console.log(attendance);
	res.send(attendance)
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))