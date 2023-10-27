import { Profile } from "./profile";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-8">
      <Profile userId={1} />
    </main>
  );
}
