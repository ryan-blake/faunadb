import { client, q } from './index'

const editName = (userId, newData) => client.query(
  q.Update(
    q.Ref(q.Collection('customers'), userId),
    { data: { firstName: newData.split(" ")[0], lastName: newData.split(" ")[1] } },
  )
)
.then((ret) => console.log(ret))
.catch(err => console.warn(err))


export default editName
