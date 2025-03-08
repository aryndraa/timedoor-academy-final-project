"use client"
import {useAuthorize} from "@/app/_contexts/AuthorizeProvider";
import {LogoutBtn} from "@/app/components/form/LogoutBtn";

export default function Page () {
  const { authorized } = useAuthorize();
  console.log(authorized);

  return authorized ? (
    <h1>
      Profile
      <LogoutBtn/>
    </h1>
  ) : (
    <h1>
      Not Authorized
    </h1>
  )
}