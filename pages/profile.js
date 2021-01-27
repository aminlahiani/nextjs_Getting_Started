//const { data, error } = useSWR('/api/user', fetch)
import Image from 'next/image'
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users/1', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
  <div>
      <Image
        src="/static/images.png"
        alt="Picture of the author"
        width="200"
        height="200"
      />
      hello {console.log(data.name)}!</div>
  )}

export default Profile