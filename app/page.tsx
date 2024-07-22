import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>Home</h1>
      <Link className="text-blue-500" href="dashboard/settings">Settings</Link>
<Link  className="text-blue-500"href="dashboard">Dashboard</Link>
    </main>
  );
}
