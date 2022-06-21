// const nr = 15
//
const toHex = (r, g, b) => {
  const rounded = (nr) => {
    if (nr > 255) {
      nr = "255";
      return nr;
    } else if (nr < 0) {
      nr = "00";
      return nr;
    } else if (nr >= 0 && nr < 16) {
      nr = "0" + nr.toString(16).toUpperCase();
      return nr;
    } else return nr.toString(16).toUpperCase();
  };
  var p = rounded(r);
  var s = rounded(g);
  var t = rounded(b);

  var hexaColor = p + s + t;
  // console.log(p, s, t, hexaColor)
  return hexaColor;
};

toHex(0, 255, 254);






// OTHER SOLUTIONS
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
}

//
function rgb1(r, g, b) {
  return [r, g, b]
    .map(function (x) {
      return ("0" + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    })
    .join("")
    .toUpperCase();
}
