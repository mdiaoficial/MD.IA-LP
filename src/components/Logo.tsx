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
      ? { w: 120, h: 40 }
      : size === "lg"
        ? { w: 260, h: 80 }
        : { w: 200, h: 64 };

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo/logo_mdia.png"
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
