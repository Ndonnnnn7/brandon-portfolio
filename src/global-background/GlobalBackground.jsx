const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-canvas">
      <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[110px]" />
      <div className="absolute -bottom-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-secondary/30 blur-[120px]" />
      <div className="absolute bottom-[18%] right-[8%] h-72 w-72 rounded-full bg-primary/12 blur-[100px]" />
    </div>
  );
};

export default GlobalBackground;
