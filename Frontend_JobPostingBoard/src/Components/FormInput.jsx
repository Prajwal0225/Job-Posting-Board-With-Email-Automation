export default function FormInput({ inputfield, onChange, type }) {
    return (
        <>
            <input className="p-2 w-full mb-4 border border-blue-200 rounded-lg bg-slate-100" onChange={onChange} type={type} placeholder={inputfield} />
        </>
    )
}