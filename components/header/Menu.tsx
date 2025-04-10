import Icon from "../../components/ui/Icon.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import {
  SEARCHBAR_DRAWER_ID,
  SIDEMENU_DRAWER_ID
} from "../../constants.ts";
import { closeDrawer } from "../../utils.ts";

export interface Props {
  navItems?: SiteNavigationElement[];
}

function MenuItem({ item }: { item: SiteNavigationElement }) {
  return (
    <div class="collapse collapse-plus">
      <input type="checkbox" />
      <div class="collapse-title">{item.name}</div>
      <div class="collapse-content">
        <ul>
          <li>
            <a class="underline text-sm" href={item.url}>Ver todos</a>
          </li>
          {item.children?.map((node) => (
            <li>
              <MenuItem item={node} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Menu({ navItems = [] }: Props) {
  return (
    <div
      class="flex flex-col h-full overflow-y-auto"
      style={{ minWidth: "100vw" }}
    >
      <ul class="px-4 flex-grow flex flex-col divide-y divide-base-200 overflow-y-auto">
        {navItems.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>

      <ul class="flex flex-col py-2 bg-base-200">
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="/my-account"
          >
            <svg
              id="User"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0003 3.33366C8.61961 3.33366 7.50033 4.45295 7.50033 5.83366C7.50033 7.21437 8.61961 8.33366 10.0003 8.33366C11.381 8.33366 12.5003 7.21437 12.5003 5.83366C12.5003 4.45295 11.381 3.33366 10.0003 3.33366ZM5.83366 5.83366C5.83366 3.53247 7.69914 1.66699 10.0003 1.66699C12.3015 1.66699 14.167 3.53247 14.167 5.83366C14.167 8.13484 12.3015 10.0003 10.0003 10.0003C7.69914 10.0003 5.83366 8.13484 5.83366 5.83366ZM8.33366 13.3337C7.67062 13.3337 7.03473 13.597 6.56589 14.0659C6.09705 14.5347 5.83366 15.1706 5.83366 15.8337V17.5003C5.83366 17.9606 5.46056 18.3337 5.00033 18.3337C4.54009 18.3337 4.16699 17.9606 4.16699 17.5003V15.8337C4.16699 14.7286 4.60598 13.6688 5.38738 12.8874C6.16878 12.106 7.22859 11.667 8.33366 11.667H11.667C12.7721 11.667 13.8319 12.106 14.6133 12.8874C15.3947 13.6688 15.8337 14.7286 15.8337 15.8337V17.5003C15.8337 17.9606 15.4606 18.3337 15.0003 18.3337C14.5401 18.3337 14.167 17.9606 14.167 17.5003V15.8337C14.167 15.1706 13.9036 14.5347 13.4348 14.0659C12.9659 13.597 12.33 13.3337 11.667 13.3337H8.33366Z"
                fill="currentColor"
              />
            </svg>
            <span class="text-sm">Acesse sua conta</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="/contact-us"
          >
            <Icon id="call" />
            <span class="text-sm">Fale conosco</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="/wishlist"
          >
            <Icon id="favorite" />
            <span class="text-sm">Lista de desejos</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
