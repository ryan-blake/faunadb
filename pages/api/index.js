const faunadb = require('faunadb')

// your secret hash
const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req, res) => {
  try {
    const dbs = await client.query(
      q.Map(
        // iterate each item in result
        q.Paginate(
          // make paginatable
          q.Match(
            // query index
            q.Index('all_customers') // specify source
          )
        ),
        ref => q.Get(ref) // lookup each result by its reference
      )
    )
    // ok
    res.status(200).json(dbs.data)
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message })
  }
}

const editNote = (noteId, newData) => client.query(
  q.Update(
    q.Ref(q.Collection('notes'), noteId),
    { data: { firstName: newData.split(" ")[0], lastName: newData.split(" ")[1] } },
  )
)
.then((ret) => console.log(ret))
.catch(err => console.warn(err))

export default editNote
