import {checkLoginStatus} from "@/app/_lib/auth";

export default function Page () {
  const authorize = checkLoginStatus();

  return authorize ? (
    <h1>
      Profile
    </h1>
  ) : (
    <h1>
      Not Authorized
    </h1>
  )
}