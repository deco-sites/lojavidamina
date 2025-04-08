import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

export interface Props {
  interval?: number;
}

function Alert({ interval = 5 }: Props) {
  const id = useId();

  return (
    <div id={id}>
      <Slider
        style="background-color:#EDE707 !important;"
        class="topbar carousel carousel-center w-screen gap-6 bg-secondary text-secondary-content text-sm/4"
      >
        <Slider.Item index={0} class="carousel-item">
          <span class="px-5 py-4 w-screen text-center">
            <img src="https://assets.decocache.com/lojavidamina/bdd67aa9-8a4a-4742-9ed3-46e71f0fd524/Group-99.svg" />
            <p>
              <b>10% de desconto</b> na primeira compra <br />com o cupom{" "}
              <b>primeiravidamina</b>!
            </p>
          </span>
        </Slider.Item>

        <Slider.Item index={1} class="carousel-item">
          <span class="px-5 py-4 w-screen text-center">
            <img src="https://assets.decocache.com/lojavidamina/5d961715-687a-4239-9b41-e92e70186ac4/Vector.svg" />
            <p>
              <b>Frete grátis</b> acima de R$ 100 <br />para Bahia e Sergipe!
            </p>
          </span>
        </Slider.Item>

        <Slider.Item index={2} class="carousel-item">
          <span class="px-5 py-4 w-screen text-center">
            <img src="https://assets.decocache.com/lojavidamina/fee905fe-debf-4f63-a5b6-969a6cd3b7a5/Vector-1.svg" />
            <p>
              Pagamento via <b>pix</b> ou <br />em <b>até 10x</b> no cartão!
            </p>
          </span>
        </Slider.Item>

        <Slider.Item index={3} class="carousel-item">
          <span class="px-5 py-4 w-screen text-center">
            <img src="https://assets.decocache.com/lojavidamina/03219dc7-eeb3-4fbc-ae40-d7373362d469/Group-106.svg" />
            <p>
              <b>Compre e retire</b> <br />na loja!
            </p>
          </span>
        </Slider.Item>
      </Slider>

      <Slider.JS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
