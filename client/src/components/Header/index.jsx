import travelbuddy from "../../assets/images/travelbuddy.png";

export default function Header(props) {
  return (
    <header>
      <img src={travelbuddy} alt="Logo" />
      {props.children}
    </header>
  );
}
