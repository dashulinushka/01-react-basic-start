export default function Technologies ({title, description}) {
  return (
    <li>
        <p>
          <strong>{title}</strong> {description}
        </p>
    </li>
  )
}
//function Technologies (props) {
//<strong>{props.title}</strong> {props.description}