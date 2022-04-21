import styles from "./index.module.scss";

const RotDot = ({ stylesfromProps1, stylesfromProps2 }) => {
  return (
    <div className={styles.rotImgWrapper} style={stylesfromProps1}>
      <img
        className="img-fluid"
        src="/images/growRotImg.webp"
        alt="rotating img"
        style={stylesfromProps2}
      />
    </div>
  );
};

export default RotDot;
