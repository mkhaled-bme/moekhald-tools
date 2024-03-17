export default function OComponent({ colored = true }) {
    return <div className={`font-monoton ${colored ? 'text-yellow-500' : ''}`}>O</div>;
}
