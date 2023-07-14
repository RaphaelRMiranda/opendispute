import { theme } from "@/styles/theme";
import Box from "../Box";
import Text from "../Text";
import SelectText from "../Selects/Text";

const limits = [
  { value: 5, label: "5 per page" },
  { value: 10, label: "10 per page" },
  { value: 15, label: "15 per page" },
  { value: 20, label: "20 per page" },
];

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  total: number;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  limit,
  setLimit,
  total,
}) => {
  const totalPages = Math.ceil(total / limit);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value);
    setLimit(newLimit);
    setPage(1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPage = parseInt(event.target.value);
    const validPage =
      !isNaN(inputPage) && inputPage > 0 && inputPage <= totalPages
        ? inputPage
        : page;
    setPage(validPage);
  };

  return (
    <Box marginTop={10}>
      <SelectText
        options={limits}
        onChange={handleLimitChange}
        marginRight={10}
        defaultValue={limit}
      />
      <Box display={["none", "none", "flex"]}>
        {pageNumbers.slice(0, 5).map((pageNumber) => (
          <Box
            position="relative"
            wid="46px"
            hei="46px"
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            opacity={page === pageNumber ? 0.5 : 1}
            backgroundColor={
              page === pageNumber
                ? theme.colors.base.gray[300]
                : theme.colors.base.white
            }
            borderRadius={5}
            marginRight={5}
            marginLeft={5}
            hover={pageNumber !== page ? "cursor:pointer;" : ""}
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                pointerEvents="none"
              >
                {pageNumber}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
      <Box display={["flex", "flex", "none"]}>
        {pageNumbers.slice(0, 2).map((pageNumber) => (
          <Box
            position="relative"
            wid="46px"
            hei="46px"
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            opacity={page === pageNumber ? 0.5 : 1}
            backgroundColor={
              page === pageNumber
                ? theme.colors.base.gray[300]
                : theme.colors.base.white
            }
            borderRadius={5}
            marginRight={5}
            marginLeft={5}
            hover={pageNumber !== page ? "cursor:pointer;" : ""}
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                pointerEvents="none"
              >
                {pageNumber}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
      {totalPages > 5 && (
        <>
          <Text
            fontSize={theme.fonts.sizes.md}
            color={theme.colors.base.secondary}
            pointerEvents="none"
          >
            ...
          </Text>
          <Box
            position="relative"
            wid="46px"
            hei="46px"
            onClick={() => handlePageChange(totalPages)}
            opacity={page === totalPages ? 0.5 : 1}
            backgroundColor={
              page === totalPages
                ? theme.colors.base.gray[300]
                : theme.colors.base.white
            }
            borderRadius={5}
            marginRight={5}
            marginLeft={5}
            hover="cursor:pointer;"
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                pointerEvents="none"
              >
                {totalPages}
              </Text>
            </Box>
          </Box>
        </>
      )}

      {/* <input
        type="number"
        min={1}
        max={totalPages}
        value={page}
        onChange={handleInputChange}
        style={{ width: "50px", marginLeft: "10px" }}
      /> */}
      <Text
        fontSize={theme.fonts.sizes.md}
        color={theme.colors.base.secondary}
        marginLeft={10}
      >
        of {totalPages}
      </Text>
    </Box>
  );
};

export default Pagination;
