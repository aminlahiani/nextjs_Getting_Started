import { useRouter } from 'next/router'

export default function route({ post }) {
    const router = useRouter()
  
    return (
      <span
        onClick={() => {
          router.push({
            pathname: '/post/[pid]',
            query: { pid: post.id },
          })
        }}
      >
        Click here to read more
      </span>
    )
  }