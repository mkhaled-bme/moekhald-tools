export default function XComponent({ colored = true }) {
    return <div className={`font-monoton ${colored ? 'text-teal-500' : ''}`}>X</div>;
}
