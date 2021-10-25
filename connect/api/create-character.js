import connect from 'hyper-connect'

const hyper = connect(process.env['HYPER'])()

export default async function (req, res) {
  const result = await hyper.data.add(req.body)
  return res.send(result)
}