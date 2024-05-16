export default function textField({
  type,
  label,
  placeholder,
  readonly,
  name,
  id,
  value,
  funct,
  min,
  max,
  ref,
}) {
  return (
    <>
      <input
        type={type}
        label={label}
        placeholder={placeholder}
        readOnly={readonly}
        name={name}
        id={id}
        value={value}
        min={min}
        max={max}
        onChange={funct}
        ref={ref}
      />
    </>
  );
}
