function Section() {
  return (
    <iframe
      style="width:100%;height:100vh;padding-top:4.25rem;"
      scrolling="no"
      seamless="seamless"
      src="https://www.usevidamina.com.br/login?returnUrl=/account"
      title="Login Page"
    >
    </iframe>
  );
}

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

export default Section;