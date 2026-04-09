function Filter({ search, setSearch, sortBy, setSortBy }) {
    return (
        <div className="flex gap-4 mb-4">
            <input
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1"
            />
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
                <option value="name">Name</option>
                <option value="playtime">Playtime</option>
                <option value="completed">Completion</option>
            </select>
        </div>
    );
}

export default Filter;