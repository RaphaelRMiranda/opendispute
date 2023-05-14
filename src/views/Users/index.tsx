import Box from "@/components/Box";
import Card from "@/components/Card";
import Item from "@/components/Card/Item";
import Edit from "@/components/Card/icons/Edit";
import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";

const Users = () => {
  return (
    <Layout>
      <Page
        title="Card listing"
        description="List of all cards, you can filter by date or name"
      >
        <Card>
          <Box wid="55%" justifyContent="space-between">
            <Item>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.secondary}
              >
                Name
              </Text>
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                John Doe
              </Text>
            </Item>
            <Item>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.secondary}
              >
                Disputes created
              </Text>
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.green}
                weight={500}
              >
                37
              </Text>
            </Item>
            <Item>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.secondary}
              >
                Last active
              </Text>
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                5/5/2023
              </Text>
            </Item>
            <Item>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.secondary}
              >
                Created by
              </Text>
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                Raphael M.
              </Text>
            </Item>
            <Item>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.secondary}
              >
                Created at
              </Text>
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                5/5/2023 - 21:40
              </Text>
            </Item>
          </Box>
          <Box wid="25%" justifyContent="flex-end">
            <Box wid="60%" justifyContent="center">
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                Service
              </Text>
            </Box>

            <Box wid="40%" justifyContent="flex-end">
              <Box marginRight={25}>
                <Edit size={theme.icons.sizes.xs} />
              </Box>
              <Box hover="cursor:pointer;">
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.red[200]}
                  weight={500}
                  pointerEvents="none"
                >
                  Delete
                </Text>
              </Box>
            </Box>
          </Box>
        </Card>
      </Page>
    </Layout>
  );
};

export default Users;
