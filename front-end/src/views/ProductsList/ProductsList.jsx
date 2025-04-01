import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import styles from "./ProductsList.module.css";

export function ProductsList() {
  const { products, numberOfPages } = useLoaderData();
  console.log(products);
  const params = useParams();
  const foundCategory = CATEGORIES.find((c) => c.path === params.category);

  let foundSubcategory;
  if (params.subcategory) {
    foundSubcategory = foundCategory.subCategories.find(
      (s) => s.path === params.subcategory
    );
  }
  return (
    <FlexContainer>
      <ExpandableMenu />
      <div className={styles.contentWrapper}>
        <Breadcrumbs />
        <Bestsellers
          products={products}
          headerText={
            foundSubcategory
              ? foundSubcategory.categoryName
              : foundCategory.categoryName
          }
        />
        <Pagination numberOfPages={numberOfPages} />
      </div>
    </FlexContainer>
  );
}
