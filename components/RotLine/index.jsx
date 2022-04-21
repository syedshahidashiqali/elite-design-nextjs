import styles from "./index.module.scss";
import Image from "next/image";

const RotLine = ({ stylesfromProps1, stylesfromProps2 }) => {
  return (
    <div className={styles.rotImgWrapper} style={stylesfromProps1}>
      <Image
        layout="responsive"
        width={250}
        height={200}
        className="img-fluid"
        src="/images/growRotImgLine.webp"
        alt="rotating img"
        style={stylesfromProps2}
      />
    </div>
  );
};

export default RotLine;
