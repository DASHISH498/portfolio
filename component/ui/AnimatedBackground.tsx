export default function AnimatedBackground() {
  return (
    <div className="background-stars">
      {Array.from({ length: 180 }).map((_, index) => (
        <span
  key={index}
  className="star"
  style={{
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s, ${Math.random() * 8}s`,
    animationDuration: `${3 + Math.random() * 5}s, ${
      15 + Math.random() * 15
    }s`,
  }}
/>
      ))}
    </div>
  );
}