import type {
  Filter,
  FilterToggle,
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";
import { parseRange } from "apps/commerce/utils/filters.ts";
import Avatar from "../../components/ui/Avatar.tsx";
import { clx } from "../../sdk/clx.ts";
import { formatPrice } from "../../sdk/format.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function ValueItem(
  { url, selected, label, quantity, index, categoria }: FilterToggleValue & { index: number; categoria: string },
) {
  const matchVida = /^Vida\w+/.test(label);

  if (categoria === "category-1") {
    if (index === 0 && !matchVida) return null;
    if (index === 1 && matchVida) return null;
  }

  return (
    <a href={url} rel="nofollow" class="flex items-center gap-2">
      <div aria-checked={selected} class="checkbox" />
      <span class="text-sm">
        {label === "UseVidamina"
          ? "Vidamina"
          : (matchVida ? label.replace(/([a-z])([A-Z])/g, "$1 $2") : label)}
      </span>
      {quantity > 0 && <span class="text-sm text-base-400">({quantity})</span>}
    </a>
  );
}

function FilterValues({ filter, index }: { filter: FilterToggle; index: number }) {
  const { key, values } = filter;
  const avatars = key === "tamanho" || key === "cor";
  const flexDirection = avatars ? "flex-row items-center" : "flex-col";

  return (
    <ul class={clx(`flex flex-wrap gap-2`, flexDirection)}>
      {/* <p>{key} | {index}</p> */}
      {values.map((item) => {
        const { url, selected, value } = item;

        if (avatars) {
          return (
            <a href={url} rel="nofollow">
              <Avatar
                content={value}
                variant={selected ? "active" : "default"}
              />
            </a>
          );
        }

        if (key === "price") {
          const range = parseRange(item.value);

          return (
            range && (
              <ValueItem
                {...item}
                label={`${formatPrice(range.from)} - ${formatPrice(range.to)}`}
                index={index}
                categoria={key}
              />
            )
          );
        }

        return <ValueItem {...item} index={index} categoria={key} />;
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  const page_location = new URL(location.href);

  return (
    <ul class={`flex flex-col gap-6 p-4 sm:p-0`}>
      <p>{page_location}</p>
      {filters
        .filter(isToggle)
        .flatMap((filter) =>
          filter.label === "Departamento"
            ? [filter, filter] // Duplicamos o filtro "Departamento"
            : [filter] // Mantemos os outros normalmente
        )
        .map((filter, index) => (
          <li key={`${filter.label}-${index}`} class={`flex flex-col gap-4 ${(filter.label == 'Departamento' ? 'category-filter' : '')}`}>
            <span>{filter.label === "Departamento" ? (index == 0 ? "Linhas" : "Categorias") : filter.label}</span>
            <FilterValues filter={filter} index={index} />
          </li>
        ))}
    </ul>
  );
}

export default Filters;
