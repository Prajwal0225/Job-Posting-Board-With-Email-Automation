

export default function Formbox({ children }) {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-1/3 border border-black p-16 mt-5 rounded-xl">
                {children}
            </div>
        </div>
    )
}