import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-pink p-3 rounded-lg flex justify-between items-end ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 block">
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none text-black w-full bg-gray-100 rounded-lg px-2 py-1"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/2 flex flex-col items-end">
        <p className="text-black mb-2">Currency</p>

        <select
          className=" rounded-lg px-2 py-1 bg-black cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;