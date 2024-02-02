//@
import Key from '../../../public/key.svg'
import Heart from '../../../public/heart.svg'
import Logo from './Logo'

class Person {
  constructor(public name:string, public age:number) {}
}
export default function GonGons() {

  const gons = [
    <Logo fillColor={"red"} style={{fill: 'rgb(256, 256, 0)', stroke: 'rgb(0, 0, 0)'}}/>,
    <Key width="48" height="48"/>, 
    <Heart width="48" height="48" fill="blue" stroke="purple" strokeWidth="5"/>, 
    <Key width={48} height={48}/>,
    <Heart width={48} height={48} fill="pink" stroke="red" strokeWidth="10"/>,
    <Logo fillColor={"red"} style={{}} />,
    <Key width="48" height="48"/>, 
    <Heart width="48" height="48"/>, 
    <Logo fillColor={"red"} style={{fill: 'rgb(256, 256, 0)', stroke: 'rgb(0, 0, 0)'}}/>,
    <Key width={48} height={48}/>,
    <Heart width={48} height={48} fill="pink" stroke="red" strokeWidth="10"/>,
    <Logo fillColor={"red"} style={{}} />,
    <Key width="48" height="48"/>, 
    <Heart width="48" height="48"/>, 
    <Logo fillColor={"red"} style={{fill: 'rgb(256, 256, 0)', stroke: 'rgb(0, 0, 0)'}}/>,
    <Key width={48} height={48}/>,
    <Heart width={48} height={48} fill="pink" stroke="red" strokeWidth="10"/>,
    <Logo fillColor={"red"} style={{fill: 'rgb(256, 256, 0)', stroke: 'rgb(0, 0, 0)'}} />,
      
];
  const persons = [new Person("Owen", 9), new Person("Claire", 6), new Person("Daddio", 45)];
  let users = ['Alice', 'Bob', 'Charlie'];

  let userElements = users.map(function(user) {
    return <li>{user}</li>;
  });

  const gonElements = gons.map(function(gon) {
    return <div>{gon}</div>;
  });
  return (
    <div>
      <div className="DynamicGons" style={{display:"flex",flexWrap:"wrap",width:"100vw"}}>
      {gonElements}

      </div>
      <div className="GonGons" style={{display:"none"}}>
        <Logo fillColor={"red"} style={{fill: 'rgb(256, 256, 0)', stroke: 'rgb(0, 0, 0)'}} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="blue"
          stroke="pink"
          strokeWidth={50}
          className="bi"
          viewBox="0 0 500 500"
        >
          <path d="M 181.803 136.764 C 174.776 115.684 146.411 97.086 126.019 114.341 C 111.758 126.409 103.516 153.536 101.955 171.219 C 99.162 202.881 107.231 233.645 125.472 259.817 C 133.495 271.328 144.065 279.065 151.176 290.444 C 152.839 293.103 156.645 294.964 156.645 298.1 C 157.833 297.553 162.657 292.088 163.208 291.537 C 166.879 287.867 174.056 286.158 177.974 282.24 C 183.176 277.039 187.843 269.096 194.381 264.192 C 203.065 257.68 212.034 255.46 221.179 249.973 C 225.598 247.321 227.626 241.885 231.023 238.488 C 245.37 224.142 259.621 211.991 263.837 190.907 C 268.961 165.289 262.058 133.343 245.243 116.529 C 240.968 112.254 232.68 113.794 226.648 113.794 C 203.081 113.794 195.403 116.359 181.803 136.764 Z" />
        </svg>
      </div>
    </div>
  )
} 