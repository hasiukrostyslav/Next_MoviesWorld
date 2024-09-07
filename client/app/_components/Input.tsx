interface InputProps {
  labelText: string;
  type: 'text' | 'email' | 'password';
  inputName: string;
  errorMessage: string;
}

function Input({ labelText, type, inputName, errorMessage }: InputProps) {
  return (
    <div className="relative pb-6 pt-1">
      <label className="flex flex-col gap-1 text-sm font-semibold">
        {labelText}
        <input
          type={type}
          name={inputName}
          className="rounded-md border-2 border-slate-300 px-3 py-2 text-sm outline-0 ring-blue-500 focus:border-transparent focus-visible:ring-4 dark:border-transparent dark:bg-slate-800"
        />
      </label>
      <span className="absolute bottom-1 left-2 text-xs font-bold text-red-400 dark:text-red-500">
        {errorMessage}
      </span>
    </div>
  );
}

export default Input;
