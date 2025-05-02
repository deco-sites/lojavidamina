export { default, loader } from "../../components/ui/CategoryBanner.tsx";

export const LoadingFallback = () => (
<div
    style={{
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    }}
>
    <span class="loading loading-spinner" />
</div>
);