import styles from "./index.module.scss";

const RotLine = ({ stylesfromProps1, stylesfromProps2 }) => {
  return (
    <div className={styles.rotImgWrapper} style={stylesfromProps1}>
      <img
        className="img-fluid"
        src="/images/growRotImgLine.webp"
        alt="rotating img"
        style={stylesfromProps2}
      />
    </div>
  );
};

export default RotLine;
