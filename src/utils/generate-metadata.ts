import { Metadata } from "next";

export const generateMetadata = ({
  title = "Артимэйк — умное кресло для здоровой осанки",
  description = "Умное кресло Артимэйк помогает контролировать осанку, получать полезные напоминания и анализировать статистику сидения.",
  image = "/images/thumbnail.png",
  icons = [
    {
      rel: "icon",
      sizes: "512x512",
      url: "/icons/logo.png",
    },
    {
      rel: "manifest",
      sizes: "512x512",
      url: "/icons/logo.svg",
    },
  ],
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: {
    rel: string;
    sizes: string;
    url: string;
  }[];
  noIndex?: boolean;
} = {}): Metadata => ({
  title: title,
  description: description,
  icons: icons,
  openGraph: {
    title,
    description,
    ...(image && { images: [{ url: image }] }),
  },
});
