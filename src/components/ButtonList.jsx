import Button from './Button'

const listCategory = ["All","Criket","Cooking", "Sports", "News", "Podcasts", "Music", "Gaming", "Live","All","Criket"]
const ButtonList = () => {
  
  return (
    <div className='flex' >
      {listCategory.map((name, index) => (<Button key={index} name={name} />))}
    </div>

  )
}

export default ButtonList