type Props = {
    children: string | JSX.Element | JSX.Element[]
}


const container = ({children}: Props) => { 
  return (
    <div className="flex mx-auto max-w-7xl sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

export default container
