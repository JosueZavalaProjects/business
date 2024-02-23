import {
  ChartIcon,
  FileIcon,
  PlusCircleIcon,
  StoreIcon,
  UsersGroupIcon,
} from "@/public/assets";

type FooterIcons = {
  src: string;
  alt: string;
  link?: string;
  modal?: boolean;
};

export const FOOTER_ICONS: FooterIcons[] = [
  { src: FileIcon, alt: "File Icon", link: "/sales-point" },
  { src: ChartIcon, alt: "Chart Icon" },
  { src: PlusCircleIcon, alt: "Plus Icon", link: "", modal: true },
  { src: UsersGroupIcon, alt: "User Group Icon" },
  { src: StoreIcon, alt: "Store Icon" },
];
