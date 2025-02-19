import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import Alert from "../../components/header/Alert.tsx";
import Bag from "../../components/header/Bag.tsx";
import Menu from "../../components/header/Menu.tsx";
import NavItem from "../../components/header/NavItem.tsx";
import Searchbar, {
  type SearchbarProps,
} from "../../components/search/Searchbar/Form.tsx";
import Drawer from "../../components/ui/Drawer.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Modal from "../../components/ui/Modal.tsx";
import {
  HEADER_HEIGHT_DESKTOP,
  HEADER_HEIGHT_MOBILE,
  NAVBAR_HEIGHT_MOBILE,
  SEARCHBAR_DRAWER_ID,
  SEARCHBAR_POPUP_ID,
  SIDEMENU_CONTAINER_ID,
  SIDEMENU_DRAWER_ID,
} from "../../constants.ts";
import { useDevice } from "@deco/deco/hooks";
import { type LoadingFallbackProps } from "@deco/deco";
export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}
export interface SectionProps {
  alerts?: HTMLWidget[];
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;
  /**
   * @title Searchbar
   * @description Searchbar configuration
   */
  searchbar: SearchbarProps;
  /** @title Logo */
  logo: Logo;
  /**
   * @description Usefull for lazy loading hidden elements, like hamburguer menus etc
   * @hide true */
  loading?: "eager" | "lazy";
}
type Props = Omit<SectionProps, "alert">;
const Desktop = ({ navItems, logo, searchbar, loading }: Props) => (
  <>
    <Modal id={SEARCHBAR_POPUP_ID}>
      <div
        class="absolute top-0 bg-base-100 container"
        style={{ marginTop: HEADER_HEIGHT_MOBILE }}
      >
        {loading === "lazy"
          ? (
            <div class="flex justify-center items-center">
              <span class="loading loading-spinner" />
            </div>
          )
          : <Searchbar {...searchbar} />}
      </div>
    </Modal>

    <div class="flex flex-col gap-4 pt-5 container border-b border-gray-300">
      <div class="grid grid-cols-3 place-items-center">
        <div class="place-self-start">
          <a href="/" aria-label="Store logo">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 100}
              height={logo.height || 23}
            />
          </a>
        </div>

        <label
          for={SEARCHBAR_POPUP_ID}
          class="input input-bordered flex items-center gap-2 w-full"
          aria-label="search icon button"
        >
          <Icon id="search" />
          <span class="text-base-400 truncate">
            Pesquisar produtos
          </span>
        </label>

        <div class="flex gap-4 place-self-end">
          <a href="/contact-us" id="user-options">
            <svg width="24" height="32" id="Phone" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.66669 6.66667C6.31306 6.66667 5.97393 6.80714 5.72388 7.05719C5.4819 7.29917 5.34253 7.62459 5.33379 7.96582C5.64045 12.8244 7.70881 17.405 11.1519 20.8481C14.5951 24.2912 19.1756 26.3596 24.0342 26.6662C24.3754 26.6575 24.7008 26.5181 24.9428 26.2761C25.1929 26.0261 25.3334 25.687 25.3334 25.3333V20.9027L20.5591 18.993L19.1433 21.3527C18.7863 21.9477 18.0326 22.1694 17.4103 21.8625C14.2517 20.3047 11.6953 17.7483 10.1375 14.5898C9.83061 13.9674 10.0523 13.2137 10.6474 12.8567L13.007 11.4409L11.0973 6.66667H6.66669ZM3.83826 5.17157C4.58841 4.42143 5.60582 4 6.66669 4H12C12.5452 4 13.0355 4.33193 13.238 4.83815L15.9047 11.5048C16.1477 12.1124 15.9138 12.8066 15.3527 13.1433L13.1207 14.4825C14.2192 16.274 15.726 17.7809 17.5175 18.8793L18.8567 16.6473C19.1934 16.0862 19.8876 15.8523 20.4952 16.0954L27.1619 18.762C27.6681 18.9645 28 19.4548 28 20V25.3333C28 26.3942 27.5786 27.4116 26.8284 28.1618C26.0783 28.9119 25.0609 29.3333 24 29.3333C23.973 29.3333 23.9461 29.3325 23.9191 29.3309C18.3931 28.9951 13.181 26.6484 9.26632 22.7337C5.35161 18.819 3.00496 13.6069 2.66914 8.08088C2.66751 8.05395 2.66669 8.02698 2.66669 8C2.66669 6.93913 3.08811 5.92172 3.83826 5.17157Z" /></svg>
          </a>
          <a href="/my-account" id="user-options">
            <svg id="User" width="24" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0003 3.33366C8.61961 3.33366 7.50033 4.45295 7.50033 5.83366C7.50033 7.21437 8.61961 8.33366 10.0003 8.33366C11.381 8.33366 12.5003 7.21437 12.5003 5.83366C12.5003 4.45295 11.381 3.33366 10.0003 3.33366ZM5.83366 5.83366C5.83366 3.53247 7.69914 1.66699 10.0003 1.66699C12.3015 1.66699 14.167 3.53247 14.167 5.83366C14.167 8.13484 12.3015 10.0003 10.0003 10.0003C7.69914 10.0003 5.83366 8.13484 5.83366 5.83366ZM8.33366 13.3337C7.67062 13.3337 7.03473 13.597 6.56589 14.0659C6.09705 14.5347 5.83366 15.1706 5.83366 15.8337V17.5003C5.83366 17.9606 5.46056 18.3337 5.00033 18.3337C4.54009 18.3337 4.16699 17.9606 4.16699 17.5003V15.8337C4.16699 14.7286 4.60598 13.6688 5.38738 12.8874C6.16878 12.106 7.22859 11.667 8.33366 11.667H11.667C12.7721 11.667 13.8319 12.106 14.6133 12.8874C15.3947 13.6688 15.8337 14.7286 15.8337 15.8337V17.5003C15.8337 17.9606 15.4606 18.3337 15.0003 18.3337C14.5401 18.3337 14.167 17.9606 14.167 17.5003V15.8337C14.167 15.1706 13.9036 14.5347 13.4348 14.0659C12.9659 13.597 12.33 13.3337 11.667 13.3337H8.33366Z" fill="currentColor"/></svg>
          </a>
          <Bag />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <ul class="flex">
          {navItems?.slice(0, 10).map((item) => <NavItem item={item} />)}
        </ul>
        <div>
          {/* ship to */}
        </div>
      </div>
    </div>
  </>
);
const Mobile = ({ logo, searchbar, navItems, loading }: Props) => (
  <>
    <Drawer
      id={SEARCHBAR_DRAWER_ID}
      aside={
        <Drawer.Aside title="Search" drawer={SEARCHBAR_DRAWER_ID}>
          <div class="w-screen overflow-y-auto">
            {loading === "lazy"
              ? (
                <div class="h-full w-full flex items-center justify-center">
                  <span class="loading loading-spinner" />
                </div>
              )
              : <Searchbar {...searchbar} />}
          </div>
        </Drawer.Aside>
      }
    />
    <Drawer
      id={SIDEMENU_DRAWER_ID}
      aside={
        <Drawer.Aside title="Menu" drawer={SIDEMENU_DRAWER_ID}>
          {loading === "lazy"
            ? (
              <div
                id={SIDEMENU_CONTAINER_ID}
                class="h-full flex items-center justify-center"
                style={{ minWidth: "100vw" }}
              >
                <span class="loading loading-spinner" />
              </div>
            )
            : <Menu navItems={navItems ?? []} />}
        </Drawer.Aside>
      }
    />

    <div
      class="grid place-items-center w-screen px-5 gap-4"
      style={{
        height: NAVBAR_HEIGHT_MOBILE,
        gridTemplateColumns:
          "min-content auto min-content min-content min-content",
      }}
    >
      <label
        for={SIDEMENU_DRAWER_ID}
        class="btn btn-square btn-sm btn-ghost"
        aria-label="open menu"
      >
        <Icon id="menu" />
      </label>

      {logo && (
        <a
          href="/"
          class="flex-grow inline-flex items-center justify-center"
          style={{ minHeight: NAVBAR_HEIGHT_MOBILE }}
          aria-label="Store logo"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width || 100}
            height={logo.height || 13}
          />
        </a>
      )}

      <label
        for={SEARCHBAR_DRAWER_ID}
        class="btn btn-square btn-sm btn-ghost"
        aria-label="search icon button"
      >
        <Icon id="search" />
      </label>
      <Bag />
    </div>
  </>
);
function Header({
  alerts = [],
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
    width: 100,
    height: 16,
    alt: "Logo",
  },
  ...props
}: Props) {
  const device = useDevice();
  setInterval(() => {
    console.error("Estou testando");
  }, 5000);
  return (
    <header
      style={{
        height: device === "desktop"
          ? HEADER_HEIGHT_DESKTOP
          : HEADER_HEIGHT_MOBILE,
      }}
    >
      <div class="bg-base-100 fixed w-full z-40">
        {alerts.length > 0 && <Alert alerts={alerts} />}
        {device === "desktop"
          ? <Desktop logo={logo} {...props} />
          : <Mobile logo={logo} {...props} />}
      </div>
    </header>
  );
}
export const LoadingFallback = (props: LoadingFallbackProps<Props>) => (
  // deno-lint-ignore no-explicit-any
  <Header {...props as any} loading="lazy" />
);
export default Header;
