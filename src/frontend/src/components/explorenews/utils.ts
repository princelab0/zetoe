import ronbLogo from "@/public/explore-perferences/ronb.png";
import kantipurLogo from "@/public/explore-perferences/kantipur.png";
import himalayanLogo from "@/public/explore-perferences/himalayan.jpg";
import setopatiLogo from "@/public/explore-perferences/setopati.jpg";
import onlineKhabarLogo from "@/public/explore-perferences/onlinekhabar.png";
import forYouLogo from "@/public/explore-perferences/for-you.svg";
import ratopatiLogo from "@/public/explore-perferences/ratopati.jpg";

export function ImageSelector(author: any) {
  let imageSrc;
  if (author === "routineofnepalbanda") imageSrc = ronbLogo;
  else if (author === "ekantipur_official") imageSrc = kantipurLogo;
  else if (author === "the_himalayantimes") imageSrc = himalayanLogo;
  else if (author === "setopati") imageSrc = setopatiLogo;
  else if (author === "onlinekhabarofficial") imageSrc = onlineKhabarLogo;
  else if (author === "ratopati") imageSrc = ratopatiLogo;
  else return;

  return imageSrc;
}

export function capitalizeFirstLetter(str: string) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export const categories = [
  {
    icon: forYouLogo,
    title: "For You",
    id: "for_you",
  },
  {
    icon: ronbLogo,
    title: "RONB",
    id: "routineofnepalbanda",
  },
  {
    icon: kantipurLogo,
    title: "E-Kantipur",
    id: "ekantipur_official",
  },
  {
    icon: himalayanLogo,
    title: "Himalayan Times",
    id: "the_himalayantimes",
  },
  {
    icon: setopatiLogo,
    title: "Setopati",
    id: "setopati",
  },
  {
    icon: onlineKhabarLogo,
    title: "Online Khabar",
    id: "onlinekhabarofficial",
  },
  {
    icon: ratopatiLogo,
    title: "Ratopati",
    id: "ratopati",
  },
];
