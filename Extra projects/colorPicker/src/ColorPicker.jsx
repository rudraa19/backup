import React, { useState, useRef, useCallback } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");
    const colorInputRef = useRef(null);

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    const copyColorToClipboard = useCallback(() => {
        if (colorInputRef.current) {
            colorInputRef.current.value = color;
            colorInputRef.current.select();
            document.execCommand("copy");
            alert(`Copied color: ${color}`); 
        }
    }, [color]);

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color, cursor: 'pointer' }} onClick={copyColorToClipboard}>
                <p>Selected color: {color.toUpperCase()}</p>
            </div>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange} />
            <input
                type="text"
                ref={colorInputRef}
                readOnly
                style={{ position: "absolute", left: "-9999px" }}
            />
        </div>
    );
}

export default ColorPicker;
