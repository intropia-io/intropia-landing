import { InputHTMLAttributes, useState } from "react";

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: () => void;
}

const Toggle: React.FC<ToggleProps> = ({
  onChange,
  defaultChecked,
  ...rest
}) => {
  const [enabled, setEnabled] = useState(defaultChecked || false);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
            {...rest}
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
              onChange && onChange();
            }}
            className="w-[36px] h-5 bg-gray-200 rounded-[200px] peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"
          ></div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
