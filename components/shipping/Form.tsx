const loaderPath = import.meta.url;

import { AppContext } from "apps/vtex/mod.ts";
import type { SKU, SimulationOrderForm, Sla } from "apps/vtex/utils/types.ts";
import { useId } from "../../sdk/useId.ts";
import { useComponent, type ComponentProps } from "../../sections/Component.tsx";
import { formatPrice } from "../../sdk/format.ts";
import shipping from "../../loaders/shipping.ts";

export interface Props {
  items: SKU[];
}

const formatShippingEstimate = (estimate: string) => {
  const [, time, type] = estimate.split(/(\d+)/);

  if (type === "bd") return `${time} dias úteis`;
  if (type === "d") return `${time} dias`;
  if (type === "h") return `${time} horas`;
};

export async function action(props: Props, req: Request, ctx: AppContext) {
  const form = await req.formData();

  try {
    const result = await shipping({
      items: props.items,
      postalCode: `${form.get("postalCode") ?? ""}`,
      country: "BRA",
    }, req, ctx);

    return { result };
  } catch {
    return { result: null };
  }
}

export default function ShippingForm({ items, result }: ComponentProps<typeof action>) {
  const slot = useId();

  const methods = result?.logisticsInfo?.reduce(
    (initial, { slas }) => [...initial, ...slas],
    [] as Sla[],
  ) ?? [];

  return (
    <div class="flex flex-col gap-2 shipping-form">
      <div class="flex flex-col shipping-form-content">
        <span class="text-[#616B6B] text-sm pt-5 border-t-[1px] border-gray-300">
          Insira o seu CEP para verificar opções de entrega.
        </span>
      </div>

      <form
        class="relative join shipping-form-content"
        hx-target={`#${slot}`}
        hx-swap="innerHTML"
        hx-sync="this:replace"
        hx-post={useComponent(loaderPath, { items })}
      >
        <input
          as="input"
          type="text"
          class="input input-bordered join-item w-48"
          placeholder="00000000"
          name="postalCode"
          maxLength={8}
          size={8}
        />
        <button type="submit" class="btn join-item no-animation">
          <span class="[.htmx-request_&]:hidden inline">Calcular</span>
          <span class="[.htmx-request_&]:inline hidden loading loading-spinner loading-xs" />
        </button>
      </form>

      <div id={slot}>
        {methods.length > 0 ? (
          <ul class="flex flex-col gap-4 p-4 border border-base-400 rounded">
            {methods.map((method) => (
              <li class="flex justify-between items-center border-base-200 not-first-child:border-t">
                <span class="text-button text-center">
                  Entrega {method.name}
                </span>
                <span class="text-button">
                  até {formatShippingEstimate(method.shippingEstimate)}
                </span>
                <span class="text-base font-semibold text-right">
                  {method.price === 0 ? "Grátis" : (
                    formatPrice(method.price / 100, "BRL", "pt-BR")
                  )}
                </span>
              </li>
            ))}
            <span class="text-xs font-thin">
              Os prazos de entrega começam a contar a partir da confirmação do
              pagamento e podem variar de acordo com a quantidade de produtos na
              sacola.
            </span>
          </ul>
        ) : result ? (
          <div class="p-2">
            <span>CEP inválido</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}