import ImageDetail from "../../components/ImageDetail";
import { useRouter } from "next/router";

export default function ImageDetailPage() {
  const router = useRouter();
  const { id }: any = router.query;
  return <ImageDetail id={id} />;
}
