export default function Button({ btntype, onClick }) {
    return (
        <>
            <button className="bg-blue-600 w-full p-3 font-bold text-white rounded-lg mb-8" onClick={onClick}>{btntype}</button>
        </>
    )
}