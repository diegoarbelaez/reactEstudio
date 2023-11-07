import React, { useState, useEffect } from "react";

export default function TextAutocompletar({
  pholder,
  data,
  onSelected,
  onChange,
  className,
}) {
  const [suggestions, setSugesstions] = useState([]);
  const [isHideSuggs, setIsHideSuggs] = useState(true);
  const [selectedVal, setSelectedVal] = useState("");

  const handler = (e) => {
    setSugesstions(data.filter((i) => i.includes(e.target.value)));
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setIsHideSuggs(false);
    setSelectedVal(input);
    onChange(input);
  };

  const hideSuggs = (value) => {
    onSelected(value);
    setSelectedVal(value);
    setIsHideSuggs(true);
  };

  const ocultarSugerencias = (e) => {
    setIsHideSuggs(true);
  };

  return (
    <>
      <input
        className={className}
        placeholder={pholder}
        type="search"
        value={selectedVal}
        onChange={handleChange}
        onKeyUp={handler}
        onClick={(e) => {
          ocultarSugerencias(e);
        }}
      />
      <div className="sugesstion-auto">
        <div
          className="suggestions"
          style={{ display: isHideSuggs ? "none" : "block" }}
        >
          {!isHideSuggs ? (
            <button className="cerrar" onClick={ocultarSugerencias}>
              Ocultar
            </button>
          ) : null}
          {suggestions.map((item, idx) => (
            <div
              className={"" + item + idx}
              key={crypto.randomUUID()}
              onClick={() => {
                hideSuggs(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
