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
  { url, selected, label, quantity }: FilterToggleValue,
  filterKey: string,
) {
  return (
    <a href={url} rel="nofollow" class="flex items-center gap-2">
      <div aria-checked={selected} class="checkbox" />
      <span class="text-sm">{(label == 'UseVidamina' ? 'Vidamina' : (((/^Vida\w+/).test(label)) ? label.replace(/([a-z])([A-Z])/g, '$1 $2') : label))}</span>
      <span>{filterKey}</span>
      {quantity > 0 && <span class="text-sm text-base-400">({quantity})</span>}
    </a>
  );
}

function FilterValues({ filterKey, values }: FilterToggle) {
  const avatars = filterKey === "tamanho" || filterKey === "cor";
  const flexDirection = avatars ? "flex-row items-center" : "flex-col";

  return (
    <ul class={clx(`flex flex-wrap gap-2`, flexDirection)}>
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

        if (filterKey === "price") {
          const range = parseRange(item.value);

          return range && (
            <ValueItem
              {...item}
              label={`${formatPrice(range.from)} - ${formatPrice(range.to)}`}
              filterKey={filterKey}
            />
          );
        }

        return <ValueItem {...item} filterKey={filterKey} />;
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  return (
    <ul class="flex flex-col gap-6 p-4 sm:p-0">
      {filters
        .filter(isToggle)
        .map((filter) => (
          <li class="flex flex-col gap-4">
            <span>{(filter.label == 'Departamento') ? 'Linhas' : filter.label}</span>
            <FilterValues {...filter} />
          </li>
        ))}
    </ul>
  );
}

export default Filters;
