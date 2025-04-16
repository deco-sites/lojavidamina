import { AppContext } from "apps/vtex/mod.ts";
import type { SimulationOrderForm } from "apps/vtex/utils/types.ts";
import { getSegmentFromBag } from "apps/vtex/utils/segment.ts";

export interface Item {
  id: number;
  quantity: number;
  seller: string;
}

export interface Props {
  items: Item[];
  postalCode: string;
  country: string;
  RnbBehavior?: 0 | 1;
}

/**
 * @docs https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation
 */
const action = async (
  props: Props,
  req: Request,
  ctx: AppContext,
): Promise<SimulationOrderForm> => {
  const cookie = req.headers.get("cookie") ?? "";
  const { vcsDeprecated } = ctx;
  const { items, postalCode, country, RnbBehavior = 1 } = props;
  const segment = getSegmentFromBag(ctx);

  const response = await fetch(
    `https://vidamina.vtexcommercestable.com.br/api/checkout/pub/orderForms/simulation?RnbBehavior=1&sc=1`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        cookie,
      },
      body: JSON.stringify({ items, country, postalCode }),
    }
  );

  const data = await response.json();

  return data;
};

export default action;