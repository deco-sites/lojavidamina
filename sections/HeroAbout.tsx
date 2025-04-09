import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  image?: ImageWidget;
}

export default function HeroFlats({
  image
}: Props) {
  return (
    <div>
      <div class="mx-auto flex flex-col items-center gap-8">
        <div class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 flex-col text-left lg:flex-row lg:py-36 gap-12 md:gap-20 items-center`}>
          {image && (
            <Image
              width={640}
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
          <div class={`text-about-us mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${image ? "lg:w-1/2 lg:max-w-xl" : "flex flex-col items-center justify-center lg:max-w-3xl"}`}>
            <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
              Se cada mulher é única, a atenção com sua saúde também precisa ser. Autocuidado é, cada vez mais, um ato de amor. Por isso, nossa missão se tornou ser uma companheira de jornada de saúde da mulher, pensando em como tornar o uso de suplementos mais fácil para que cada uma possa ter mais independência em suas escolhas.
            </p>
            <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
              E o que pode tornar esse processo mais leve? Dividir com alguém as suas dúvidas, as suas necessidades e as suas conquistas. A gente acredita em conversas sem julgamento e sem tabus sobre todos os temas que envolvem a nossa saúde, que todas as perguntas são válidas e que, juntas, vamos encontrar os produtos certos para te acompanhar em cada etapa.
            </p>
            <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
              Seja para dar up na energia, para uma recuperação muscular mais eficiente, para melhorar o sono e a concentração, para as unhas que quebram e cabelos que não param de cair, para ajudar o intestino a funcionar... Somos únicas, mas com tanto em comum! Todas essas dores podem ser minimizadas ou eliminadas da nossa rotina com a escolha dos produtos certos, na hora certa.
            </p>
            <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
              Hoje se fala muito em melhora de performance, mas, algumas vezes, estamos performando para a expectativa dos outros. Para nós, ser saudável também é estar confortável dentro do que somos, melhorando o que podemos e o que é importante para cada uma. E quem sabe o que é melhor para nós, senão nós mesmas? Por conta disso, damos valor à pesquisa, tecnologia, curiosidade e colaboração para encontrarmos uma solução para você.
            </p>
            <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
              Esse é o nosso jeito: sendo sua companhia. Não só o melhor jeito de fazer suplementos, mas o melhor jeito de viver, que é junto.
            </p>
            <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
              Muito prazer, somos a Vidamina.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
