import CategoryComponents from '@/components/CategoryComponents/CategoryComponents'
import React from 'react'

const CategoryPage = async({ params }) => {

  const { category } = await params

  console.log(category)
  return (
    <CategoryComponents category={category}/>
  )
}

export default CategoryPage