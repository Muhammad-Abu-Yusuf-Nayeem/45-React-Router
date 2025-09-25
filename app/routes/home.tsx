import type { Route } from "./+types/home";
// import Header from "./header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div>
        <h1>welcome to React Router</h1>
      </div>
    </>
  );
}
