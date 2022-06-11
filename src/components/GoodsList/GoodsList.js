import React from "react";
import Product from "../Product/Product";
import { ProductList } from "./GoodsList-styles";
import { connect } from "react-redux";

export const GoodsList = ({ goods }) => {
  const goodsArr = goods.map((p) => (
    <Product id={p.id} key={p.id} product={p} delBtn={false} />
  ));

  return <ProductList>{goodsArr}</ProductList>;
};

const mapStateToProps = (state) => {
  return {
    goods: state.goods.data,
  };
};

export default connect(mapStateToProps)(GoodsList);
