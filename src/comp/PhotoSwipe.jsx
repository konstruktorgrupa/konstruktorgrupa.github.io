import { useState } from "react";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

const imageWH2 = {
  1: [1080, 1440],
  2: [1440, 1080],
  3: [1080, 1440],
  4: [720, 960],
  5: [720, 960],
  6: [960, 720],
  7: [960, 720],
  8: [960, 720],
  9: [960, 720],
  10: [960, 720],
  11: [960, 720],
  12: [960, 720],
  13: [960, 720],
  14: [720, 960],
  15: [720, 960],
  16: [720, 960],
  17: [720, 960],
  18: [720, 960],
  19: [720, 960],
  20: [960, 720],
  21: [720, 960],
  22: [960, 720],
  23: [720, 960],
  24: [720, 960],
  25: [720, 960],
  26: [1080, 1440],
  27: [720, 960],
  28: [720, 960],
  29: [720, 960],
  30: [720, 960],
  31: [720, 960],
  32: [720, 960],
  33: [720, 960],
  34: [720, 960],
  35: [720, 960],
  36: [720, 960],
  37: [720, 960],
  38: [720, 960],
  39: [960, 720],
  40: [1080, 1440],
  41: [720, 960],
  42: [720, 960],
  43: [960, 720],
  44: [960, 720],
  45: [1080, 1440],
  46: [720, 960],
  47: [720, 960],
  48: [720, 960],
  49: [720, 960],
  50: [720, 960],
  51: [720, 960],
  52: [1440, 1080],
  53: [1080, 1440],
  54: [720, 960],
  55: [720, 960],
  56: [720, 960],
  57: [720, 960],
  58: [720, 960],
  59: [720, 960],
  60: [720, 960],
  61: [720, 960],
  62: [720, 960],
  63: [720, 960],
  64: [960, 720],
  65: [960, 720],
  66: [720, 960],
  67: [720, 960],
  68: [960, 720],
  69: [960, 720],
  70: [720, 960],
  71: [720, 960],
  72: [960, 720],
  73: [720, 960],
  74: [720, 960],
  75: [960, 720],
  76: [960, 720],
  77: [960, 720],
  78: [720, 960],
  79: [720, 960],
  80: [1440, 1080],
  81: [720, 960],
  82: [720, 960],
  83: [720, 960],
  84: [720, 960],
  85: [960, 720],
  86: [960, 720],
  87: [720, 960],
  88: [720, 960],
  89: [960, 720],
  90: [720, 960],
  91: [720, 960],
  92: [720, 960],
  93: [960, 720],
  94: [720, 960],
  95: [960, 720],
  96: [720, 960],
  97: [960, 720],
  98: [960, 720],
  99: [960, 720],
  100: [720, 960],
  101: [960, 720],
  102: [960, 720],
  103: [960, 720],
  104: [960, 720],
  105: [960, 720],
  106: [960, 720],
  107: [960, 720],
  108: [960, 720],
  109: [960, 720],
  110: [960, 720],
  111: [720, 960],
  112: [960, 720],
  113: [960, 720],
  114: [960, 720],
  115: [720, 960],
  116: [720, 960],
  117: [960, 720],
  118: [720, 960],
  119: [720, 960],
  120: [720, 960],
  121: [1511, 2015],
  122: [720, 960],
  123: [720, 960],
  124: [1280, 960],
  125: [1511, 2015],
  126: [960, 720],
  127: [960, 720],
  128: [720, 960],
  129: [720, 960],
  130: [1090, 1090],
  131: [1511, 2015],
  132: [1440, 1080],
  133: [1440, 960],
  134: [960, 720],
  135: [960, 720],
  136: [1511, 2015],
  137: [1224, 918],
  138: [918, 1224],
  139: [1224, 918],
  140: [1224, 918],
  141: [918, 1224],
  142: [1224, 918],
  143: [1224, 918],
  144: [720, 960],
  145: [720, 960],
  146: [960, 720],
  147: [960, 720],
  148: [960, 720],
  149: [960, 720],
  150: [720, 960],
  151: [960, 720],
  152: [720, 960],
  153: [720, 960],
  154: [720, 960],
  155: [720, 960],
  156: [720, 960],
  157: [720, 960],
  158: [720, 960],
  159: [960, 720],
  160: [1511, 2015],
  161: [720, 960],
  162: [720, 960],
  163: [720, 960],
  164: [520, 960],
  165: [720, 960],
  166: [720, 960],
  167: [720, 960],
  168: [720, 960],
  169: [960, 720],
  170: [960, 720],
  171: [960, 720],
  172: [960, 720],
  173: [960, 720],
  174: [720, 960],
  175: [960, 720],
  176: [720, 960],
  177: [720, 960],
  178: [720, 960],
  179: [1511, 2015],
  180: [1511, 2015],
  181: [1511, 2015],
  182: [720, 960],
  183: [720, 960],
  184: [720, 960],
  185: [720, 960],
  186: [720, 960],
  187: [720, 960],
  188: [720, 960],
  189: [960, 720],
  190: [960, 720],
  191: [720, 960],
  192: [720, 960],
  193: [720, 960],
  194: [960, 720],
  195: [960, 720],
};

let imagesWH = {};
let images = [];
function WidthHeight(imgSrc, i) {
  const img = new Image();
  img.onload = function () {
    imagesWH[i] = [img.width, img.height];
    console.log(
      "🚀 ~ file: PhotoSwipe.jsx:32 ~ WidthHeight ~ imagesWH",
      imagesWH
    );
  };
  img.src = imgSrc;
}

for (let i = 195; i > 0; i--) {
  //GET IMAGES HEIGHT/WIDTH
  // const widHei = WidthHeight(`./assets/galerija/${i}.jpg`, i);

  images.push(
    <Item
      original={`./assets/galerija/${i}.jpg`}
      thumbnail={`./assets/galerijaThumbs/${i}.png`}
      width={imageWH2[i][0]}
      height={imageWH2[i][1]}
      key={i}
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src={`./assets/galerijaThumbs/${i}.png`}
        />
      )}
    </Item>
  );
}

export const MyGallery = () => <Gallery>{images}</Gallery>;