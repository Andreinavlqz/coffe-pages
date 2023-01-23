import React from 'react';
import './menu.css'

const CategoryFilter = ({ categories, onFilterChange }) => {
    return (
        <div className="category-filter">
            <label>
                Filtrar por categoría:
                <select onChange={(e) => onFilterChange(e.target.value)}>
                    <option value={null}>Todos</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default CategoryFilter;