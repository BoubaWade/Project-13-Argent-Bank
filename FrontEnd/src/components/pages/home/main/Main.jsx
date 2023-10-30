import Feature from "../../../reusable-ui/Feature";
import { featureDatas } from "../../../../config/config";
import Hero from "./Hero";

export default function Main() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featureDatas.map(({ id, icon, title, text }) => {
          return <Feature key={id} icon={icon} title={title} text={text} />;
        })}
      </section>
    </main>
  );
}
