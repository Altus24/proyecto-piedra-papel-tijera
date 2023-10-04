import Logica from "./Juego";

export default function Botones({ name }) {
  return (
    <button
      onClick={(e) => {
        Logica(name);
      }}
    >
      {name}
    </button>
  );
}
