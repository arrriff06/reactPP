export default function Header(props)
{
  return(
  <div>
    <h1> Name: {props.name} {props.age}</h1>
    <h2>Age: {props.age}</h2>
    </div>)
}