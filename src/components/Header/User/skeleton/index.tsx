import Box from "@/components/Box";
import { theme } from "@/styles/theme";
import ContentLoader from "react-content-loader";

const UserSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={40}
      viewBox="0 0 400 40"
      backgroundColor={theme.colors.base.gray[300]}
      foregroundColor={theme.colors.base.primary}
    >
      <rect x="0" y="0" rx="3" ry="3" width="150" height="40" />
      <rect x="170" y="5" rx="3" ry="3" width="2" height="30" />
      <circle cx="200" cy="20" r="16" />
      <rect x="225" y="5" rx="3" ry="3" width="100" height="13" />
      <rect x="225" y="25" rx="3" ry="3" width="80" height="13" />
    </ContentLoader>
  );
};

export default UserSkeleton;
