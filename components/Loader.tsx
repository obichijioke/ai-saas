import Image from "next/image";
export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="animate-spin h-10 w-10">
        <Image alt="loading" src="/logo.png" fill />
      </div>

      <p className="text-muted-foreground text-sm">AI is thinking...</p>
    </div>
  );
};
