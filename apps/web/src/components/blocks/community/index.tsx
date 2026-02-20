import DiscordIcon from "@/components/icons/discord";
import GithubIcon from "@/components/icons/github";
import IconCommunity from "@/components/icons/icon-community";
import CommunityCard from "./community-card";
import CtaBanner from "./cta-banner";

export default function CommunitySection() {
	return (
		<section className="py-30">
			<div className="container">
				<CtaBanner />
				<div className="mx-auto mt-4 grid max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-3">
					{communities.map((item) => (
						<CommunityCard key={item.title} {...item} />
					))}
				</div>
			</div>
		</section>
	);
}

const communities = [
	{
		icon: <DiscordIcon />,
		title: "Discord",
		text: "Chat live with the community Get support and updates",
	},
	{
		icon: <GithubIcon />,
		title: "GitHub",
		text: "Explore the source code Report issues and contribute",
	},
	{
		icon: <IconCommunity />,
		title: "Forum",
		text: "Join technical discussions Share proposals and feedback",
	},
];
