import CategoryComponents from '@/components/CategoryComponents/CategoryComponents'
import { getUserId } from '@/data/data'

const CategoryPage = async({ params }) => {

  const { category } = await params
  const userId = await getUserId()
  console.log(userId)

  return (
    <CategoryComponents category={category}/>
  )
}

export default CategoryPage