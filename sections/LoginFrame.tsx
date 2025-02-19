interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return <iframe src="https://www.usevidamina.com.br/login?returnUrl=/account" title="Login Page"></iframe>
}