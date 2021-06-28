import ImageDetail from "../../components/ImageDetail";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getImagesFromId } from "../../api/unsplash";
import { ParsedUrlQuery } from "querystring";
import { ImageItemType } from "../../types/index";
interface Params extends ParsedUrlQuery {
  id: string;
}

export default function ImageDetailPage({
  imageData,
}: {
  imageData: ImageItemType;
}) {
  const router = useRouter();
  const { id }: any = router.query;
  return <ImageDetail imageData={imageData} />;
}

export const getServerSideProps: GetServerSideProps<ParsedUrlQuery, Params> =
  async (context) => {
    let imageData = null;
    if (context.params) {
      const res = await getImagesFromId(context.params.id);
      if (res) {
        imageData = res.data;
      }
    }

    return { props: { imageData } };
  };
