/* @ds-bundle: {"format":4,"namespace":"MedfordDesignSystem_1d167e","components":[{"name":"CategoryCard","sourcePath":"components/categories/CategoryCard.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CatalogSidebar","sourcePath":"components/navigation/CatalogSidebar.jsx"},{"name":"FilterPanel","sourcePath":"components/navigation/FilterPanel.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"SideMenu","sourcePath":"components/navigation/SideMenu.jsx"}],"sourceHashes":{"components/categories/CategoryCard.jsx":"a76e378f1e16","components/commerce/ProductCard.jsx":"be48187e7dae","components/core/Badge.jsx":"695afea87d0a","components/core/Button.jsx":"098482f5a499","components/core/Card.jsx":"5e9cacd776e7","components/core/Tag.jsx":"fd9fa89ea913","components/forms/Checkbox.jsx":"4d5f4ea60c2b","components/forms/Input.jsx":"40fb6ba1ec2c","components/forms/Select.jsx":"5ba02cd505dd","components/forms/Switch.jsx":"883223d28be3","components/navigation/CatalogSidebar.jsx":"9ed0cbcf964e","components/navigation/FilterPanel.jsx":"e7d8bd2f41ba","components/navigation/Footer.jsx":"ae43f6a8b9c6","components/navigation/Header.jsx":"58cfbfccabc1","components/navigation/SideMenu.jsx":"e3cd52722be7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MedfordDesignSystem_1d167e = window.MedfordDesignSystem_1d167e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/categories/CategoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Medford catalog category card — a light-blue tile with the category
 * title on top and the equipment photo below. Two presentations:
 *  - variant="tile"     large homepage tile (square-ish, big title)
 *  - variant="compact"  ~120px thumbnail for a horizontal category row
 */
function CategoryCard({
  title,
  image,
  href,
  onClick,
  variant = 'tile',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const compact = variant === 'compact';
  const cfg = compact ? {
    width: '100%',
    height: 150,
    pad: 12,
    radius: 'var(--radius-md)',
    titleSize: 13,
    titleLh: 1.2,
    titleMt: 0,
    gap: 8
  } : {
    width: 286,
    height: 286,
    pad: 28,
    radius: 'var(--radius-lg)',
    titleSize: 22,
    titleLh: 1.15,
    titleMt: 4,
    gap: 18
  };
  const titleH = Math.ceil(cfg.titleSize * cfg.titleLh * 2);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: cfg.width,
      height: cfg.height,
      boxSizing: 'border-box',
      padding: cfg.pad,
      gap: cfg.gap,
      textDecoration: 'none',
      cursor: 'pointer',
      background: 'var(--surface-blue)',
      borderRadius: cfg.radius,
      border: hover ? '1px solid var(--border-subtle)' : '1px solid transparent',
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: cfg.titleMt,
      height: titleH,
      flex: '0 0 auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: cfg.titleSize,
      lineHeight: cfg.titleLh,
      letterSpacing: 'var(--ls-tight)',
      color: hover ? 'var(--cyan-500)' : 'var(--text-strong)',
      textAlign: 'center',
      transition: 'color var(--dur-fast)',
      wordBreak: 'break-word',
      overflowWrap: 'anywhere',
      hyphens: 'auto',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minHeight: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--dur-base)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: compact ? 11 : 13
    }
  }, "\u0424\u043E\u0442\u043E")));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/categories/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status / promo badge. The gold "promo" tone with a star icon
 * mirrors the brand's "Акция до 20 сентября" pill.
 */
function Badge({
  tone = 'promo',
  size = 'md',
  icon = null,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 11,
      padding: '4px 10px',
      gap: 5
    },
    md: {
      fontSize: 12,
      padding: '7px 14px',
      gap: 7
    }
  };
  const s = sizes[size] || sizes.md;
  const tones = {
    promo: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)'
    },
    primary: {
      background: 'var(--cyan-50)',
      color: 'var(--cyan-700)'
    },
    neutral: {
      background: 'var(--ink-100)',
      color: 'var(--ink-700)'
    },
    success: {
      background: 'var(--success-50)',
      color: 'var(--success-500)'
    },
    warning: {
      background: 'var(--warning-50)',
      color: 'var(--warning-500)'
    },
    danger: {
      background: 'var(--danger-50)',
      color: 'var(--danger-500)'
    },
    solid: {
      background: 'var(--cyan-500)',
      color: 'var(--white)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-text)',
      fontWeight: 'var(--fw-regular)',
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: s.padding,
      borderRadius: 'var(--radius-sm)',
      letterSpacing: '0.005em',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Medford primary action button.
 * Variants follow the brand: bright cyan for primary actions,
 * gold for promotional CTAs, outline/ghost for secondary.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '8px 16px',
      height: 36,
      radius: 'var(--radius-sm)',
      gap: 8
    },
    md: {
      fontSize: 16,
      padding: '12px 22px',
      height: 46,
      radius: 'var(--radius-sm)',
      gap: 10
    },
    lg: {
      fontSize: 18,
      padding: '15px 30px',
      height: 56,
      radius: 'var(--radius-sm)',
      gap: 12
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: 'var(--ls-normal)',
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    border: '1.5px solid transparent',
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--color-on-accent)'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--text-strong)',
      borderColor: '#D9D9D9',
      borderWidth: '1px'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-link)'
    },
    dark: {
      background: 'var(--ink-900)',
      color: 'var(--white)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--color-primary-hover)'
    },
    accent: {
      background: 'var(--gold-400)'
    },
    secondary: {
      borderColor: 'var(--cyan-500)',
      color: 'var(--cyan-500)'
    },
    ghost: {
      background: 'var(--cyan-50)'
    },
    dark: {
      background: 'var(--ink-800)'
    }
  }[variant] : {};
  const activeStyle = !disabled && active ? {
    transform: 'translateY(1px) scale(0.99)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...activeStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Outline icon buttons on the image tile (heart / compare), medford.ru style */
const TileGlyph = {
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M12 19.8C7.7 17 4 13.9 4 9.9 4 7.2 6 5 8.6 5c1.5 0 2.7.9 3.4 2 .7-1.1 1.9-2 3.4-2C18 5 20 7.2 20 9.9c0 4-3.7 7.1-8 9.9Z"
  }),
  compare: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "3.5",
    width: "17",
    height: "17",
    rx: "4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 15.5v-3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15.5V8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 15.5v-5"
  }))
};
const TileButton = ({
  name,
  onClick
}) => {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": name,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: 40,
      height: 40,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      color: h ? 'var(--cyan-600)' : 'var(--ink-400)',
      transition: 'color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, TileGlyph[name]));
};
const RatingGlyph = {
  star: /*#__PURE__*/React.createElement("path", {
    d: "M12 2.6l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 16.9 6.3 20l1.2-6.3L2.8 9.3l6.4-.8L12 2.6Z"
  }),
  comment: /*#__PURE__*/React.createElement("path", {
    d: "M12 3C6.9 3 3 6.4 3 10.7c0 2.3 1.1 4.3 2.9 5.7L5 21l4.6-2.2c.8.2 1.6.3 2.4.3 5.1 0 9-3.4 9-7.7S17.1 3 12 3Z"
  })
};
const RatingItem = ({
  icon,
  value
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    color: 'var(--ink-400)',
    fontSize: 15
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, RatingGlyph[icon]), value);

/**
 * Medford catalog product card (medford.ru design): light-gray image
 * tile with heart / compare buttons, price line («По запросу» or a
 * price), product name, rating counters, cyan «В корзину» button.
 * Set `horizontal` for the compact list layout.
 */
function ProductCard({
  image,
  name,
  price = 'По запросу',
  oldPrice,
  rating = 0,
  reviews = 0,
  ctaLabel = 'В корзину',
  onCta,
  onFavorite,
  onCompare,
  horizontal = false,
  style,
  ...rest
}) {
  const priceLine = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: horizontal ? 16 : 18,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, price), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, oldPrice));
  const nameLine = /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: horizontal ? 15 : 17,
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-strong)',
      textWrap: 'pretty',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, name);
  const ratingRow = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RatingItem, {
    icon: "star",
    value: rating
  }), /*#__PURE__*/React.createElement(RatingItem, {
    icon: "comment",
    value: reviews
  }));
  const tile = h => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-md)',
      height: h,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      flexShrink: 0
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      maxWidth: '80%',
      maxHeight: '88%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, "\u0424\u043E\u0442\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"), !horizontal && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(TileButton, {
    name: "heart",
    onClick: onFavorite
  }), /*#__PURE__*/React.createElement(TileButton, {
    name: "compare",
    onClick: onCompare
  })));
  if (horizontal) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        columnGap: 'var(--space-5)',
        background: 'var(--white)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)',
        padding: 'var(--space-4)',
        width: 380,
        boxSizing: 'border-box',
        fontFamily: 'var(--font-text)',
        ...style
      }
    }, rest), tile(150), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, priceLine, nameLine, ratingRow, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "primary",
      size: "sm",
      onClick: onCta
    }, ctaLabel))));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      width: 276,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, rest), tile(268), priceLine, nameLine, ratingRow, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Generic surface container — the base for catalog cards, panels, info blocks. */
function Card({
  padding = 'lg',
  tone = 'card',
  interactive = false,
  children,
  style,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const tones = {
    card: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    sunken: {
      background: 'var(--surface-blue)',
      border: '1px solid transparent'
    },
    brand: {
      background: 'var(--surface-brand)',
      border: '1px solid transparent',
      color: 'var(--white)'
    },
    invert: {
      background: 'var(--ink-900)',
      border: '1px solid transparent',
      color: 'var(--white)'
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-md)',
      padding: pads[padding],
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill-shaped filter / category tag. Active tags show a × to switch them off. */
function Tag({
  active = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-text)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 14,
      lineHeight: 1,
      padding: '7px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1.5px solid',
      borderColor: active ? 'var(--cyan-500)' : hover ? 'var(--ink-400)' : 'var(--border-default)',
      background: active ? 'var(--cyan-50)' : 'var(--white)',
      color: active ? 'var(--cyan-700)' : 'var(--text-body)',
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children, active && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    "aria-label": "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      color: 'currentColor',
      fontSize: 16,
      lineHeight: 1,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const cbId = id || React.useId();
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      color: 'var(--text-body)',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 22,
      height: 22,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: !isControlled ? defaultChecked : undefined,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--cyan-500)' : 'var(--border-strong)'}`,
      background: on ? 'var(--cyan-500)' : 'var(--white)',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 8.5l3 3 6-6.5",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, helper / error text. */
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  helper,
  error,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  suffix = null,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [iconHover, setIconHover] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger-500)' : focus || hover ? 'var(--cyan-500)' : 'var(--field-border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: disabled ? 'var(--ink-50)' : 'var(--field-bg)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      padding: '0 14px',
      height: 46,
      boxShadow: focus && !error ? `0 0 0 var(--ring-width) var(--ring-color)` : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      opacity: disabled ? 0.6 : 1
    },
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => setHover(false)
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setIconHover(true),
    onMouseLeave: () => setIconHover(false),
    style: {
      color: iconHover && !error ? 'var(--cyan-500)' : 'var(--ink-400)',
      display: 'inline-flex',
      transition: 'color var(--dur-fast)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-text)',
      fontSize: 16,
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-500)',
      fontSize: 14
    }
  }, suffix), iconRight && /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setIconHover(true),
    onMouseLeave: () => setIconHover(false),
    style: {
      color: iconHover && !error ? 'var(--cyan-500)' : 'var(--ink-400)',
      display: 'inline-flex',
      transition: 'color var(--dur-fast)'
    }
  }, iconRight)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Medford fields. */
function Select({
  label,
  value,
  defaultValue,
  onChange,
  options = [],
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 14,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 46,
      padding: '0 40px 0 14px',
      border: `1.5px solid ${focus ? 'var(--cyan-500)' : 'var(--field-border)'}`,
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--ink-50)' : 'var(--field-bg)',
      fontFamily: 'var(--font-text)',
      fontSize: 16,
      color: 'var(--text-strong)',
      appearance: 'none',
      WebkitAppearance: 'none',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? `0 0 0 var(--ring-width) var(--ring-color)` : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-500)',
      fontSize: 12
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** On/off toggle switch. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const swId = id || React.useId();
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      color: 'var(--text-body)',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: !isControlled ? defaultChecked : undefined,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--cyan-500)' : 'var(--ink-300)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Chevron = ({
  open
}) => /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  style: {
    flexShrink: 0,
    transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
    transition: 'transform var(--dur-base) var(--ease-standard)'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6 6-6"
}));
const HintDot = () => /*#__PURE__*/React.createElement("span", {
  title: "\u041C\u044B \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u043B\u0435\u0440 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0431\u0440\u0435\u043D\u0434\u043E\u0432",
  style: {
    width: 20,
    height: 20,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid var(--border-strong)',
    fontSize: 12,
    color: 'var(--text-muted)',
    cursor: 'help',
    flexShrink: 0
  }
}, "?");
function Section({
  section,
  open,
  onToggle,
  checked,
  onCheck
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textAlign: 'left',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      fontWeight: 'var(--fw-medium)',
      color: hover ? 'var(--cyan-600)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0
    }
  }, section.title), section.hint && /*#__PURE__*/React.createElement(HintDot, null), /*#__PURE__*/React.createElement(Chevron, {
    open: open
  })), open && section.options.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 16
    }
  }, section.options.map(o => /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    key: o,
    label: o,
    checked: !!checked[section.title + '|' + o],
    onChange: () => onCheck(section.title + '|' + o)
  }))));
}

/**
 * Catalog filter block (medford.ru sidebar) — flat, no card chrome.
 * Collapsible attribute sections («Бренд ?», «Класс», …) with checkbox
 * options. Pass `title` to show a «Фильтр» + «Сбросить» header row
 * (hidden by default, matching the site sidebar).
 */
function FilterPanel({
  title = null,
  resetLabel = 'Сбросить',
  onReset,
  sections = [],
  /** Titles of sections open by default */
  defaultOpen = [],
  width = 320,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const [checked, setChecked] = React.useState({});
  const [resetHover, setResetHover] = React.useState(false);
  const toggle = t => setOpen(s => {
    const n = new Set(s);
    n.has(t) ? n.delete(t) : n.add(t);
    return n;
  });
  const check = k => setChecked(c => ({
    ...c,
    [k]: !c[k]
  }));
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      width,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 20,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setChecked({});
      onReset && onReset();
    },
    onMouseEnter: () => setResetHover(true),
    onMouseLeave: () => setResetHover(false),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-text)',
      fontSize: 14,
      color: resetHover ? 'var(--cyan-600)' : 'var(--text-muted)',
      transition: 'color var(--dur-fast)'
    }
  }, resetLabel)), sections.map(s => /*#__PURE__*/React.createElement(Section, {
    key: s.title,
    section: s,
    open: open.has(s.title),
    onToggle: () => toggle(s.title),
    checked: checked,
    onCheck: check
  })));
}
Object.assign(__ds_scope, { FilterPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterPanel.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FootLink = ({
  children,
  href = '#',
  style
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      lineHeight: 'var(--lh-snug)',
      fontSize: 15,
      fontWeight: 'var(--fw-regular)',
      color: hover ? 'var(--cyan-600)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)',
      textWrap: 'pretty',
      ...style
    }
  }, children);
};
const ColHeading = ({
  children
}) => /*#__PURE__*/React.createElement("h3", {
  style: {
    margin: '0 0 var(--space-5)',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-bold)',
    fontSize: 17,
    letterSpacing: 'var(--ls-tight)',
    color: 'var(--text-strong)'
  }
}, children);
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  width: "10",
  height: "10",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6 6-6"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 12h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 6l6 6-6 6"
}));

/**
 * Medford site footer (structure of medford.ru):
 * subscribe band (email + arrow), then Связаться с нами (phone, email,
 * addresses, social icons) + four link columns, then copyright bar.
 */
function Footer({
  subscribeTitle = 'Подписаться\nна новости и акции',
  subscribePlaceholder = 'Ваш e-mail',
  onSubscribe,
  contactTitle = 'Связаться с нами',
  phone = '8 (499) 877-40-50',
  email = 'f@medford.ru',
  addresses = ['г. Москва, Ленинский пр-т, д.146', 'г. Екатеринбург ул. Малышева 51, офис 1907', 'г. Махачкала проспект Имама Шамиля 34г'],
  social = [],
  columns = [{
    title: 'Категории',
    links: ['Каталог', 'Акции', 'Бренды', 'Сервис', 'Оснащение медицинского кабинета']
  }, {
    title: 'Компания',
    links: ['О компании', 'Новости', 'Отзывы', 'Карьера', 'Лицензии', 'Реквизиты']
  }, {
    title: 'Информация',
    links: ['Кейсы', 'Статьи', 'Новости', 'Отзывы']
  }, {
    title: 'Помощь',
    links: ['Условия оплаты', 'Условия доставки', 'Гарантия на товар', 'Вопрос-ответ']
  }],
  copyright = '© 2026 Medford.ru',
  legalLinks = ['Конфиденциальность'],
  style,
  ...rest
}) {
  const [emailVal, setEmailVal] = React.useState('');
  const [fieldHover, setFieldHover] = React.useState(false);
  const [fieldFocus, setFieldFocus] = React.useState(false);
  const [arrowHover, setArrowHover] = React.useState(false);
  const [phoneHover, setPhoneHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--white)',
      fontFamily: 'var(--font-text)',
      color: 'var(--text-strong)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: 'minmax(220px, 1fr) 2fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      whiteSpace: 'pre-line',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 22,
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, subscribeTitle), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubscribe && onSubscribe(emailVal);
    },
    onMouseEnter: () => setFieldHover(true),
    onMouseLeave: () => setFieldHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 64,
      boxSizing: 'border-box',
      padding: '0 20px',
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${fieldFocus || fieldHover ? 'var(--cyan-500)' : 'var(--border-strong)'}`,
      transition: 'border-color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: subscribePlaceholder,
    value: emailVal,
    onChange: e => setEmailVal(e.target.value),
    onFocus: () => setFieldFocus(true),
    onBlur: () => setFieldFocus(false),
    style: {
      flex: 1,
      minWidth: 80,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-text)',
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
    onMouseEnter: () => setArrowHover(true),
    onMouseLeave: () => setArrowHover(false),
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      color: arrowHover ? 'var(--cyan-600)' : 'var(--text-muted)',
      transition: 'color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement(ArrowRight, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 0.9fr 0.9fr 0.9fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColHeading, null, contactTitle), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setPhoneHover(true),
    onMouseLeave: () => setPhoneHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      textDecoration: 'none',
      fontSize: 18,
      fontWeight: 'var(--fw-medium)',
      color: phoneHover ? 'var(--cyan-600)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)'
    }
  }, phone, /*#__PURE__*/React.createElement(Chevron, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(FootLink, {
    style: {
      fontSize: 16
    }
  }, email)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'disc',
      margin: 'var(--space-5) 0 0',
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 15,
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-strong)'
    }
  }, addresses.map(a => /*#__PURE__*/React.createElement("li", {
    key: a
  }, a))), social.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 'var(--space-8)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href || '#',
    title: s.label,
    "aria-label": s.label,
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: s.label,
    style: {
      width: 36,
      height: 36,
      display: 'block'
    }
  }))))), columns.map(col => /*#__PURE__*/React.createElement("nav", {
    key: col.title
  }, /*#__PURE__*/React.createElement(ColHeading, null, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, col.links.map((l, i) => /*#__PURE__*/React.createElement(FootLink, {
    key: col.title + '-' + i
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px var(--container-pad)',
      fontSize: 14,
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, copyright), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, legalLinks.map(l => /*#__PURE__*/React.createElement(FootLink, {
    key: l,
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ---- Phosphor (fill) UI glyphs ---- */
const I = {
  bolt: /*#__PURE__*/React.createElement("path", {
    d: "M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17Z"
  }),
  user: /*#__PURE__*/React.createElement("path", {
    d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8Z"
  }),
  chart: /*#__PURE__*/React.createElement("path", {
    d: "M224,200h-8V40a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8V80H104a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z"
  }),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"
  }),
  mic: /*#__PURE__*/React.createElement("path", {
    d: "M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V232a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z"
  }),
  search: /*#__PURE__*/React.createElement("path", {
    d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
  })
};
const Icon = ({
  d,
  size = 18,
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 256 256",
  fill: "currentColor",
  "aria-hidden": "true",
  style: style
}, d);
/* Outline icons matching medford.ru (stroke style, round caps) */
const O = {
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "3.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 20c1.2-3.4 3.6-5.2 6.5-5.2s5.3 1.8 6.5 5.2"
  })),
  compare: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "3.5",
    width: "17",
    height: "17",
    rx: "4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 15.5v-3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15.5V8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 15.5v-5"
  })),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M12 19.8C7.7 17 4 13.9 4 9.9 4 7.2 6 5 8.6 5c1.5 0 2.7.9 3.4 2 .7-1.1 1.9-2 3.4-2C18 5 20 7.2 20 9.9c0 4-3.7 7.1-8 9.9Z"
  }),
  cart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 5h2l2.2 10.3a1.6 1.6 0 0 0 1.6 1.2h7.6a1.6 1.6 0 0 0 1.6-1.2L20.6 8H7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10.4",
    cy: "19.8",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.4",
    cy: "19.8",
    r: "1.4"
  })),
  mic: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "9.2",
    y: "3.5",
    width: "5.6",
    height: "10",
    rx: "2.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 11.5a6 6 0 0 0 12 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17.5v3"
  })),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.8 15.8 20.5 20.5"
  }))
};
const OutlineIcon = ({
  name,
  size = 24,
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  style: style
}, O[name]);
const Chevron = ({
  size = 10
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6 6-6"
}));
const GridDots = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, [3, 12, 21].flatMap(y => [3, 12, 21].map(x => /*#__PURE__*/React.createElement("circle", {
  key: x + '-' + y,
  cx: x,
  cy: y,
  r: "2.2"
}))));
const HoverLink = ({
  children,
  href = '#',
  bold,
  size = 14,
  style
}) => {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      textDecoration: 'none',
      fontSize: size,
      fontWeight: bold ? 'var(--fw-medium)' : 'var(--fw-regular)',
      color: h ? 'var(--cyan-600)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
};

/**
 * Medford site header — three-tier top navigation.
 * Tier 1: utility nav (Акции … Контакты) + phone + «Заказать звонок».
 * Tier 2: logo + tagline, «Каталог» button, search (with catalog scope,
 *         mic, magnifier), account actions (Войти / Сравнение / Избранное / Корзина).
 * Tier 3: equipment category nav + brand pills (iLivTouch, Medford VET).
 */
function Header({
  logoSrc = '/assets/logo/medford-logo.svg',
  tagline = 'От поставки до бесперебойной\nработы медтехники',
  utilityItems = [{
    label: 'Акции',
    icon: 'bolt'
  }, {
    label: 'Сервис',
    chevron: true
  }, {
    label: 'Обучение'
  }, {
    label: 'Кейсы'
  }, {
    label: 'Статьи'
  }, {
    label: 'Комплексное оснащение'
  }, {
    label: 'Компания',
    chevron: true
  }, {
    label: 'Контакты'
  }],
  phone = '8 (499) 877-40-50',
  callbackLabel = 'Заказать звонок',
  onCallback,
  catalogLabel = 'Каталог',
  onCatalog,
  searchPlaceholder = 'Найти',
  searchScopeLabel = 'По каталогу',
  actions = [{
    label: 'Войти',
    icon: 'user'
  }, {
    label: 'Сравнение',
    icon: 'chart'
  }, {
    label: 'Избранное',
    icon: 'heart'
  }],
  cartLabel = 'Корзина',
  cartCount = 0,
  onCart,
  cartIconSrc = '/assets/icons/cart.svg',
  iconsBase = '/assets/icons/site',
  categories = ['УЗИ аппараты', 'НДА', 'ИВЛ', 'Жесткая эндоскопия', 'Гибкая эндоскопия', 'Хирургическое оборудование', 'Бренды'],
  pills = [{
    label: 'iLivTouch',
    background: 'var(--cyan-500)'
  }, {
    label: 'Medford VET',
    background: '#A55CE6'
  }],
  style,
  ...rest
}) {
  const [searchHover, setSearchHover] = React.useState(false);
  const [searchFocus, setSearchFocus] = React.useState(false);
  const [cartHover, setCartHover] = React.useState(false);
  const [actHover, setActHover] = React.useState(null);
  const [catHover, setCatHover] = React.useState(null);
  const actionItem = (label, icon, key, onClick, badge) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setActHover(key),
    onMouseLeave: () => setActHover(null),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      textDecoration: 'none',
      color: actHover === key ? 'var(--cyan-600)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      height: 24,
      alignItems: 'center'
    }
  }, icon, badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -7,
      right: -10,
      minWidth: 17,
      height: 17,
      padding: '0 4px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--cyan-500)',
      color: 'var(--white)',
      border: '2px solid var(--white)',
      fontSize: 10.5,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1
    }
  }, badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--fw-regular)',
      whiteSpace: 'nowrap'
    }
  }, label));
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: 'var(--white)',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '12px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5) var(--space-6)',
      flex: 1,
      flexWrap: 'wrap'
    }
  }, utilityItems.map(it => /*#__PURE__*/React.createElement(HoverLink, {
    key: it.label,
    size: 14
  }, it.icon === 'bolt' && /*#__PURE__*/React.createElement(Icon, {
    d: I.bolt,
    size: 15,
    style: {
      color: 'var(--cyan-500)'
    }
  }), it.label, it.chevron && /*#__PURE__*/React.createElement(Chevron, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(HoverLink, {
    bold: true,
    size: 15
  }, phone, /*#__PURE__*/React.createElement(Chevron, null)), /*#__PURE__*/React.createElement(HoverLink, {
    size: 14,
    style: {
      fontWeight: 'var(--fw-medium)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.preventDefault();
      onCallback && onCallback();
    }
  }, callbackLabel))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      flexShrink: 0,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Medford",
    style: {
      height: 44,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: '0 1 auto',
      minWidth: 0,
      whiteSpace: 'pre-line',
      maxWidth: 220,
      fontSize: 13,
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-muted)'
    }
  }, tagline), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    onClick: onCatalog,
    iconLeft: /*#__PURE__*/React.createElement(GridDots, null)
  }, catalogLabel), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setSearchHover(true),
    onMouseLeave: () => setSearchHover(false),
    style: {
      flex: '1 1 240px',
      minWidth: 170,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginRight: 'var(--space-2)',
      padding: '0 14px',
      height: 46,
      boxSizing: 'border-box',
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${searchFocus || searchHover ? 'var(--cyan-500)' : 'var(--border-strong)'}`,
      transition: 'border-color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: searchPlaceholder,
    onFocus: () => setSearchFocus(true),
    onBlur: () => setSearchFocus(false),
    style: {
      flex: 1,
      minWidth: 60,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      flexShrink: 0,
      fontSize: 14,
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, searchScopeLabel, /*#__PURE__*/React.createElement(Chevron, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(OutlineIcon, {
    name: "mic",
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: searchFocus || searchHover ? 'var(--cyan-600)' : 'var(--text-strong)',
      cursor: 'pointer',
      transition: 'color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement(OutlineIcon, {
    name: "search",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-6)',
      flexShrink: 0
    }
  }, actions.map(a => actionItem(a.label, /*#__PURE__*/React.createElement(OutlineIcon, {
    name: a.icon === 'chart' ? 'compare' : a.icon,
    size: 24
  }), a.label, a.onClick)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onCart && onCart();
    },
    onMouseEnter: () => setCartHover(true),
    onMouseLeave: () => setCartHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      textDecoration: 'none',
      color: cartHover ? 'var(--cyan-600)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      height: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(OutlineIcon, {
    name: "cart",
    size: 24
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -7,
      right: -10,
      minWidth: 17,
      height: 17,
      padding: '0 4px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--cyan-500)',
      color: 'var(--white)',
      border: '2px solid var(--white)',
      fontSize: 10.5,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1
    }
  }, cartCount)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--fw-regular)',
      whiteSpace: 'nowrap'
    }
  }, cartLabel))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-blue)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4) var(--space-6)',
      flex: 1,
      flexWrap: 'wrap'
    }
  }, categories.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c,
    href: "#",
    onMouseEnter: () => setCatHover(i),
    onMouseLeave: () => setCatHover(null),
    style: {
      textDecoration: 'none',
      fontSize: 15,
      fontWeight: 'var(--fw-regular)',
      whiteSpace: 'nowrap',
      color: catHover === i ? 'var(--cyan-600)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexShrink: 0
    }
  }, pills.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.label,
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 34,
      padding: '0 18px',
      borderRadius: 'var(--radius-pill)',
      background: p.background,
      color: 'var(--white)',
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 'var(--fw-medium)',
      whiteSpace: 'nowrap'
    }
  }, p.label))))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Catalog category block (medford.ru sidebar) — flat, no card chrome.
 * «Категория ˅» collapsible header; inside — «‹ Категория-родитель» with
 * a back chevron, then subcategories; the active one gets a light-gray
 * rounded highlight. Sub-subcategories indent one level deeper.
 */

const Chevron = ({
  dir = 'down'
}) => /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  style: {
    flexShrink: 0,
    transform: dir === 'down' ? 'none' : dir === 'right' ? 'rotate(-90deg)' : 'rotate(90deg)',
    transition: 'transform var(--dur-base) var(--ease-standard)'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6 6-6"
}));
function SubItem({
  label,
  active,
  depth = 0,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      boxSizing: 'border-box',
      padding: '9px 12px',
      marginLeft: depth * 16,
      borderRadius: 'var(--radius-sm)',
      background: active ? 'var(--surface-page)' : 'transparent',
      fontFamily: 'var(--font-text)',
      fontSize: 14,
      lineHeight: 1.3,
      fontWeight: 'var(--fw-regular)',
      color: !active && hover ? 'var(--cyan-600)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast), background var(--dur-fast)',
      textWrap: 'pretty'
    }
  }, label);
}
function SideMenu({
  title = 'Категория',
  items = [],
  defaultExpanded = 0,
  defaultActiveSub = null,
  width = 320,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(true);
  const [activeSub, setActiveSub] = React.useState(defaultActiveSub);
  const [headHover, setHeadHover] = React.useState(false);
  const [catHover, setCatHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    onMouseEnter: () => setHeadHover(true),
    onMouseLeave: () => setHeadHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      marginBottom: open ? 18 : 0,
      textAlign: 'left',
      fontFamily: 'var(--font-text)',
      fontSize: 16,
      fontWeight: 'var(--fw-medium)',
      color: headHover ? 'var(--cyan-600)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)'
    }
  }, title, /*#__PURE__*/React.createElement(Chevron, {
    dir: open ? 'down' : 'right'
  })), open && items.map((item, i) => {
    const hasChildren = item.children && item.children.length > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: item.label,
      style: {
        paddingLeft: 8
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      onMouseEnter: () => setCatHover(i),
      onMouseLeave: () => setCatHover(null),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        textDecoration: 'none',
        marginBottom: 8,
        fontFamily: 'var(--font-text)',
        fontSize: 15,
        fontWeight: 'var(--fw-medium)',
        color: catHover === i ? 'var(--cyan-600)' : 'var(--text-strong)',
        transition: 'color var(--dur-fast)',
        textWrap: 'pretty'
      }
    }, /*#__PURE__*/React.createElement(Chevron, {
      dir: "left"
    }), item.label), hasChildren && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        paddingLeft: 16
      }
    }, item.children.map((sub, si) => {
      const label = typeof sub === 'string' ? sub : sub.label;
      const nested = typeof sub === 'object' && sub.children ? sub.children : null;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: si
      }, /*#__PURE__*/React.createElement(SubItem, {
        label: label,
        active: activeSub === si,
        onClick: () => setActiveSub(si)
      }), nested && nested.map((n, j) => /*#__PURE__*/React.createElement(SubItem, {
        key: si + '-' + j,
        label: n,
        depth: 1,
        onClick: () => setActiveSub(si)
      })));
    })));
  }));
}
Object.assign(__ds_scope, { SideMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CatalogSidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Full catalog sidebar (medford.ru): flat one-column block —
 * «Категория» menu on top, filter sections directly below.
 */
function CatalogSidebar({
  width = 320,
  menuTitle = 'Категория',
  items = [],
  defaultExpanded = 0,
  defaultActiveSub = null,
  filterTitle = null,
  sections = [],
  defaultOpen = [],
  onReset,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.SideMenu, {
    title: menuTitle,
    items: items,
    defaultExpanded: defaultExpanded,
    defaultActiveSub: defaultActiveSub,
    width: width
  }), /*#__PURE__*/React.createElement(__ds_scope.FilterPanel, {
    title: filterTitle,
    sections: sections,
    defaultOpen: defaultOpen,
    onReset: onReset,
    width: width
  }));
}
Object.assign(__ds_scope, { CatalogSidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CatalogSidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CatalogSidebar = __ds_scope.CatalogSidebar;

__ds_ns.FilterPanel = __ds_scope.FilterPanel;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.SideMenu = __ds_scope.SideMenu;

})();
