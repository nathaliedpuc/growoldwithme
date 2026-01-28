import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
      <div className="spline-container">
        <Spline
          scene="scene.splinecode"
          wasmPath="/"
        />
      </div>

      <div className="letter-wrapper">
        <article className="letter">
          <div className="stamp">♥</div>
          <h1 className="letter-title">My Dearest...</h1>
          <div className="letter-content">
            <p>
              I've been thinking about the way the light catches your eyes when you laugh,
              and how every moment with you feels like a page from a story I never want to end.
            </p>
            <p>
              This isn't just about the big things, but the quiet moments too.
              The way you make coffee in the morning, the softness of your voice,
              and the way you hold my hand like you're never going to let go.
            </p>
            <p>
              I promise to walk beside you through every season,
              to grow old together, and to love you more with every passing day.
            </p>
          </div>
          <footer className="letter-footer">
            Forever yours,
          </footer>
        </article>
      </div>
    </main>
  );
}

