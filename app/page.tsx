import { signIn, auth } from "@/app/auth";

export default async function Home() {
  const session = await auth();
  if (session) {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome, {session.user?.name}!</p>
      </div>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}