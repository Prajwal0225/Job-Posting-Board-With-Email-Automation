export default function FormHeading({ heading, subheading }) {
    return (
        <>
            <h2 className="text-2xl text-center font-bold underline mb-3">{heading}</h2>
            <h3 className="text-xl text-center font-light pb-8">{subheading}</h3>

        </>
    )
}