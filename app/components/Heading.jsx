export default function Heading({ text, align }) {
    return (
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-left md:text-center">{text}</h2>
    )
}