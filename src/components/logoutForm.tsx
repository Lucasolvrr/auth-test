import { logout } from "@/Actions"

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button>logout</button>
    </form>
  )
}

export default LogoutForm