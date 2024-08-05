import React, { useState, useEffect } from "react";

function App() {
    const [image, setImage] = useState();

    // Fetching image
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setImage(data.message)); // message is the property that is being returned
    }, []);

    // Conditional rendering to show loading message
    if (!image) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <img src={image} alt="A Random Dog" />
        </div>
    );
}

export default App;
