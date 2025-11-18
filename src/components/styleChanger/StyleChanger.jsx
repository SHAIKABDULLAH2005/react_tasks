import React, { useState } from "react";
export default function StyleChanger() {
    const [style, setStyle] = useState({
        fontSize: "16px",
        textAlign: "left",
        color: "black",
        backgroundColor: "lightgray",
    });

    const handleStyleChange = (property, value) => {
        setStyle((prev) => ({ ...prev, [property]: value }));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Dynamic Style Changer</h2>
            <select
                onChange={(e) => {
                    const choice = e.target.value;
                    if (choice === "font")
                        handleStyleChange("fontSize", "30px");
                    if (choice === "align")
                        handleStyleChange("textAlign", "center")
                    if (choice === "color")
                        handleStyleChange("color", "blue")
                    if (choice === "background")
                        handleStyleChange("backgroundColor", "yellow");

                }}
            >
                <option value="font">Change Font Size</option>
                <option value="align">Change Text Alignment</option>
                <option value="color">Change Text Color</option>
                <option value="background">Change Background Color</option>
            </select>
            <div style={{
                marginTop: "20px",
                padding: "20px",
                border: "1px solid black",
                ...style,
            }}>
                This is the styled div!
            </div>
        </div>
    );
}