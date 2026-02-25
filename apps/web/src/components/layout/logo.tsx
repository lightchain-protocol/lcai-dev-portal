import Image from "next/image";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export default function Logo(
  { className, onClick }: { className?: string; onClick?: () => void },
) {
  return (
    <Link
      className={cn("group flex items-center gap-2", className)}
      href="/"
      onClick={onClick}
    >
      <Image
        alt="LightchainAI Logo"
        height={39}
        priority
        src="/images/logo.png"
        width={200}
      />
    </Link>
  );
}
