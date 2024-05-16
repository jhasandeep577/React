export default function customButton({ name, funct }) {
  return (
    <>
      <button onClick={funct}>{name}</button>
    </>
  );
}
