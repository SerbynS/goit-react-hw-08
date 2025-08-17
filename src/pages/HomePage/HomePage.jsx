import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <title>Welcome</title>
      <div className={css.container}>
        <h1 className={css.title}>
          We will help you keep your contacts in a safe place{" "}
        </h1>
      </div>
    </div>
  );
}
