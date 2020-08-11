// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let data = [{
	"name": "the name",
	"pass": "the password"
}]

export default (req, res) => {
  res.statusCode = 200
  res.json(data);
}
