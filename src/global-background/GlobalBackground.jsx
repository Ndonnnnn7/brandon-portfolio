const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-canvas">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,18,20,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,18,20,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[110px]" />
      <div className="absolute -bottom-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-secondary/30 blur-[120px]" />
      <div className="absolute bottom-[18%] right-[8%] h-72 w-72 rounded-full bg-primary/12 blur-[100px]" />
    </div>
  );
};

export default GlobalBackground;
