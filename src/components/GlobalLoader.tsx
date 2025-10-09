export const GlobalLoader = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
            <div className="text-center">
                <div role="status"
                     className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading...</p>
            </div>
        </div>
    );
};