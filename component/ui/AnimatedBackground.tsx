export default function AnimatedBackground() {
  return (
    <div className="background-stars">
      {Array.from({ length: 180 }).map((_, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,

            // Start above the screen
            top: `${-20 - Math.random() * 100}%`,

            animationDelay: `${-Math.random() * 20}s`,

            animationDuration: `${10 + Math.random() * 15}s`,

            opacity: 0.3 + Math.random() * 0.7,

            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }}
        />
      ))}
    </div>
  );
}