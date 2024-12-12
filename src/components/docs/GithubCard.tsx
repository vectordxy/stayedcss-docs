import Github from "@/src/assets/svg/Github";
import { applyDarkStyle, applyStyle } from "@/src/utils/getModule";

export default function GithubCard() {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div>
          <Github />
        </div>
        <div>
          <a
            className={style.cardTitle}
            href="https://github.com/vectordxy/stayedcss-docs"
            target="_blank"
          >
            vectordxy / stayedcss-docs
          </a>
        </div>
      </div>
      <p className={style.cardDescription}>
        StayedCSS is a static CSS library designed for Next.js projects. It
        provides full support for both server and client components, offering
        various styling features such as pseudo-elements, media queries, and
        dark mode with no flickering. Additionally, it adopts the same syntax as
        standard CSS, making it easy to integrate into your projects.
      </p>
      <div className={style.cardFooter}>
        <a
          className={style.cardButton}
          href="https://github.com/vectordxy/stayedcss-docs"
          target="_blank"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/community/previewcode",
  card: {
    width: "100%",
    borderRadius: 3,
    padding: "21px 23px 27px 23px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
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

applyDarkStyle({
  componentId: "components/community/previewcode",
  card: {
    backgroundColor: "#161b22",
    color: "#c9d1d9",
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
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
