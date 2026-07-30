import LoginForm from "@/components/forms/LoginForm";

export default function Home() {
  return (
    <main className="min-h-screen text-black bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center p-5">
      <LoginForm />
    </main>
  );
}