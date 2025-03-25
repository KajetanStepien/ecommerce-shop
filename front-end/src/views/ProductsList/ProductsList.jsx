import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";

export function ProductsList() {
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu />
      </FlexContainer>
    </Layout>
  );
}
