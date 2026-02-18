import { Link } from "@/components/ui/link";
import Image from "next/image";

export default function Logo() {
	return (
		<Link className="group flex items-center gap-2" href="/">
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
