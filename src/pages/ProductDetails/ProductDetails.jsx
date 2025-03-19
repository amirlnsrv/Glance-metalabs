import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";

export const ProductDetails = () => {
  const { id } = useParams();

  return <div>ProductDetails</div>;
};
