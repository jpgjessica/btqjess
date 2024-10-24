export function Button({content, className, onClick = () => {}}) {
  return (
    <button
      className={`rounded-b-md bg-black p-3 text-white hover:bg-amber-500 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
