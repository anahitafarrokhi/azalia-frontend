import { useRouter } from "next/router";
import Productdetail from "@/components/productdetail";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || Array.isArray(id)) return null;

  return <div className="container mx-auto"><Productdetail productId={id} /></div>
    
};

export default ProductDetailPage;
