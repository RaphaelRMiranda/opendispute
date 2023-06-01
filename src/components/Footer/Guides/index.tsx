import Box from "@/components/Box";
import Card from "./icons/Card";
import { theme } from "@/global/theme";
import Text from "@/components/Text";
import Package from "./icons/Package";
import Security from "./icons/Security";

const Guides = () => {
  return (
    <Box width="100%">
      <Box
        width="100%"
        display={["none", "none", "none", "flex"]}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box width="30%" flexDirection="column" justifyContent="flex-start">
          <Card size={theme.icons.sizes.lg} />
          <Text
            fontSize={theme.fonts.sizes.md}
            weight={500}
            marginTop={5}
            align="center"
          >
            Como você quer pagar?
          </Text>
          <Text
            fontSize={theme.fonts.sizes.sm}
            color={theme.colors.base.gray[400]}
            align="center"
          >
            Trabalhamos juntamente com Mercado Pago, você pode pagar com cartão,
            boleto ou Pix.
          </Text>
        </Box>
        <Box width="30%" flexDirection="column" justifyContent="flex-start">
          <Package size={theme.icons.sizes.lg} />
          <Text
            fontSize={theme.fonts.sizes.md}
            weight={500}
            marginTop={5}
            align="center"
          >
            Frete grátis
          </Text>
          <Text
            fontSize={theme.fonts.sizes.sm}
            color={theme.colors.base.gray[400]}
            align="center"
          >
            Aqui você encontra centenas de produtos com frete grátis para todo
            Brasil.
          </Text>
        </Box>
        <Box width="30%" flexDirection="column" justifyContent="flex-start">
          <Security size={theme.icons.sizes.lg} />
          <Text
            fontSize={theme.fonts.sizes.md}
            weight={500}
            marginTop={5}
            align="center"
          >
            Compra segura, do início ao fim
          </Text>
          <Text
            fontSize={theme.fonts.sizes.sm}
            color={theme.colors.base.gray}
            align="center"
          >
            Caso haja algum problema com a compra não se preocupe, você pode
            devolver. Aqui você está sempre protegido!
          </Text>
        </Box>
      </Box>
      <Box display={["flex", "flex", "flex", "none"]}></Box>
    </Box>
  );
};

export default Guides;
