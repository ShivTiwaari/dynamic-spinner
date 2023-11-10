export default function Piece({ rotation, count, pieceCount, label }) {
  let i = 0;
  const dataObj = {
    4: [100, 0],
    5: [72.8, 13.7],
    6: [57.7, 21.1],
    7: [48, 26],
    8: [41.45, 29.3],
    9: [36.45, 31.8],
    10: [32.5, 33.8],
    11: [29.4, 35.4],
    12: [26.8, 36.7],
    13: [24.65, 37.7],
    14: [22.9, 38.6],
    15: [21.15, 39.4],
    16: [20, 40],
    17: [18.8, 40.6],
    18: [17.7, 41.2],
    19: [16.7, 41.7],
    20: [15.85, 42.1],
    21: [15.1, 42.5],
    22: [14.4, 42.8],
    23: [13.8, 43],
    24: [13.2, 43.35],
    25: [12.65, 43.75],
    26: [12.2, 43.9],
    27: [11.68, 44],
    28: [11.3, 44.4],
    29: [10.88, 44.8],
    30: [10.5, 45],
    31: [10.17, 45],
    32: [9.88, 45.2],
    33: [9.6, 45.2],
    34: [9.25, 45.45],
    35: [9, 45.54],
    36: [8.8, 45.75],
    37: [8.5, 45.85],
    38: [8.28, 45.92],
    39: [8.1, 46],
    40: [7.9, 46.1],
    41: [7.67, 46.3],
    42: [7.5, 46.3],
    43: [7.35, 46.4],
    44: [7.2, 46.4],
    45: [7, 46.4],
    46: [6.9, 46.6],
    47: [6.85, 46.7],
    48: [6.55, 46.8],
    49: [6.45, 46.9],
    50: [6, 47],
  };
  let colorArr = [
    "rgba(19, 65, 134, 0.5)",
    "rgba(74, 158, 91, 0.5)",
    "rgba(2, 28, 37, 0.5)",
    "rgba(167, 35, 184, 0.5)",
    "rgba(202, 202, 76, 0.5)",
    "rgba(80, 159, 173, 0.5)",
    "rgba(90, 252, 122, 0.5)",
    "rgba(167, 52, 28, 0.5)",
    "rgba(179, 61, 226, 0.5)",
    "rgba(147, 240, 112, 0.5)",
    "rgba(121, 230, 56, 0.5)",
    "rgba(41, 213, 7, 0.5)",
    "rgba(189, 20, 192, 0.5)",
    "rgba(118, 108, 174, 0.5)",
    "rgba(91, 13, 19, 0.5)",
    "rgba(202, 69, 201, 0.5)",
    "rgba(144, 217, 122, 0.5)",
    "rgba(156, 84, 74, 0.5)",
    "rgba(115, 29, 70, 0.5)",
    "rgba(191, 73, 35, 0.5)",
    "rgba(136, 217, 60, 0.5)",
    "rgba(219, 2, 168, 0.5)",
    "rgba(84, 154, 177, 0.5)",
    "rgba(24, 137, 159, 0.5)",
    "rgba(167, 82, 183, 0.5)",
    "rgba(131, 68, 181, 0.5)",
    "rgba(11, 172, 3, 0.5)",
    "rgba(124, 247, 176, 0.5)",
    "rgba(150, 161, 227, 0.5)",
    "rgba(6, 160, 86, 0.5)",
    "rgba(63, 184, 44, 0.5)",
    "rgba(23, 187, 27, 0.5)",
    "rgba(232, 53, 111, 0.5)",
    "rgba(7, 134, 48, 0.5)",
    "rgba(103, 75, 49, 0.5)",
    "rgba(177, 145, 232, 0.5)",
    "rgba(251, 161, 70, 0.5)",
    "rgba(117, 152, 153, 0.5)",
    "rgba(16, 187, 42, 0.5)",
    "rgba(133, 243, 1, 0.5)",
    "rgba(233, 159, 62, 0.5)",
    "rgba(52, 199, 184, 0.5)",
    "rgba(189, 124, 213, 0.5)",
    "rgba(186, 190, 234, 0.5)",
    "rgba(55, 214, 202, 0.5)",
    "rgba(141, 88, 160, 0.5)",
    "rgba(17, 112, 94, 0.5)",
    "rgba(190, 45, 232, 0.5)",
    "rgba(137, 248, 92, 0.5)",
    "rgba(179, 203, 79, 0.5)",
  ];
  return (
    <div
      className="piece"
      style={{
        height: `${dataObj[pieceCount][0]}%`,
        top: `${dataObj[pieceCount][1]}%`,
        transform: `rotate(${rotation * (360 / count)}deg)`,
        zIndex: `${rotation}`,
        backgroundColor: colorArr[label],
      }}
    >
      <h1>{label}</h1>
    </div>
  );
}
