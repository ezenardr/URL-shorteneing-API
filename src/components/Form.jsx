import { useState } from 'react';

function Form() {
    const [links, setLinks] = useState([]);
    const [inputValue, setInputValue] = useState('https://');
    const [isValidUrl, setIsValidUrl] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValidUrl) {
            const url = inputValue.startsWith('http')
                ? inputValue
                : `https://${inputValue}`; // add https prefix if not present
            fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
                .then((response) => response.json())
                .then((data) => {
                    setLinks([...links, data.result]); // add the new link to the existing array of links
                    setInputValue('https://'); // clear the input field
                })
                .catch((error) => console.error(error));
        }
    };

    const handleInputChange = (event) => {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; // regular expression pattern to match a URL
        setInputValue(event.target.value);
        setIsValidUrl(urlPattern.test(event.target.value)); // set isValidUrl to true if the input value matches the URL pattern
    };
    const handleCopyLink = (event, shortLink) => {
        navigator.clipboard
            .writeText(shortLink)
            .then(() => {
                event.target.innerText = 'Copied!';
                setTimeout(() => {
                    event.target.innerText = 'Copy';
                }, 1000);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className=" bg-primary_dark bg-cover p-6 lg:p-10 flex flex-col lg:flex-row gap-5 rounded-xl"
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{
                        border: isValidUrl
                            ? '1px solid black'
                            : '1px solid red',
                    }} // set border color based on input validity
                    className="p-3 rounded-lg font-bold lg:flex-1"
                />

                <button
                    type="submit"
                    disabled={!isValidUrl}
                    className="py-3 lg:px-10 bg-primary text-white rounded-lg"
                >
                    Shorten It!
                </button>
                {/* disable the button if the input value is not a valid URL */}
            </form>
            {!isValidUrl && (
                <p className="text-sm text-red-500">Please enter a valid URL</p>
            )}
            <ul>
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="flex flex-col lg:flex-row items-start justify-between lg:items-center bg-white p-5 mt-5 rounded-lg"
                    >
                        <p className="font-bold border-b lg:border-none text-left pb-2 w-[100%]">
                            {link.original_link}
                        </p>
                        <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-auto items-center pt-3">
                            <p className="text-primary self-start lg:self-center">
                                {link.full_short_link}
                            </p>
                            <button
                                className="py-2 lg:px-10 w-full lg:w-auto bg-primary text-white rounded-lg"
                                onClick={(event) =>
                                    handleCopyLink(event, link.full_short_link)
                                }
                            >
                                Copy
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Form;
