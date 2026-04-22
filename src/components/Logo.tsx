import Image from "next/image";

export function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "sm" | "lg";
}) {
  const dims =
    size === "sm"
      ? { w: 96, h: 32 }
      : size === "lg"
        ? { w: 200, h: 64 }
        : { w: 140, h: 44 };

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo/logo_mdia.jpg"
        alt="MD.IA"
        width={dims.w}
        height={dims.h}
        priority
        className="h-auto w-auto object-contain"
        style={{ maxHeight: `${dims.h}px` }}
      />
    </div>
  );
}
