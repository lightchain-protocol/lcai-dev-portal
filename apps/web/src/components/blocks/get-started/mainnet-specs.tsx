import { Button } from "@/components/ui/button";
import { Field } from "./field";

export function MainnetSpecs() {
	return (
		<div>
			<div className="grid grid-cols-[45%_1fr] border-border-slate-strong border-b py-4">
				<Field label="Chain ID" value="[TBD]" />
				<Field label="RPC URL" value="https://rpc.lightchain.io" />
			</div>
			<div className="grid grid-cols-[45%_1fr] border-border-slate-strong border-b py-4">
				<Field label="Currency / Gas Token" value="LCAI" />
				<Field label="Explorer URL" value="https://explorer.lightchain.io" />
			</div>

			<div className="mt-4 flex flex-wrap gap-3">
				<Button className="flex-1" variant="gradient">
					Add Network to Wallet
				</Button>
				<Button className="flex-1" variant="outline">
					Buy LCAI
				</Button>
			</div>
		</div>
	);
}
