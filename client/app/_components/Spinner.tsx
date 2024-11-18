function Spinner({ fixed }: { fixed?: boolean }) {
  return (
    <div
      className={`${
        fixed ? 'h-hero' : 'h-80'
      } relative flex justify-center items-center`}
    >
      <span className="w-20 h-20 rounded-full text-sm loader box-border inline-block"></span>
    </div>
  );
}

export default Spinner;
