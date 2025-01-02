import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
    let {user} = useAuth0()
  return (
    <div className="w-screen h-20 flex justify-start items-center px-20 relative top-32 gap-5 max-cartMini:px-5">
        <img src={user.picture} alt="user Image" className="w-20 rounded-full max-sm:w-10"/>
        <div className="text-xl font-semibold max-sm:text-xs">{user.name}</div>
    </div>
  )
}

export default Profile