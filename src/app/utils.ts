import ReactDOM from 'react-dom'


type Props={
    children:[]
}
type Cprops={
    type:string
    children:[]
}

const Tag=(text:string)=>{
  return  `<${text}>hellow</${text}>`
}

const TextHandler=({children}:Props)=>{
  return Tag("h1")
  
}

export default TextHandler