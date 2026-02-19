import { Button } from "@/components/ui/button";
import { Field } from "./field";

export function TestnetSpecs() {
	return (
		<div>
			<div className="grid grid-cols-[40%_1fr] border-border-slate-strong border-b py-4">
				<Field label="Chain ID" value="[TBD]" />
				<Field label="RPC URL" value="https://testnet-rpc.lightchain.io" />
			</div>
			<div className="grid grid-cols-[40%_1fr] border-border-slate-strong border-b py-4">
				<Field label="Currency / Gas Token" value="LCAI" />
				<Field
					label="Explorer URL"
					value="https://testnet-explorer.lightchain.io"
				/>
			</div>
			<div className="py-4">
				<Field label="Faucet" value="https://faucet.lightchain.io" />
			</div>

			<div className="mt-4 flex flex-wrap gap-4">
				<Button className="flex-1" variant="gradient">
					Add Network to Wallet
				</Button>
				<Button className="flex-1" variant="outline">
					Get Testnet Tokens
				</Button>
			</div>
		</div>
	);
}
