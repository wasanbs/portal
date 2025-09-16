import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to Your App</h1>
        <p className="text-xl text-muted-foreground">
          This is the starting point. Let&apos;s build something great.
        </p>
        <div className="flex justify-center gap-4 pt-4">
            <Link href="/auth/signin" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Go to Sign In
            </Link>
        </div>
      </div>
    </div>
  );
}
