import React from 'react';
import PropTypes from 'prop-types';

import { Col } from './styled';

const col = (props) => {

  const {
    col,
    offset,
    auto,
    alignSelf,
    order,
    xs,
    xsOffset,
    xsAuto,
    xsAlignSelf,
    xsOrder,
    sm,
    smOffset,
    smAuto,
    smAlignSelf,
    smOrder,
    md,
    mdOffset,
    mdAuto,
    mdAlignSelf,
    mdOrder,
    lg,
    lgOffset,
    lgAuto,
    lgAlignSelf,
    lgOrder,
    xl,
    xlOffset,
    xlAuto,
    xlAlignSelf,
    xlOrder,
    noGutter,
    children,
    ...otherProps,
  } = props;

  let dataName = '';
  if (col) {
    if (!isNaN(parseInt(col, 10))) {
      dataName = `${dataName} col-${col}`;
    } else {
      dataName = `${dataName} col`;
    }
  }
  if (!isNaN(parseInt(offset, 10))) {
    dataName = `${dataName} offset-${offset}`;
  }
  if (auto) {
    dataName = `${dataName} col-auto`;
  }
  if (alignSelf) {
    dataName = `${dataName} align-self-${alignSelf}`;
  }
  if (!isNaN(parseInt(order, 10)) || order === 'first' || order === 'last') {
    dataName = `${dataName} order-${order}`;
  }

  // XS
  if (xs) {
    if (!isNaN(parseInt(xs, 10))) {
      dataName = `${dataName} col-xs-${xs}`;
    } else {
      dataName = `${dataName} col-xs`;
    }
  }
  if (!isNaN(parseInt(xsOffset, 10))) {
    dataName = `${dataName} offset-xs-${xsOffset}`;
  }
  if (xsAuto) {
    dataName = `${dataName} col-xs-auto`;
  }
  if (xsAlignSelf) {
    dataName = `${dataName} align-self-xs-${xsAlignSelf}`;
  }
  if (!isNaN(parseInt(xsOrder, 10)) || xsOrder === 'first' || xsOrder === 'last') {
    dataName = `${dataName} order-xs-${xsOrder}`;
  }

  // SM
  if (sm) {
    if (!isNaN(parseInt(sm, 10))) {
      dataName = `${dataName} col-sm-${sm}`;
    } else {
      dataName = `${dataName} col-sm`;
    }
  }
  if (!isNaN(parseInt(smOffset, 10))) {
    dataName = `${dataName} offset-sm-${smOffset}`;
  }
  if (smAuto) {
    dataName = `${dataName} col-sm-auto`;
  }
  if (smAlignSelf) {
    dataName = `${dataName} align-self-sm-${smAlignSelf}`;
  }
  if (!isNaN(parseInt(smOrder, 10)) || smOrder === 'first' || smOrder === 'last') {
    dataName = `${dataName} order-sm-${smOrder}`;
  }

  // MD
  if (md) {
    if (!isNaN(parseInt(md, 10))) {
      dataName = `${dataName} col-md-${md}`;
    } else {
      dataName = `${dataName} col-md`;
    }
  }
  if (!isNaN(parseInt(mdOffset, 10))) {
    dataName = `${dataName} offset-md-${mdOffset}`;
  }
  if (mdAuto) {
    dataName = `${dataName} col-md-auto`;
  }
  if (mdAlignSelf) {
    dataName = `${dataName} align-self-md-${mdAlignSelf}`;
  }
  if (!isNaN(parseInt(mdOrder, 10)) || mdOrder === 'first' || mdOrder === 'last') {
    dataName = `${dataName} order-md-${mdOrder}`;
  }

  // LG
  if (lg) {
    if (!isNaN(parseInt(lg, 10))) {
      dataName = `${dataName} col-lg-${lg}`;
    } else {
      dataName = `${dataName} col-lg`;
    }
  }
  if (!isNaN(parseInt(lgOffset, 10))) {
    dataName = `${dataName} offset-lg-${lgOffset}`;
  }
  if (lgAuto) {
    dataName = `${dataName} col-lg-auto`;
  }
  if (lgAlignSelf) {
    dataName = `${dataName} align-self-lg-${lgAlignSelf}`;
  }
  if (!isNaN(parseInt(lgOrder, 10)) || lgOrder === 'first' || lgOrder === 'last') {
    dataName = `${dataName} order-lg-${lgOrder}`;
  }

  // XL
  if (xl) {
    if (!isNaN(parseInt(xl, 10))) {
      dataName = `${dataName} col-xl-${xl}`;
    } else {
      dataName = `${dataName} col-xl`;
    }
  }
  if (!isNaN(parseInt(xlOffset, 10))) {
    dataName = `${dataName} offset-xl-${xlOffset}`;
  }
  if (xlAuto) {
    dataName = `${dataName} col-xl-auto`;
  }
  if (xlAlignSelf) {
    dataName = `${dataName} align-self-xl-${xlAlignSelf}`;
  }
  if (!isNaN(parseInt(xlOrder, 10)) || xlOrder === 'first' || xlOrder === 'last') {
    dataName = `${dataName} order-xl-${xlOrder}`;
  }

  if (noGutter) {
    dataName = `${dataName} no-gutter`;
  }

  dataName = dataName.trim();

  const allProps = {
    col,
      offset,
      auto,
      alignSelf,
      order,

      xs,
      xsOffset,
      xsAuto,
      xsAlignSelf,
      xsOrder,

      sm,
      smOffset,
      smAuto,
      smAlignSelf,
      smOrder,

      md,
      mdOffset,
      mdAuto,
      mdAlignSelf,
      mdOrder,

      lg,
      lgOffset,
      lgAuto,
      lgAlignSelf,
      lgOrder,

      xl,
      xlOffset,
      xlAuto,
      xlAlignSelf,
      xlOrder,

      noGutter,
      'data-name': dataName,
      ...otherProps
  };

  return (
    <Col {...allProps} >
      {children}
    </Col>
  );
};

const stringOrNumberReactPropType =
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]);

const stringOrNumberorBooleanReactPropType =
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]);

col.propTypes = {
  children: PropTypes.any,
  noGutter: PropTypes.bool,

  col: stringOrNumberorBooleanReactPropType,
  auto: PropTypes.bool,
  alignSelf: PropTypes.string,
  order: stringOrNumberReactPropType,

  xs: stringOrNumberorBooleanReactPropType,
  xsOffset: stringOrNumberReactPropType,
  xsAuto: PropTypes.bool,
  xsAlignSelf: PropTypes.string,
  xsOrder: stringOrNumberReactPropType,

  sm: stringOrNumberorBooleanReactPropType,
  smOffset: stringOrNumberReactPropType,
  smAuto: PropTypes.bool,
  smAlignSelf: PropTypes.string,
  smOrder: stringOrNumberReactPropType,

  md: stringOrNumberorBooleanReactPropType,
  mdOffset: stringOrNumberReactPropType,
  mdAuto: PropTypes.bool,
  mdAlignSelf: PropTypes.string,
  mdOrder: stringOrNumberReactPropType,

  lg: stringOrNumberorBooleanReactPropType,
  lgOffset: stringOrNumberReactPropType,
  lgAuto: PropTypes.bool,
  lgAlignSelf: PropTypes.string,
  lgOrder: stringOrNumberReactPropType,

  xl: stringOrNumberorBooleanReactPropType,
  xlOffset: stringOrNumberReactPropType,
  xlAuto: PropTypes.bool,
  xlAlignSelf: PropTypes.string,
  xlOrder: stringOrNumberReactPropType,
};

col.defaultProps = {
  children: null,
};

export default col;
