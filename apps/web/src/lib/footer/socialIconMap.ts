import type { ComponentType } from "react";
import Coinmarketcap from "@/components/icons/Coinmarketcap";
import Community from "@/components/icons/Community";
import Discord from "@/components/icons/Discord";
import LinkTree from "@/components/icons/LinkTree";
import Medium from "@/components/icons/Medium";
import Telegram from "@/components/icons/Telegram";
import Twitter from "@/components/icons/Twitter";

export const socialIconMap: Record<string, ComponentType> = {
  "twitter": Twitter,
  "discord": Discord,
  "linktree": LinkTree,
  "coinmarketcap": Coinmarketcap,
  "community": Community,
  "telegram": Telegram,
  "medium": Medium,
};