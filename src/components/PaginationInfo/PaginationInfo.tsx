import { FC } from "react";
import "./paginationInfo.scss";

type PaginationProps = { current: number; total: number };

const PaginationInfo: FC<PaginationProps> = ({ current, total }) => {
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="arrow-pagination-label">
      <p className="current">{formatNumber(current)}</p>/
      <p className="total">{formatNumber(total)}</p>
    </div>
  );
};

export default PaginationInfo;
