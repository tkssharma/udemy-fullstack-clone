import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "../components/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { User } from "../components/user";

export default async function Home() {
  // server side session 
  // we need token in server side session 
  
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div style={{width: '800px', margin: 'auto'}}>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Server Session</h1>
        <h6>{JSON.stringify(session)}</h6>

        <User />
      </div>
    </main>
  );
}