import Github from "@/src/assets/svg/Github";
import { st, stDark } from "stayedcss";

export default function GithubCard({
  link,
  projectTitle,
  children,
}: {
  link: string;
  projectTitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div>
          <Github />
        </div>
        <div>
          <a className={style.cardTitle} href={link} target="_blank">
            vectordxy / {projectTitle}
          </a>
        </div>
      </div>
      <p className={style.cardDescription}>{children}</p>
      <div className={style.cardFooter}>
        <a className={style.cardButton} href={link} target="_blank">
          View Code on GitHub
        </a>
      </div>
    </div>
  );
}

const style = st({
  componentId: "components/community/preview-code",
  card: {
    borderRadius: 3,
    padding: "21px 23px 27px 23px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    fontFamily: "Arial, sans-serif",
    marginTop: 12,
    marginBottom: 28,
  },
  cardHeader: {
    display: "flex",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textDecoration: "none",
    color: "#0366d6",
    marginLeft: 10,
    ":hover": {
      textDecoration: "underline",
    },
  },
  cardDescription: {
    fontSize: "14px",
    color: "#586069",
    marginBottom: "20px",
    background:
      "linear-gradient(180deg, #586069 60%, rgba(88, 96, 105, 0) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  cardFooter: {
    textAlign: "center",
  },
  cardButton: {
    padding: "10px 18px",
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: 3,
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#218838",
    },
  },
});

stDark({
  componentId: "components/community/preview-code",
  card: {
    backgroundColor: "#161b22",
    color: "#c9d1d9",
  },
  cardTitle: {
    color: "#58a6ff",
    ":hover": {
      textDecoration: "underline",
    },
  },
  cardDescription: {
    color: "#8b949e",
    background:
      "linear-gradient(180deg, #8b949e 60%, rgba(139, 148, 158, 0) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  cardButton: {
    color: "white",
    backgroundColor: "#21262d",
    ":hover": {
      backgroundColor: "#30363d",
    },
  },
});
