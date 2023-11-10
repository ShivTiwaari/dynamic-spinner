import Piece from "./Piece";

export default function Wheel({ array }) {
  //console.log("array from wheel.jsx => ", array);
  return (
    <>
      {array.map((i) => (
        <Piece
          key={i}
          rotation={array.indexOf(i) + 1}
          count={array.length}
          pieceCount={array.length}
          label={i}
        />
      ))}
    </>
  );
}
