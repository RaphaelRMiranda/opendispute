import { theme } from "@/styles/theme";
import ContentLoader from "react-content-loader";

const ListingSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={90}
      viewBox="0 0 100% 90"
      backgroundColor={theme.colors.base.gray[300]}
      foregroundColor={theme.colors.base.primary}
      style={{
        marginBottom: 15,
      }}
    >
      <rect x="0" y="0" rx="6" ry="6" width="100%" height="100%" />
    </ContentLoader>
  );
};

export default ListingSkeleton;
