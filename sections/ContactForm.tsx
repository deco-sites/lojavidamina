function Section() {
  return (
    <iframe
      id="contact-form-iframe"
      scrolling="no"
      seamless="seamless"
      src="https://materiais.usevidamina.com.br/contato"
      title="Contact Page"
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