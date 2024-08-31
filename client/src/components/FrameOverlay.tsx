interface FrameOverlayProps {
  onClick(): void;
}

function FrameOverlay({ onClick }: FrameOverlayProps) {
  return (
    <div
      onClick={onClick}
      className="bg-dark fixed left-0 top-0 z-40 h-full w-full"
    ></div>
  );
}

export default FrameOverlay;
