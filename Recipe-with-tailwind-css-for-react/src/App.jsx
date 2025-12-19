function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm">
        <img
          src="https://source.unsplash.com/400x250/?food"
          alt="Recipe"
          className="rounded-lg mb-4"
        />

        <h1 className="text-2xl font-bold text-orange-600 text-center">
          Spaghetti Bolognese
        </h1>

        <p className="text-gray-600 mt-2">
          A classic Italian pasta recipe perfect for beginners.
        </p>

        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li>Pasta</li>
          <li>Tomatoes</li>
          <li>Minced Beef</li>
          <li>Onion</li>
        </ul>

        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default App;