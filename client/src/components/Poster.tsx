interface PosterProps {
  src: string;
  title: string;
}

function Poster({ src, title }: PosterProps) {
  return (
    <img src={src} alt={`${title} poster`} className="h-96 rounded-lg"></img>
  );
}

export default Poster;
