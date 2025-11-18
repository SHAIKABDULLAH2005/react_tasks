import React, { useState } from "react";
export default function CategorySearch() {
    const data = {
        fruits: ["Apple", "Banana", "Orange", "Cherry"],
        cars: ["BMW", "Ferrari", "Audi", "Porche"],
        colors: ["Red", "Blue", "Green", "Yellow"]
    };
    const [category, setCategory] = useState("");
    const [selectCategory, setSelectCategory] = useState("");
    const [item, setItem] = useState("");

    const categoryKeys = Object.keys(data);
    return (
        <div style={{ padding: "20px" }}>
            <h2>Category Search System</h2>
            {/* Search bar-1 */}
            <input type="text"
                placeholder="Search Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)} />
            {/* Category Suggestions */}
            {category && (
                <div>
                    {categoryKeys.filter((key) => key.toLowerCase().includes(category.toLowerCase()))
                        .map((key) => (
                            <p
                                key={key}
                                style={{ cursor: "pointer", color: "blue" }}
                                onClick={() => {
                                    setSelectCategory(key);
                                    setCategory(key);
                                }}
                            >
                                {key}
                            </p>
                        ))}
                </div>
            )}
            {/* Search Bar-2 */}
            <input type="text" placeholder="Search Item" value={item} onChange={(e) =>
                setItem(e.target.value)}
                disabled={!selectCategory}
            />
            {/* Item Suggestion */}
            {item && selectCategory && (
                <div>
                    {data[selectCategory]
                        .filter((val) =>
                            val.toLowerCase().includes(item.toLowerCase()))
                        .map((val) => (
                            <p key={val}
                                style={{ cursor: "pointer", color: "green" }}
                                onClick={() => setItem(val)}
                            >
                                {val}
                            </p>
                        ))
                    }
                </div>
            )}

        </div>
    );
}