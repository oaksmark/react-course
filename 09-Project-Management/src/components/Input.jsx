import { forwardRef } from "react";
const Input = forwardRef(function Input({ ...props }, ref) {
  return (
    <div className="mt-12 text-left w-2/3">
      <label className="text-sm font-bold uppercase text-stone-500">
        {props.label}
      </label>
      {props.textarea?
      <textarea
        ref={ref}
        {...props}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
     />:
     <input
        ref={ref}
        {...props}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
     />}
    </div>
  );
});
export default Input;
