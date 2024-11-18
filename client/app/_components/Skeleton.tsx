interface SkeletonProps {
  type: 'actor' | 'movie';
  rows: 2 | 4;
}

function Skeleton({ type, rows }: SkeletonProps) {
  const items = Array.from({ length: rows === 2 ? 10 : 20 }, (_, i) => i + 1);

  return (
    <div className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16">
      {items.map((item) => (
        <span
          key={item}
          className={`${
            type === 'actor'
              ? 'skeleton-actor w-44 h-72'
              : 'skeleton-movie w-48 h-80'
          } rounded-md`}
        ></span>
      ))}
    </div>
  );
}

export default Skeleton;
