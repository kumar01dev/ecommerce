import React from 'react'

function SortSelect({onSort, currentSort}) {

    return (
        <select 
            value={currentSort}
            onChange={(e) => onSort(e.target.value)}
            className="p-2 border rounded-md ml-auto"
        >
            <option value="featured">Featured</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="newest">Newest</option>
        </select>
    )
}

export default SortSelect;