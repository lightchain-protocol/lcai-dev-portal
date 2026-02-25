import { Icon } from "@/components/shared/icon";
import CommunityCard from "./community-card";
import CtaBanner from "./cta-banner";

export default function CommunitySection() {
  return (
    <section className="py-10 md:py-20 xl:py-30">
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
    icon: <Icon name="discord" size={60} />,
    title: "Discord",
    text: "Chat live with the community Get support and updates",
  },
  {
    icon: <Icon name="github" size={52} />,
    title: "GitHub",
    text: "Explore the source code Report issues and contribute",
  },
  {
    icon: <Icon name="icon-community" size={84} />,
    title: "Forum",
    text: "Join technical discussions Share proposals and feedback",
  },
];
