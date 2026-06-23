import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {

const [showButton, setShowButton] = useState(false);

useEffect(() => {
const handleScroll = () => {
if (window.scrollY > 400) {
setShowButton(true);
} else {
setShowButton(false);
}
};

window.addEventListener("scroll", handleScroll);

return () => {
window.removeEventListener("scroll", handleScroll);
};
}, []);


const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};


return (
<>
{showButton && (
<button
onClick={scrollToTop}
className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
aria-label="Back to top"
>
<FaArrowUp />
</button>
)}
</>
);
}

export default BackToTop;