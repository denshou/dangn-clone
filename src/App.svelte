<script>
  import Index from "./pages/Index.svelte";
  import NeighborShop from "./pages/NeighborShop.svelte";
  import Router from "svelte-spa-router";
  import "./css/reset.css";
  import "./css/header.css";
  import "./css/style.css";
  import "./css/main.css";
  import "./css/footer.css";
  import "./css/write.css";

  const routes = {
    "/": Index,
    "/neighborshop": NeighborShop,
  };
</script>

<Router {routes} />
