import connect from 'hyper-connect'

const hyper = connect(process.env['HYPER'])()

export default async function (req, res) {
  const character = await hyper.data.get(req.params.id)
  return res.send(character)
}