

const Content = ({className,decription,title}) => {
  return (
  
     <div>
          <h1 className={className}>{decription}</h1>
          <p className={className}>{title}</p>
     </div>
  
  )
}

export default Content