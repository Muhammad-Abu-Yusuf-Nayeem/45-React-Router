import { type RouteConfig, index ,route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/About/About.tsx"),
  route("contact", "routes/Contact/Contact.tsx"),
    route("posts/:postId", "routes/Posts.tsx"),
  
    // Nested routes
    route("dashboard", "routes/dashboard.tsx", [
        route("finances", "routes/finances.tsx"),
        route("personal-info", "routes/personal-info.tsx")
    ]),
] satisfies RouteConfig;
