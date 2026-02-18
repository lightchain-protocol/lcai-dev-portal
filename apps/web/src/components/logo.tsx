import { Link } from "@/components/ui/link";
import Image from "next/image";

export default function Logo() {
	return (
		<Link className="group flex items-center gap-2" href="/">
			<div className="flex items-center gap-2">
				<Image src="/images/logo.png" alt="Logo" width={200} height={39} />
			</div>
		</Link>
	);
}
