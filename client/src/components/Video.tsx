interface VideoProps {
  videoKey: string;
}

function Video({ videoKey }: VideoProps) {
  return (
    <iframe
      className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-lg"
      width="720"
      height="406"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      title="YouTube video player"
      src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
    ></iframe>
  );
}

export default Video;
