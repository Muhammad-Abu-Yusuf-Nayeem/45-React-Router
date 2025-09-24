import { type RouteConfig, index ,route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/About/About.tsx"),
  route("contact", "routes/Contact/Contact.tsx"),
] satisfies RouteConfig;
