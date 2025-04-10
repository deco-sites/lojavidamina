import { AppContext } from "../../apps/site.ts";
import SearchResult, {
  Props as SearchResultProps,
} from "../search/SearchResult.tsx";
import { type SectionProps } from "@deco/deco";
export type Props = SearchResultProps;
function WishlistGallery(props: SectionProps<typeof loader>) {
  const isEmpty = !props.page || props.page.products.length === 0;
  if (isEmpty) {
    return (
      <div class="container mx-4 sm:mx-auto">
        <div class="mx-10 my-20 flex flex-col gap-4 justify-center items-center">
          <span class="font-medium text-2xl">Sua lista de desejos está vazia...</span>
          <span>
            <a href="/my-account" style="text-decoration:underline;">Acesse a sua conta</a> e adicione produtos para que você os compre assim que puder!
          </span>
        </div>
      </div>
    );
  }
  return <SearchResult {...props} />;
}
export const loader = async (props: Props, req: Request, ctx: AppContext) => {
  let productIds = [];

  props.page.products.forEach((product) => {
    productIds.push(product.productID);
  });

  if(productIds.length > 0) {
    props.page.products = await ctx.invoke("vtex/loaders/intelligentSearch/productList.ts", {
      props: {
        ids: productIds
      }
    })
  }

  return {
    ...props,
    url: req.url,
  };
};
export default WishlistGallery;
