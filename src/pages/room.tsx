import { useParams } from "react-router-dom";

export function Room() {
  const { roomID } = useParams();
  console.log(roomID);
  return <div>room: {roomID}</div>;
}
