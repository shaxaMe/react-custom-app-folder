interface UIButtonProps {
  label?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick?: () => void
}

function Button({ label, className, disabled, type, children,onClick }: UIButtonProps) {
  return <button onClick={onClick} className={`bg-white btn-sm text-xs font-semibold flex items-center px-4 gap-1 rounded-lg border border-[#d5d7da] py-3 transition-all duration-300 ease-linear ${className} ${disabled ? "!cursor-not-allowed" : ""}`} disabled={disabled} type={type}>
    {children || label}
  </button>
}

export default Button;
