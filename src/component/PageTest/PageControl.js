import React from "react";

export default function PageControl(props) {
  const { _page, _limit, _totalRows } = props.pageControl;
  const cuoi = Math.ceil(_totalRows / _limit);
  const page = () => {
    let newPage;
    if (props.dieukien) {
      if (_page === cuoi) {
        newPage = 1;
      } else {
        newPage = _page + 1;
      }
    } else {
      if (_page === 1) {
        newPage = cuoi;
      } else {
        newPage = _page - 1;
      }
    }
    return newPage;
  };
  return (
    <>
      <button onClick={() => props.onClickButton(page())}>
        Click {props.dieukien ? "tang" : "giam"}
      </button>
    </>
  );
}
