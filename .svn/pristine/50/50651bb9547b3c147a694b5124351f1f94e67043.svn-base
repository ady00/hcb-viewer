// import Image from "next/image.js";
import Image from "next/image.js";
import type { BankOrg } from "../hackbank";
import styles from "../styles/cards.module.css";
export const ProjectCard = ({ data }: { data: BankOrg }) => {
  return (
    <>
      <a
        href={`https://bank.hackclub.com/${data.slug}`}
        className={`card interactive lead ${styles.card}`}
        key={data.id}
      >
        {data && data.logo && (
  <Image
    alt={data.name ? `${data.name}'s logo` : 'Logo'}
    src={data.logo}
    style={{ marginRight: "8px" }}
    width={32}
    height={32}
  />
)}
        <span>{data.name}</span>
      </a>
    </>
  );
};
