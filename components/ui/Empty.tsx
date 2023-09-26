import Image from "next/image";
interface EmptyProps {
  label: string;
}
export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image
          alt="empty image"
          src="/empty.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-muted-forground text-sm test-center">{label}</p>
    </div>
  );
};
