import DesignsList from "@/components/DesignsComponents/DesignsList/DesignsList";

const DesignCategoryPage = async ({ params }) => {
  const { printing_category_id } = await params;
  console.log("page", printing_category_id);
  return (
      <DesignsList printing_category_id={printing_category_id} />
  );
};

export default DesignCategoryPage;
