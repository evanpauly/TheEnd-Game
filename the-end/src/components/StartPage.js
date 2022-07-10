import React, { useState } from 'react';
import Home from './Home'

export default function StartPage() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        return <Home />;
        }

        const handlePageChange = (page) => setCurrentPage(page);


return (
    <div>
        <main>
            <Home currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </main>
    </div>
);
}