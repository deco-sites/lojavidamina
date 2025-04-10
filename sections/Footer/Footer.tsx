import { type ImageWidget } from "apps/admin/widgets.ts";
// import Image from "apps/website/components/Image.tsx";
// import PoweredByDeco from "apps/website/components/PoweredByDeco.tsx";
import Section from "../../components/ui/Section.tsx";

/** @titleBy title */
interface Item {
  title: string;
  href: string;
}

/** @titleBy title */
interface Link extends Item {
  children: Item[];
}

/** @titleBy alt */
interface Social {
  alt?: string;
  href?: string;
  image: ImageWidget;
}

// interface Props {
//   links?: Link[];
//   social?: Social[];
//   paymentMethods?: Social[];
//   policies?: Item[];
//   logo?: ImageWidget;
//   trademark?: string;
// }

function Footer() {
  return (
    <footer
      class="px-5 sm:px-0 mt-5 sm:mt-10"
      style={{ backgroundColor: "#EDE707" }}
    >
      <div class="container flex flex-col gap-5 sm:gap-10 py-10">
        <div class="columns">
          <div class="column-vidamina">
            <img src="https://data.decoassets.com/lojavidamina/ed0e8580-e634-42e9-8661-cc64a888f894/vidamina---logo-preta-1.png" />
            <p class="subtitle">
              <b>by Singular Pharma</b>
            </p>

            <p>
              <b>Singular Farmacia de Manipulação</b>
            </p>
            <p class="cnpj">05.794.416/0001-42</p>
            <p class="address">Rua das Rosas, 90, Pituba, Salvador/BA</p>
            <p class="cnpj">05.794.416/0004-95</p>
            <p class="address">Av Paulo VI, 1070, Pituba, Salvador/BA</p>
          </div>

          <div class="column-linhas">
            <p class="title">LINHAS</p>

            <a href="/category/vida-leve">Vida Leve</a>
            <a href="/category/vida-imune">Vida Imune</a>
            <a href="/category/vida-longa">Vida Longa</a>
            <a href="/category/vida-pura">Vida Pura</a>
            <a href="/category/vida-calma">Vida Calma</a>
            <a href="/category/vida-forte">Vida Forte</a>
            <a href="/category/vida-plena">Vida Plena</a>
            <a href="/category/vida-bela">Vida Bela</a>
            <a href="/category/vida-ativa">Vida Ativa</a>
          </div>

          <div class="column-beneficios">
            <p class="title">BENEFÍCIOS</p>

            <a href="/products?filter.category-1=aumento-de-massa-magra">Aumento de massa magra</a>
            <a href="/products?filter.category-1=desempenho-fisico">Desempenho físico</a>
            <a href="/products?filter.category-1=detox">Detox</a>
            <a href="/products?filter.category-1=emagrecimento">Emagrecimento</a>
            <a href="/products?filter.category-1=energia">Energia</a>
            <a href="/products?filter.category-1=fortalecimento-unha-e-cabelo">Fortalecimento de unha e cabelo</a>
            <a href="/products?filter.category-1=fotoprotecao">Fotoproteção</a>
            <a href="/products?filter.category-1=imunidade">Imunidade</a>
            <a href="/products?filter.category-1=longevidade">Longevidade</a>
            <a href="/products?filter.category-1=memoria-e-foco">Memória e foco</a>
            <a href="/products?filter.category-1=menopausa">Menopausa</a>
            <a href="/products?filter.category-1=modulacao-intestinal">Modulação intestinal</a>
            <a href="/products?filter.category-1=saude-da-mulher">Saúde da mulher</a>
            <a href="/products?filter.category-1=saude-da-pele">Saúde da pele</a>
            <a href="/products?filter.category-1=saude-mental">Saúde mental</a>
            <a href="/products?filter.category-1=sono">Sono</a>
          </div>

          <div class="column-institucional">
            <div>
              <p class="title">QUIZ</p>
              <a href="#">Em breve</a>
            </div>

            <div>
              <p class="title">INSTITUCIONAL</p>
              <a href="/about-us">Quem somos</a>
              <a href="/what-makes-us-unique">Nossos diferenciais</a>
              <a href="/privacy-policy">Política de Privacidade</a>
              <a href="/shipping-policy">Política de Entrega</a>
              <a href="/exchange-policy">Política de Troca</a>
            </div>
          </div>

          <div class="column-pagamento">
            <p class="title">FORMAS DE PAGAMENTO</p>

            <div class="payment">
              <img src="https://assets.decocache.com/lojavidamina/3badea85-e94d-49e5-ada6-80b4cc161eda/image-15.png" />
              <img src="https://assets.decocache.com/lojavidamina/27bdbf64-7ec0-4c8a-9cff-3b42ffcc1c70/image-(1)-1.png" />
              <img src="https://assets.decocache.com/lojavidamina/be35c761-9f80-4ac3-bd57-2834bd28c8ff/image-(2)-1.png" />
              <img src="https://assets.decocache.com/lojavidamina/a61b7a6f-305b-44a6-ae9e-6347d3006106/image-16.png" />
              <img src="https://assets.decocache.com/lojavidamina/08711c2e-0096-490f-a851-577d7725a006/image-17.png" />
              <img src="https://assets.decocache.com/lojavidamina/7412aada-08e3-4417-b585-031a427fda86/image-18.png" />
            </div>
            <div class="security">
              <img src="https://assets.decocache.com/lojavidamina/cc7c0929-3935-41f2-8fd3-8a552987e5e6/image-20.png" />
              <img src="https://assets.decocache.com/lojavidamina/951e60e0-e61e-4ea6-bc76-3194843ffcf9/image-21.png" />
            </div>
          </div>

          <div class="column-contato">
            <div class="socials">
              <a href="https://www.instagram.com/usevidamina/">
                <img src="https://assets.decocache.com/lojavidamina/a51231b0-8859-4699-a1bf-91217e105ad1/instagram-brands-1.png" />
              </a>
              <a href="#">
                <img src="https://assets.decocache.com/lojavidamina/c5b1b6ad-561b-4cbc-a812-213d585ef549/facebook-brands-1.png" />
              </a>
            </div>

            <a href="/contact-us">Fale conosco</a>
            <a href="/my-account">Acesse sua conta</a>
          </div>
        </div>

        <hr />

        <div class="disclaimer">
          <p>
            Os textos de todos os nossos produtos são referentes à descrição
            técnica dos mesmos, não configurando propaganda ou estímulo a
            automedicação.
          </p>
        </div>

        <div class="vtex">
          <img src="https://assets.decocache.com/lojavidamina/6e5df383-23a6-49ed-9476-eefaf72c1467/image-19.png" />
        </div>
      </div>
    </footer>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="1145px" />;

export default Footer;
