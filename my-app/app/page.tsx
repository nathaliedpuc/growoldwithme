import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-secondary-pink">
        <Spline
          scene="scene.splinecode"
          wasmPath="/"
        />
    </main>
  );
}

